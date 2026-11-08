/* ═══════════════════════════════════════════════════════════════════════
   LES ERRADES DEL SOLUCIONARI
   ───────────────────────────────────────────────────────────────────────
   El solucionari té errades. Aquí hi ha les dels exercicis programats a
   tasques.js. La clau és la mateixa que a hints.js:  'unitat/exercici'.

     'apl-ud10/U4.76': [
       { lloc:    TEX`f)`,
         ondiu:   TEX`$\dlim_{x\to 3}\dfrac{3-x}{x+2}=0$`,
         hadedir: TEX`$\dlim_{x\to 3}\dfrac{-(3+x)}{x+2}=-\dfrac{6}{5}$`,
         motiu:   TEX`Els factors $3-x$ i $x-3$ són oposats.` },
     ],

   Cada exercici porta una LLISTA d'errades (entre [ ]), en l'ordre en què
   surten a la solució. De cada errada:

     lloc      on és: l'apartat i, si cal, un detall
               (TEX`f)` , TEX`e), punt $x=1$` , TEX`segon punt` ...).
               Si no cal dir res, aquesta línia no es posa.
     ondiu     el que hi ha imprès al solucionari
     hadedir   el que hi hauria de dir
     motiu     l'explicació. Només es veu si ERRADES_MOTIU és true.
     pegat     un tros de la pàgina ja corregit, que es posa a sobre de la imatge:
                 pegat: ['continuitat/data/full-2.png', 82.2, 7.4, 5.5, 1.7, '92-1a.png']
               La imatge, el rectangle (en tant per cent, com a `marca`) i el
               fitxer, que és a  pegats/<unitat>/ . Amb ERRADES_PEGATS encès,
               una errada amb pegat no s'anuncia enlloc (ni avís ni targeta ni
               requadre): l'alumne veu la pàgina corregida i prou. Les errades
               d'enunciat s'anuncien igualment a la llista, perquè el llibre
               de l'alumne continua tenint l'errada. Els pegats no es poden
               fer a mà: els fa  eines/pegats/  (vegeu eines/LLEGEIX-ME.md).
     enunciat  s'escriu  enunciat: 1  quan l'errada és a l'ENUNCIAT i no a la
               solució. Aquestes es mostren ja a la llista de la tasca,
               abans que l'alumne comenci l'exercici.
     marca     on és l'errada DINS DE LA IMATGE: el fitxer (tal com surt a
               cataleg.js) i un rectangle en percentatges de la imatge:
                   marca: ['limits-punt/data/full-4.png', x, y, amplada, alçada],
               (x, y) és el cantó de dalt a l'esquerra. Si l'errada ocupa dos
               llocs, una llista de rectangles:  marca: [[...], [...]],
               No s'escriu a mà: obre  tasca.html?tot=1&marca=1  , entra a
               l'exercici, arrossega un rectangle sobre la imatge i copia la
               línia que et dona. Una errada sense `marca` es veu igualment,
               només que sense senyal a la imatge.

   Un exercici sense entrada aquí no mostra res: no cal deixar-hi cap
   llista buida.

   COM S'ESCRIU EL TEXT
     · Sempre entre accents greus i amb TEX al davant:  TEX`...`
       Així el LaTeX s'escriu tal qual, sense doblar cap barra invertida.
     · Les fórmules van entre dòlars, $...$, com en un fitxer .tex.
       Les pinta KaTeX (assets/katex). Hi ha definides \dlim (límit amb el
       subíndex a sota) i \R (els nombres reals), com a defs.tex.
     · Fora dels dòlars és text normal. Només s'hi entenen tres comandes
       d'espai:  \quad   \;   \,
     · Dins del text no hi pot haver cap accent greu ni la parella ${

   ON ES VEU (tasca.html)
     · A la llista de la tasca: una etiqueta vermella al costat del botó
       «Veure solució» («2 errades al solucionari»). Les errades d'enunciat
       hi surten senceres, perquè s'han de saber abans de començar.
     · Dins de l'exercici: una targeta «On diu / Ha de dir» per errada, just
       abans de la imatge, i un requadre vermell numerat sobre la imatge, al
       lloc de l'errada. En tocar el requadre (o «Mostra-ho a la imatge»),
       la imatge s'amplia en aquell punt amb la correcció a sota.

   D'ON SURT AQUEST FITXER
     Les errades surten dels .tex de  tex/  (errors-setmanaN.tex). Aquest
     fitxer es pot tornar a fer sencer amb  eines/conversor/genera.py , que
     ajunta tex/, les marques (eines/localitzador/marques.json) i els pegats
     (eines/pegats/pegats.json). Vegeu ERRADES.md.
     Si hi canvies res a mà, passa també el canvi a aquestes fonts: si no,
     es perdrà el dia que algú torni a generar el fitxer.
   ═══════════════════════════════════════════════════════════════════════ */

