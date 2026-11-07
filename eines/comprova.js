#!/usr/bin/env node
/* comprova.js — comprova que les dades del web quadren.

   Ús:  node eines/comprova.js        (des de l'arrel del repo)

   Mira:
     · cataleg.js   cada unitat de CATALEG és a UNITATS_META, i la seva matèria a MATERIES;
                    cada fitxa té títol, dificultat vàlida i imatges, i les imatges existeixen.
     · tasques.js   cada tasca té unitat coneguda, setmana, data vàlida i exercicis que són al
                    catàleg; no hi ha dues tasques amb el mateix identificador.
     · hints.js     cada pista és d'un exercici del catàleg, és d'una sola línia i només fa
                    servir <i>, <b> i <br> (cap altre «<»).
     · errades.js   es carrega, i cada errada és d'un exercici del catàleg i té ondiu i hadedir;
                    les imatges de marques i pegats existeixen.
   Acaba amb codi 1 si hi ha cap problema (el workflow comprova.yml surt en vermell). */
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const ARREL = path.resolve(__dirname, '..');
const problemes = [], avisos = [];
const mal = s => problemes.push(s), avis = s => avisos.push(s);

/* Carrega els fitxers del web en un mateix context, com fa el navegador. */
const ctx = { console, location: { search: '' }, localStorage: null, document: {} };
vm.createContext(ctx);
function carrega(f){
  const codi = fs.readFileSync(path.join(ARREL, f), 'utf8')
    .replace(/^const (\w+)\s*=/gm, 'var $1 =');      // perquè les constants quedin visibles
  vm.runInContext(codi, ctx, { filename: f });
}
['cataleg.js', 'tasques.js', 'hints.js', 'progres.js', 'errades.js'].forEach(f => {
  try { carrega(f); } catch (e) { mal(f + ': no es pot carregar (' + e.message + ')'); }
});
const { MATERIES, UNITATS_META, CATALEG, TASQUES, PISTES, ERRADES } = ctx;
const existeix = f => fs.existsSync(path.join(ARREL, f));
const DIF = ['', '●○○', '●●○', '●●●'];

/* ── cataleg.js ── */
let nFitxes = 0;
if (CATALEG) for (const u of Object.keys(CATALEG)) {
  const meta = UNITATS_META[u];
  if (!meta) mal(`cataleg.js: la unitat ${u} no és a UNITATS_META`);
  else if (!MATERIES[meta.materia]) mal(`cataleg.js: la matèria «${meta.materia}» de ${u} no és a MATERIES`);
  for (const [n, f] of Object.entries(CATALEG[u])) {
    nFitxes++;
    const k = `${u}/${n}`;
    if (!f.t) mal(`cataleg.js: ${k} no té títol (t)`);
    if (!DIF.includes(f.d)) mal(`cataleg.js: ${k} té una dificultat estranya: «${f.d}»`);
    if (!Array.isArray(f.i) || !f.i.length) { mal(`cataleg.js: ${k} no té imatges (i)`); continue; }
    f.i.forEach(img => { if (!existeix(path.join(u, img))) mal(`cataleg.js: ${k}: no existeix ${u}/${img}`); });
    if (!/^\d+$/.test(n) && !f.e) avis(`cataleg.js: ${k} té una clau de text i no té etiqueta (e)`);
  }
}
const aCataleg = (u, n) => !!(CATALEG && CATALEG[u] && CATALEG[u][n]);

