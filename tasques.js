
const TASQUES = [

  /* ── 4t ESO Aplicades ─────────────────────────────────────────────────── */

  /* EXEMPLE: amagada (visible:'mai'). Es veu només amb  index.html?tot=1 .
     Quan tinguis les setmanes de la UD4, substitueix-la per les de debò.    */
  { unitat:'apl-u4', setmana:1, limit:'2026-11-29', visible:'mai', exercicis:[24, 25, 26, 32, 39, 'SA1'] },

  /* ── 4t ESO Acadèmiques ───────────────────────────────────────────────── */

];


const DIES_ABANS = 3;

/* ═══════════════════════════════════════════════════════════════════════
   LA PROGRAMACIÓ D'EXERCICIS
   ───────────────────────────────────────────────────────────────────────
   Aquest és l'ÚNIC fitxer que has de tocar per programar el curs.
   Edita'l, desa i fes commit: la web s'actualitza sola.

   Cada línia és una TASCA (una setmana de feina):

     { unitat:'apl-u4', setmana:3, limit:'2026-12-06',
       exercicis:[62, 63, 64, 70, 'SA1'] },

     unitat     la unitat, amb el prefix de la matèria: 'apl-u4' (Aplicades,
                unitat 4), 'aca-u2' (Acadèmiques, unitat 2)…
     setmana    el número que veurà l'alumne
     limit      data límit, sempre en format AAAA-MM-DD
     exercicis  els exercicis, EN L'ORDRE QUE VOLS QUE ELS FACIN.
                Un número (24) o, per als que no en tenen al llibre, la clau
                del catàleg entre cometes: 'R1' (repte), 'FN' (fake news),
                'SA1' (situació d'aprenentatge), 'AV1' (autoavaluació).

   L'ORDRE MANA. Si escrius [62, 63, 24, 70], l'alumne els veurà
   exactament així, encara que el 24 sigui d'una altra part del llibre.

   ── Barrejar unitats en una mateixa tasca ──────────────────────────────
   Un exercici d'una altra unitat s'escriu amb el prefix i dos punts:

     exercicis:[62, 63, 'apl-u3:44', 70]

   Útil per a setmanes de repàs abans d'un examen.

   ── Quan es fa visible una tasca ───────────────────────────────────────
   Per defecte, s'obre DIES_ABANS dies abans de la data límit (ara: 3).
   Ho pots canviar tasca per tasca:

     obre:'2026-11-20'     s'obre aquest dia concret
     visible:'sempre'      visible ja, passi el que passi
     visible:'mai'         amagada (per preparar-la amb antelació)

   Una tasca oberta ja no es torna a tancar: passada la data límit segueix
   consultable, marcada com a vençuda.

   Vista prèvia del professor: afegeix  ?tot=1  a l'adreça
   (index.html?tot=1) i es veuen totes les tasques, també les amagades.
   ═══════════════════════════════════════════════════════════════════════ */



/* ═══════════════════════════════════════════════════════════════════════
   A PARTIR D'AQUÍ NO CAL QUE TOQUIS RES
   ═══════════════════════════════════════════════════════════════════════ */

/* Identificador estable d'una tasca: 'apl-u4/s3'. Surt de la unitat i la
   setmana, així que no l'has d'escriure ni mantenir. */
function idTasca(t){ return t.unitat + '/s' + t.setmana; }

function _data(s){ return new Date(s + 'T00:00:00'); }

/* Quan s'obre una tasca: el que digui `obre`, o DIES_ABANS abans del límit. */
function dataObertura(t){
  if(t.obre) return _data(t.obre);
  const d = _data(t.limit);
  d.setDate(d.getDate() - DIES_ABANS);
  return d;
}

/* Vista prèvia del professor: afegint  ?tot=1  a l'adreça es veuen totes
   les tasques, també les que encara no s'han obert. Els alumnes no ho saben. */
function _preview(){
  try{ return location.search.indexOf('tot=1') >= 0; }catch(e){ return false; }
}

/* El que cal afegir als enllaços interns perquè la vista prèvia (?tot=1, i
   l'eina de marcar, &marca=1) no es perdi en passar d'una pàgina a l'altra. */
function cercaPreview(){
  try{ return _preview() ? location.search : ''; }catch(e){ return ''; }
}

function tascaVisible(t, ara){
  if(_preview()) return true;
  if(t.visible === 'sempre') return true;
  if(t.visible === 'mai')    return false;
  const avui = ara || new Date();
  avui.setHours(0,0,0,0);
  return avui >= dataObertura(t);
}

function tascaVencuda(t, ara){
  const avui = ara || new Date();
  avui.setHours(0,0,0,0);
  return avui > _data(t.limit);
}

/* Dies que falten per a la data límit (negatiu si ja ha passat). */
function diesRestants(t, ara){
  const avui = ara || new Date();
  avui.setHours(0,0,0,0);
  return Math.round((_data(t.limit) - avui) / 86400000);
}

/* Una clau d'exercici: 24 (o '24') és un número; 'SA1' es queda com a text. */
function _clauEx(x){
  const s = String(x).trim();
  return /^\d+$/.test(s) ? parseInt(s, 10) : s;
}

/* Els exercicis d'una tasca, resolts a {u, n}. Accepta 24, 'SA1' i 'apl-u3:44'. */
function refsDe(t){
  return t.exercicis.map(e => {
    const s = String(e);
    const k = s.indexOf(':');
    if(k < 0) return {u: t.unitat, n: _clauEx(s)};
    return {u: s.slice(0, k), n: _clauEx(s.slice(k + 1))};
  });
}

function tasquesDe(unitat, ara){
  return TASQUES.filter(t => t.unitat === unitat && tascaVisible(t, ara))
                .sort((a,b) => a.setmana - b.setmana);
}

function tascaPerId(id, ara){
  return TASQUES.find(t => idTasca(t) === id && tascaVisible(t, ara)) || null;
}

/* Data en català: "diumenge, 29 de novembre de 2026" */
function dataLlarga(s){
  try{
    return _data(s).toLocaleDateString('ca-ES',
      {weekday:'long', day:'numeric', month:'long', year:'numeric'});
  }catch(e){ return s; }
}