/* ── Interruptors ───────────────────────────────────────────────────────
   Són els dos que hi havia a dalt de main.tex. Per encendre'n un, canvia
   false per true. */
const ERRADES_MOTIU = false;   // true: cada errada mostra també el «Motiu»
const ERRADES_OBS   = false;   // true: es veuen també les observacions
const ERRADES_PEGATS = true;   // true: on hi ha «pegat», la imatge es veu ja corregida i l'errada no s'anuncia

const TEX = String.raw;        // no toquis aquesta línia

const ERRADES = {

  /* ── 4t ESO Aplicades · UD4 · Mesura indirecta (Santillana U5) ────────── */

  'apl-ud4/U5.64': [
    { ondiu:   TEX`Els costats mesuraran $6$; $9{,}6$ i $12{,}8$ cm.`,
      hadedir: TEX`Els costats mesuraran $8$; $9{,}6$ i $12{,}8$ cm.`,
      motiu:   TEX`$5\cdot 1{,}6 = 8$, no $6$.`,
      marca:   ['u5-semblanca/data/full-3.png', 55.2, 34.6, 31.0, 4.4] },
  ],

  'apl-ud4/U5.77': [
    { ondiu:   TEX`$\dfrac{\overline{AB}}{\overline{CB}} = \dfrac{n}{m}$, i després $\dfrac{\overline{AB}}{h} = 1 + \dfrac{\overline{AB}}{\overline{CB}}$`,
      hadedir: TEX`$\dfrac{\overline{AB}}{\overline{CD}} = \dfrac{n}{m}$, i després $\dfrac{\overline{AB}}{h} = 1 + \dfrac{\overline{AB}}{\overline{CD}}$`,
      motiu:   TEX`La raó és entre les dues columnes, $\overline{AB}$ i $\overline{CD}$; $\overline{CB}$ és un dels cables. El resultat final, $h = \dfrac{\overline{AB}\cdot\overline{CD}}{\overline{AB}+\overline{CD}}$, és correcte.`,
      marca:   [['u5-problemes/data/full-1.png', 57.0, 90.0, 10.5, 4.8],
                ['u5-problemes/data/full-2.png', 9.0, 0.5, 20.0, 10.0]] },
  ],

  /* ── 4t ESO Aplicades · UD11 · Idea de polinomi (annex de Polinomis) ─── */

  'apl-ud11/AP.74': [
    { enunciat: 1,
      lloc:    TEX`la taula de l’OMS`,
      ondiu:   TEX`$17\,686\cdot\text{pes} + 658{,}2$ \quad i \quad $13\,384\cdot\text{pes} + 692{,}6$`,
      hadedir: TEX`$17{,}686\cdot\text{pes} + 658{,}2$ \quad i \quad $13{,}384\cdot\text{pes} + 692{,}6$`,
      motiu:   TEX`Són els coeficients de l’OMS: $17{,}686$ i $13{,}384$. Amb $17\,686$, una persona de $50$ kg necessitaria més de $880\,000$ kcal al dia.`,
      marca:   ['ap-problemes/data/full-2.png', 15.5, 72.8, 30.8, 5.0] },
    { ondiu:   TEX`$1{,}40\cdot(17\,686\cdot x + 658{,}2)$, $1{,}40\cdot(13\,384\cdot x + 692{,}6)$…`,
      hadedir: TEX`$1{,}40\cdot(17{,}686\, x + 658{,}2)$, $1{,}40\cdot(13{,}384\, x + 692{,}6)$…`,
      motiu:   TEX`La mateixa errada de la taula, a les vuit expressions de la solució.`,
      marca:   ['ap-problemes/data/full-2.png', 55.2, 19.4, 31.5, 28.6] },
  ],

  'apl-ud11/AP.77': [
    { ondiu:   TEX`$B(365) = 1\,460$ € de benefici`,
      hadedir: TEX`$B(365) = 1\,460$ milers d’euros, és a dir, $1\,460\,000$ € de benefici`,
      motiu:   TEX`L’enunciat diu que els ingressos i les despeses són en milers d’euros.`,
      marca:   ['ap-problemes/data/full-3.png', 57.0, 8.6, 30.8, 4.6] },
  ],

  /* ── 4t ESO Aplicades · UD5 · Equacions de 2n grau (Santillana U3, U7 i annex) ─ */

  'apl-ud5/U3.33': [
    { enunciat: 1,
      lloc:    TEX`e)`,
      ondiu:   TEX`$x^2 + x - 1 = 0$`,
      hadedir: TEX`$x^2 + x - 6 = 0$`,
      motiu:   TEX`Les solucions de $x^2 + x - 1 = 0$ són $\dfrac{-1 \pm \sqrt{5}}{2}$, que no són a la llista. La solució resol $x^2 + x - 6 = 0$.`,
      marca:   ['u3-equacions/data/full-1.png', 9.6, 67.6, 17.8, 3.2] },
  ],

  'apl-ud5/U3.41': [
    { lloc:    TEX`e)`,
      ondiu:   TEX`$(x - 12) \to x^2 + x - 2 + 3x = \ldots$`,
      hadedir: TEX`$x^2 + x - 2 + 3x = \ldots$`,
      motiu:   TEX`Al principi de la línia sobra «$(x - 12) \to$». La resolució és correcta.`,
      marca:   ['u3-equacions/data/full-4.png', 11.2, 0.2, 13.5, 3.2] },
  ],

  'apl-ud5/U3.44': [
    { ondiu:   TEX`$\dfrac{(10 - 6\sqrt{2})(\sqrt{2} + 1)}{(\sqrt{2} - 1)(\sqrt{2} + 1)} = \dfrac{6 - 6\sqrt{2} + 3 + 1}{2 - 1}$`,
      hadedir: TEX`$\dfrac{(10 - 6\sqrt{2})(\sqrt{2} + 1)}{(\sqrt{2} - 1)(\sqrt{2} + 1)} = \dfrac{10\sqrt{2} + 10 - 12 - 6\sqrt{2}}{2 - 1}$`,
      motiu:   TEX`El numerador de la línia del mig és $3(\sqrt{2} - 1)^2 + 1$ sense desenvolupar, i no el producte de la línia anterior. El resultat, $a = 4\sqrt{2} - 2$, és correcte.`,
      marca:   ['u3-equacions/data/full-4.png', 56.8, 67.0, 23.5, 4.6] },
  ],

  'apl-ud5/U3.63': [
    { ondiu:   TEX`$(x - 1)x = 36 \to x^2 - 2x - 35 = 0 \to x = 7$`,
      hadedir: TEX`$(x - 1)x = 36 \to x^2 - x - 36 = 0$, que no té cap solució entera`,
      motiu:   TEX`Amb $36$ regals el problema no té solució. Amb $7$ persones hi ha $7\cdot 6 = 42$ regals: si l’enunciat digués $42$, $x^2 - x - 42 = 0 \to x = 7$.`,
      marca:   ['u3-problemes/data/full-1.png', 9.2, 34.0, 36.0, 7.0] },
  ],

  'apl-ud5/U7.95': [
    { ondiu:   TEX`Una paràbola d’equació $y = x^2 + bx + c$ … $y = x^2 - 4{,}6x + 8{,}79$`,
      hadedir: TEX`Una paràbola $y = a(x - 2{,}3)^2 + 3{,}5$ amb $a < 0$`,
      motiu:   TEX`Amb el coeficient de $x^2$ igual a $1$, el vèrtex $(2{,}3;\ 3{,}5)$ és el punt més baix de la paràbola, no el més alt. Per trobar $a$ cal una altra dada: per exemple, que la pilota entra a la cistella, a $3{,}05$ m d’alçada.`,
      marca:   [['u7-problemes/data/full-1.png', 56.8, 25.6, 26.5, 4.6],
                ['u7-problemes/data/full-1.png', 59.4, 46.0, 33.5, 2.9]] },
  ],

  'apl-ud5/AP.52': [
    { lloc:    TEX`d)`,
      ondiu:   TEX`$\ldots + \dfrac{2x^3}{5} = \ldots + \dfrac{51x^3}{125} + \ldots$`,
      hadedir: TEX`$\ldots - \dfrac{2x^3}{5} = \ldots - \dfrac{51x^3}{125} + \ldots$`,
      motiu:   TEX`El doble producte dels tres termes és $6\cdot\dfrac{x^2}{3}\cdot\left(-\dfrac{x}{5}\right)\cdot 1 = -\dfrac{2x^3}{5}$, i $-\dfrac{x^3}{125} - \dfrac{2x^3}{5} = -\dfrac{51x^3}{125}$.`,
      marca:   [['ap-igualtats/data/full-2.png', 32.3, 5.2, 4.8, 4.2],
                ['ap-igualtats/data/full-2.png', 32.0, 9.7, 8.0, 4.4]] },
  ],

};