/* ── tasques.js ── */
const ids = new Set();
if (TASQUES) TASQUES.forEach((t, i) => {
  const qui = `tasques.js, tasca ${i + 1} (${t.unitat} setmana ${t.setmana})`;
  if (!UNITATS_META[t.unitat]) mal(`${qui}: unitat desconeguda`);
  if (!Number.isInteger(t.setmana)) mal(`${qui}: la setmana ha de ser un número`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(t.limit || '') || isNaN(new Date(t.limit))) mal(`${qui}: data límit no vàlida («${t.limit}»)`);
  if (t.obre && !/^\d{4}-\d{2}-\d{2}$/.test(t.obre)) mal(`${qui}: data d'obertura no vàlida («${t.obre}»)`);
  if (t.visible && !['sempre', 'mai'].includes(t.visible)) mal(`${qui}: visible ha de ser 'sempre' o 'mai'`);
  const id = ctx.idTasca(t);
  if (ids.has(id)) mal(`${qui}: hi ha dues tasques amb l'identificador ${id}`);
  ids.add(id);
  if (!Array.isArray(t.exercicis) || !t.exercicis.length) { mal(`${qui}: no té exercicis`); return; }
  const vistos = new Set();
  ctx.refsDe(t).forEach(r => {
    if (!aCataleg(r.u, r.n)) mal(`${qui}: l'exercici ${r.u}/${r.n} no és al catàleg`);
    if (vistos.has(r.u + '/' + r.n)) avis(`${qui}: l'exercici ${r.u}/${r.n} hi surt dues vegades`);
    vistos.add(r.u + '/' + r.n);
  });
});

/* ── hints.js ── */
if (PISTES) for (const [k, text] of Object.entries(PISTES)) {
  const j = k.lastIndexOf('/');
  const u = k.slice(0, j), n = k.slice(j + 1);
  if (!aCataleg(u, n)) mal(`hints.js: la pista ${k} és d'un exercici que no és al catàleg`);
  if (/[\r\n]/.test(text)) mal(`hints.js: la pista ${k} té salts de línia`);
  const sense = text.replace(/<\/?(i|b)( class="vec")?>|<br>/g, '');
  if (sense.includes('<')) mal(`hints.js: la pista ${k} té un «<» que no és <i>, <b> ni <br>`);
  for (const tag of ['i', 'b']) {
    const obre = (text.match(new RegExp(`<${tag}[ >]`, 'g')) || []).length;
    const tanca = (text.match(new RegExp(`</${tag}>`, 'g')) || []).length;
    if (obre !== tanca) mal(`hints.js: la pista ${k} té etiquetes <${tag}> sense tancar`);
  }
  if (/(<br>|\s)$/.test(text)) mal(`hints.js: la pista ${k} acaba amb <br> o amb un espai`);
  if (text.includes('$') || text.includes('`')) mal(`hints.js: la pista ${k} té «$» o un accent greu`);
}

/* ── errades.js ── */
const imatgesDe = camp => !camp ? [] : (Array.isArray(camp[0]) ? camp : [camp]);
if (ERRADES) for (const [k, llista] of Object.entries(ERRADES)) {
  const j = k.lastIndexOf('/');
  const u = k.slice(0, j), n = k.slice(j + 1);
  if (!aCataleg(u, n)) mal(`errades.js: ${k} no és al catàleg`);
  llista.forEach((e, i) => {
    if (!e.ondiu || !e.hadedir) mal(`errades.js: ${k} #${i}: hi falta ondiu o hadedir`);
    imatgesDe(e.marca).forEach(m => { if (!existeix(path.join(u, m[0]))) mal(`errades.js: ${k} #${i}: no existeix la imatge ${u}/${m[0]}`); });
    imatgesDe(e.pegat).forEach(p => {
      if (!existeix(path.join(u, p[0]))) mal(`errades.js: ${k} #${i}: no existeix la imatge ${u}/${p[0]}`);
      if (!existeix(path.join('pegats', u, p[5]))) mal(`errades.js: ${k} #${i}: no existeix el pegat pegats/${u}/${p[5]}`);
    });
  });
}

/* ── Resum ── */
avisos.forEach(a => console.log('  ! ' + a));
problemes.forEach(p => console.log('  ✗ ' + p));
console.log(`matèries: ${Object.keys(MATERIES || {}).length} · unitats: ${Object.keys(UNITATS_META || {}).length}`
  + ` · fitxes: ${nFitxes} · tasques: ${(TASQUES || []).length} · pistes: ${Object.keys(PISTES || {}).length}`
  + ` · exercicis amb errades: ${Object.keys(ERRADES || {}).length}`);
if (problemes.length) { console.log(`HI HA ${problemes.length} PROBLEMES`); process.exit(1); }
console.log('TOT CORRECTE' + (avisos.length ? ` (amb ${avisos.length} avisos)` : ''));