/* ═══════════════════════════════════════════════════════════════════════
   LES OBSERVACIONS
   ───────────────────────────────────────────────────────────────────────
   Comentaris que no són errades, però que poden confondre. Només es veuen
   si ERRADES_OBS és true: surten dins de l'exercici, sota les errades.

     'apl-ud10/U4.66': [
       { lloc: TEX`c) i d)`,
         text: TEX`Les respostes són el nombre màxim.` },
     ],

   `lloc` és opcional, igual que a les errades. Una observació que parla de
   dos exercicis està escrita dues vegades, un cop a cada exercici.
   ═══════════════════════════════════════════════════════════════════════ */

const OBSERVACIONS = {

};


/* ═══════════════════════════════════════════════════════════════════════
   A PARTIR D'AQUÍ NO CAL QUE TOQUIS RES
   ═══════════════════════════════════════════════════════════════════════ */

/* Les dues comandes pròpies de defs.tex que fan servir els textos. */
const ERRADES_MACROS = { '\\dlim': '\\displaystyle\\lim', '\\R': '\\mathbb{R}' };

/* Les errades d'un exercici (llista buida si no en té). */
function erradesDe(u, n){
  return ERRADES[u + '/' + n] || [];
}

/* Les observacions d'un exercici. Cap, si l'interruptor és apagat. */
function observacionsDe(u, n){
  return ERRADES_OBS ? (OBSERVACIONS[u + '/' + n] || []) : [];
}

/* La icona d'avís: un triangle amb un signe d'admiració. Es dibuixa aquí, i
   no amb el caràcter ⚠, perquè es vegi igual a tots els mòbils i ordinadors. */
const _ICONA_AVIS = '<svg class="err-ico" viewBox="0 0 24 24" aria-hidden="true" focusable="false">'
  + '<path d="M12 3.6 21.7 20.4H2.3Z" fill="currentColor" stroke="currentColor" stroke-width="2.6" stroke-linejoin="round"/>'
  + '<path d="M12 9.4v5" fill="none" stroke="#fff" stroke-width="2.3" stroke-linecap="round"/>'
  + '<circle cx="12" cy="18" r="1.35" fill="#fff"/></svg>';

/* L'avís que surt a la targeta de l'exercici, a la llista de la tasca:
   «2 errades al solucionari». Només compta les errades de la SOLUCIÓ: les
   d'enunciat es mostren senceres allà mateix (vegeu htmlErradesEnunciat).
   Cadena buida si la solució no té cap errada. */
function avisErrades(u, n){
  const k = erradesDe(u, n).filter(e => !e.enunciat && !_callada(e)).length;
  if(!k) return '';
  return k === 1 ? '1 errada al solucionari' : k + ' errades al solucionari';
}

function htmlAvisErrades(u, n){
  const text = avisErrades(u, n);
  return text ? '<span class="ex-err">' + _ICONA_AVIS + '<span>' + text + '</span></span>' : '';
}

/* ── De text amb fórmules a HTML ──────────────────────────────────────── */

function _escapa(s){
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* Un tros de text normal (fora dels dòlars). */
function _textAHtml(t){
  return _escapa(t)
    .replace(/\\quad\s*/g, '&emsp;')
    .replace(/\\;/g, '&ensp;')
    .replace(/\\,/g, '&thinsp;')
    .replace(/\\([$%])/g, '$1');
}

/* Una fórmula (el que hi ha entre dos dòlars), amb la puntuació que porta
   enganxada: `abans` («, parèntesi d'obrir) i `despres` (punt, coma, »...).
   Aquesta puntuació es posa DINS de la fórmula perquè, en pantalles estretes,
   no quedi mai sola en una altra línia.
   Si KaTeX no s'ha pogut carregar, es mostra el LaTeX tal qual: es llegeix
   pitjor, però no es perd res. */
const _KATEX_FI   = '</span></span></span>';     // tanca l'últim tros, .katex-html i .katex
const _KATEX_TROS = '<span class="base">';       // obre el primer tros de la fórmula

function _formulaAHtml(tex, abans, despres){
  abans = abans || ''; despres = despres || '';
  let h = null;
  if(typeof katex !== 'undefined'){
    try{
      h = katex.renderToString(tex, {
        throwOnError: false,
        macros: Object.assign({}, ERRADES_MACROS)
      });
    }catch(e){ h = null; }
  }
  if(h === null){
    return _escapa(abans) + '<code class="err-tex">' + _escapa(tex) + '</code>' + _escapa(despres);
  }
  if(despres && h.endsWith(_KATEX_FI)){
    h = h.slice(0, -_KATEX_FI.length) + '<span class="err-punt">' + _escapa(despres) + '</span>' + _KATEX_FI;
    despres = '';
  }
  const i = abans ? h.indexOf(_KATEX_TROS) : -1;
  if(i >= 0){
    const tall = i + _KATEX_TROS.length;
    h = h.slice(0, tall) + '<span class="err-punt">' + _escapa(abans) + '</span>' + h.slice(tall);
    abans = '';
  }
  return _escapa(abans) + h + _escapa(despres);
}

/* Text amb fórmules entre $...$  →  HTML. */
function texAHtml(s){
  if(!s) return '';
  s = String(s);

  /* 1) Es talla en trossos: text, fórmula, text, fórmula... */
  const trossos = [];
  let tros = '', mates = false;
  for(let i = 0; i < s.length; i++){
    const c = s[i];
    if(c === '\\' && i + 1 < s.length){ tros += c + s[i + 1]; i++; continue; }
    if(c === '$'){
      trossos.push({mates: mates, s: tros});
      tros = ''; mates = !mates;
      continue;
    }
    tros += c;
  }
  /* Si ha quedat un dòlar sense tancar, el que venia darrere es mostra com
     a text, amb el dòlar al davant, perquè es vegi que falta l'altre. */
  trossos.push({mates: false, s: (mates ? '$' : '') + tros});

  /* 2) Cada fórmula s'emporta la puntuació que té enganxada a banda i banda. */
  let html = '';
  for(let i = 0; i < trossos.length; i++){
    const t = trossos[i];
    if(!t.mates){ html += _textAHtml(t.s); continue; }
    let abans = '', despres = '';
    const m = /[«(\[¿¡]+$/.exec(html);
    if(m){ abans = m[0]; html = html.slice(0, m.index); }
    const seg = trossos[i + 1];
    if(seg && !seg.mates){
      const d = /^[.,;:!?»)\]]+/.exec(seg.s);
      if(d){ despres = d[0]; seg.s = seg.s.slice(d[0].length); }
    }
    html += _formulaAHtml(t.s, abans, despres);
  }
  return html;
}

/* Demana per endavant les dues lletres que fan servir totes les fórmules.
   tasca.html ho crida quan la tasca té alguna errada: així, quan l'alumne
   obre un exercici, les fórmules surten de cop i no després d'un instant
   en blanc. Si el navegador no ho sap fer, no passa res. */
function preparaFormules(){
  try{
    if(document.fonts && document.fonts.load){
      document.fonts.load('1em KaTeX_Main');
      document.fonts.load('italic 1em KaTeX_Math');
    }
  }catch(e){}
}

/* ── Les targetes ─────────────────────────────────────────────────────── */

/* «f)» → «Apartat f)»,  «b) i c)» → «Apartats b) i c)»,
   «segon punt» → «Segon punt». */
function _llocAHtml(lloc){
  const l = String(lloc || '').trim();
  if(!l) return '';
  if(/^[a-z]\)/.test(l)){
    return (/^[a-z]\)\s+i\s+[a-z]\)/.test(l) ? 'Apartats ' : 'Apartat ') + texAHtml(l);
  }
  return texAHtml(l.charAt(0).toUpperCase() + l.slice(1));
}

function _filaErrada(classe, etiqueta, text){
  return '<div class="err-fila"><div class="err-et ' + classe + '">' + etiqueta + '</div>'
       + '<div class="err-val">' + texAHtml(text) + '</div></div>';
}

/* Les marques d'una errada: llista de {img, x, y, w, h}, en percentatges de
   la imatge. Accepta un rectangle sol o una llista de rectangles. */
/* ── Els pegats ─────────────────────────────────────────────────────────
   Trossos de la pàgina ja corregits que es posen a sobre de la imatge. */

/* Els pegats d'una errada, sempre com a llista de {img, x, y, w, h, f}. */
function pegatsDe(e){
  const p = e && e.pegat;
  if(!Array.isArray(p) || !p.length) return [];
  return (Array.isArray(p[0]) ? p : [p])
    .filter(r => r && r.length >= 6)
    .map(r => ({img: r[0], x: +r[1], y: +r[2], w: +r[3], h: +r[4], f: r[5]}));
}

/* Una errada «callada»: la imatge ja es veu corregida i no cal anunciar-la. */
function _callada(e){
  return ERRADES_PEGATS && pegatsDe(e).length > 0;
}

/* El número que porta una errada: la seva posició entre les que s'anuncien. */
function _numero(errs, k){
  let n = 0;
  for(let i = 0; i <= k; i++) if(!_callada(errs[i])) n++;
  return n;
}

/* Tots els pegats que van sobre una imatge (`img`, escrita com a cataleg.js),
   siguin de l'exercici que siguin: la pàgina s'ha de veure corregida es miri
   des d'on es miri. Cadena buida si no n'hi ha o si l'interruptor és apagat. */
let _PEGATS_PER_IMATGE = null;
function htmlPegats(u, img){
  if(!ERRADES_PEGATS) return '';
  if(!_PEGATS_PER_IMATGE){
    _PEGATS_PER_IMATGE = {};
    Object.keys(ERRADES).forEach(clau => {
      const un = clau.split('/')[0];
      ERRADES[clau].forEach(e => pegatsDe(e).forEach(q => {
        const k = un + '/' + q.img;
        (_PEGATS_PER_IMATGE[k] = _PEGATS_PER_IMATGE[k] || []).push('<img class="pegat" alt="" src="pegats/' + un + '/' + q.f
          + '" style="left:' + q.x + '%;top:' + q.y + '%;width:' + q.w + '%;height:' + q.h + '%">');
      }));
    });
  }
  return (_PEGATS_PER_IMATGE[u + '/' + img] || []).join('');
}

/* ── Les marques ──────────────────────────────────────────────────────── */

function marquesDe(e){
  const m = e && e.marca;
  if(!m || !m.length) return [];
  return (Array.isArray(m[0]) ? m : [m])
    .filter(r => r && r.length >= 5)
    .map(r => ({img: r[0], x: +r[1], y: +r[2], w: +r[3], h: +r[4]}));
}

/* Els requadres vermells d'un exercici que cauen sobre una imatge (`img` és
   el camí tal com surt al catàleg). Cada requadre porta el número de la seva
   errada, el mateix que la targeta. */
function htmlMarques(u, n, img){
  let h = '';
  const errs = erradesDe(u, n);
  errs.forEach((e, k) => {
    if(_callada(e)) return;
    const num = _numero(errs, k);
    marquesDe(e).forEach(r => {
      if(r.img !== img) return;
      h += '<button type="button" class="marca" data-k="' + k + '" style="left:' + r.x + '%;top:' + r.y
         + '%;width:' + r.w + '%;height:' + r.h + '%" aria-label="Errada ' + num
         + ': amplia la imatge i mostra la correcció"><span class="marca-num">' + num + '</span></button>';
    });
  });
  return h;
}

/* Una errada: on és i les dues files «On diu» i «Ha de dir» (i «Motiu», si
   l'interruptor és encès). Amb `senseEnunciat`, no s'hi escriu «Enunciat»
   perquè ja ho diu el títol del bloc. `k` és la posició de l'errada dins de
   l'exercici: si es passa i l'errada té marca a la imatge, la targeta porta
   el mateix número que el requadre i un botó per anar-hi. */
function _htmlErrada(e, senseEnunciat, k, num){
  let lloc = _llocAHtml(e.lloc);
  if(e.enunciat && !senseEnunciat) lloc = 'Enunciat' + (lloc ? ' · ' + lloc : '');
  const ambMarca = k !== undefined && k !== null && marquesDe(e).length > 0;
  let h = '<div class="err-card"' + (ambMarca ? ' data-k="' + k + '"' : '') + '>';
  if(lloc || ambMarca){
    h += '<div class="err-lloc">'
       + (ambMarca ? '<span class="err-num" aria-hidden="true">' + (num || k + 1) + '</span>' : '')
       + '<span class="err-lloc-text">' + lloc + '</span>'
       + (ambMarca ? '<button type="button" class="err-veure" data-k="' + k + '">Mostra-ho a la imatge</button>' : '')
       + '</div>';
  }
  h += _filaErrada('err-et-on', 'On diu', e.ondiu);
  h += _filaErrada('err-et-ha', 'Ha de dir', e.hadedir);
  if(ERRADES_MOTIU && e.motiu) h += _filaErrada('err-et-mo', 'Motiu', e.motiu);
  return h + '</div>';
}

/* La targeta d'una sola errada, per al peu de la imatge ampliada. */
function htmlErradaSola(u, n, k){
  const e = erradesDe(u, n)[k];
  if(!e) return '';
  let lloc = _llocAHtml(e.lloc);
  if(e.enunciat) lloc = 'Enunciat' + (lloc ? ' · ' + lloc : '');
  let h = '<div class="err-lloc"><span class="err-num" aria-hidden="true">' + _numero(erradesDe(u, n), k) + '</span>'
        + '<span class="err-lloc-text">' + (lloc || 'Errada del solucionari') + '</span></div>';
  h += _filaErrada('err-et-on', 'On diu', e.ondiu);
  h += _filaErrada('err-et-ha', 'Ha de dir', e.hadedir);
  if(ERRADES_MOTIU && e.motiu) h += _filaErrada('err-et-mo', 'Motiu', e.motiu);
  return h;
}

function _htmlObservacio(o){
  const lloc = _llocAHtml(o.lloc);
  return '<div class="err-card">'
       + (lloc ? '<div class="err-lloc">' + lloc + '</div>' : '')
       + '<div class="err-val">' + texAHtml(o.text) + '</div></div>';
}

function _quantes(n){
  return n === 1 ? 'una errada' : n + ' errades';
}

function _titolBloc(text){
  return '<div class="err-cap">' + _ICONA_AVIS + '<span>' + text + '</span></div>';
}

/* El bloc que surt dins de l'exercici, abans de la imatge: totes les errades
   i, si l'interruptor és encès, les observacions. Cadena buida si no hi ha res. */
function htmlErrades(u, n){
  const totes = erradesDe(u, n);
  const errs = totes.filter(e => !_callada(e));          // les que tenen pegat ja es veuen corregides: no s'anuncien
  const obs  = observacionsDe(u, n);
  let h = '';
  if(errs.length){
    const k = errs.filter(e => e.enunciat).length;      // quantes són a l'enunciat
    const titol = k === errs.length ? 'L’enunciat d’aquest exercici té ' + _quantes(k)
                : k === 0           ? 'El solucionari té ' + _quantes(errs.length) + ' en aquest exercici'
                :                     'Aquest exercici té ' + _quantes(errs.length);
    h += '<div class="err-panel" role="note">' + _titolBloc(titol)
       + errs.map(e => _htmlErrada(e, k === errs.length, totes.indexOf(e), _numero(totes, totes.indexOf(e)))).join('')
       + '</div>';
  }
  if(obs.length){
    const titol = obs.length === 1 ? 'Una observació sobre aquest exercici'
                                   : obs.length + ' observacions sobre aquest exercici';
    h += '<div class="err-panel err-obs" role="note">'
       + '<div class="err-cap"><span>' + titol + '</span></div>'
       + obs.map(_htmlObservacio).join('')
       + '</div>';
  }
  return h;
}

/* El bloc que surt a la llista de la tasca: només les errades d'enunciat,
   que l'alumne ha de conèixer abans de començar. Cadena buida si no n'hi ha. */
function htmlErradesEnunciat(u, n){
  const errs = erradesDe(u, n).filter(e => e.enunciat);
  if(!errs.length) return '';
  return '<div class="err-panel err-llista" role="note">'
       + _titolBloc(errs.length === 1 ? 'L’enunciat té una errada' : 'L’enunciat té ' + errs.length + ' errades')
       + errs.map(e => _htmlErrada(e, true)).join('')
       + '</div>';
}
