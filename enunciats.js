/* ═══════════════════════════════════════════════════════════════════════
   ELS ENUNCIATS
   ───────────────────────────────────────────────────────────────────────
   L'enunciat complet d'un exercici, en català i amb les fórmules en LaTeX
   (les pinta KaTeX). A la llista de la tasca substitueix el títol curt del
   catàleg. Un exercici sense enunciat aquí mostra el títol curt, com abans.

   Només hi van els exercicis programats a tasques.js (com les pistes).

     'apl-u4/24': {
       text:     TEX`Troba de quines equacions és solució $x = 2$, $y = -1$.`,
       apartats: [TEX`$x + 3y = 5$`, TEX`$\dfrac{x}{2} + y = 0$`, ...],
       col:      3 },

   Camps (tots opcionals, però n'hi ha d'haver algun):
     titol     el nom d'una situació d'aprenentatge, en negreta («Més a prop, millor»)
     text      l'enunciat
     punts     una llista de preguntes amb pic (situacions d'aprenentatge)
     apartats  els apartats a), b), c)… en l'ordre del llibre
     col       en quantes columnes van els apartats (1–4; per defecte, 2).
               Al mòbil, com a molt 2.
     fig       figures retallades del PDF (gràfiques, taules, dibuixos), dins la
               carpeta de la unitat: ['enunciats/37-1.png']. Es fan amb
               eines/figura.py i surten a sota del text.
     despres   text que va després dels apartats (o de la figura)

   Com s'escriu: igual que a errades.js. Sempre TEX`...` amb accents greus;
   les fórmules entre $...$. Cap accent greu ni la parella ${ dins del text.
   Un sistema:  $\left.\begin{aligned} x+y&=4\\ 2x+2y&=5 \end{aligned}\right\}$

   Fa servir TEX i texAHtml d'errades.js: s'ha de carregar després.
   ═══════════════════════════════════════════════════════════════════════ */

const ENUNCIATS = {

  /* ── 4t ESO Aplicades · Unitat 4 · Sistemes d'equacions i inequacions ── */

  'apl-u4/24': {
    text: TEX`Troba de quines equacions és solució $x = 2$, $y = -1$.`,
    apartats: [
      TEX`$x + 3y = 5$`, TEX`$\dfrac{x}{2} + y = 0$`, TEX`$-2x + y = -5$`,
      TEX`$3x - y = 7$`, TEX`$4x + 3y = 4$`, TEX`$x = 2y$`],
    col: 3 },

  'apl-u4/25': {
    text: TEX`Troba de quines equacions és solució el parell $(2, 3)$.`,
    apartats: [
      TEX`$x + y = 1$`, TEX`$-x + y = 1$`, TEX`$3x - \dfrac{y}{3} = 5$`,
      TEX`$y = -x + 5$`, TEX`$2x - y = 1$`, TEX`$\dfrac{x}{2} + 2 = y$`],
    col: 3 },

  'apl-u4/26': {
    text: TEX`Esbrina quins d’aquests parells són solució de l’equació $3x - \dfrac{y}{2} = 6$.`,
    apartats: [
      TEX`$(1, -6)$`, TEX`$(-1, 6)$`, TEX`$\left(\dfrac{1}{6}, -11\right)$`,
      TEX`$(0, 12)$`, TEX`$(-2, -24)$`, TEX`$\left(\dfrac{1}{3}, 10\right)$`],
    col: 3 },

  'apl-u4/32': {
    text: TEX`Determina quantes solucions tenen aquests sistemes d’equacions i interpreta geomètricament el resultat.`,
    apartats: [
      TEX`$\left.\begin{aligned} 3x - y &= 1\\ -6x + 2y &= -2 \end{aligned}\right\}$`,
      TEX`$\left.\begin{aligned} x - 5y &= 11\\ 2x + 3y &= -4 \end{aligned}\right\}$`,
      TEX`$\left.\begin{aligned} 2x - 3y &= 9\\ 4x - 9 &= 6y \end{aligned}\right\}$`,
      TEX`$\left.\begin{aligned} x + 2y &= 5\\ 2x + y &= 7 \end{aligned}\right\}$`],
    col: 2 },

  'apl-u4/39': {
    text: TEX`Resol els sistemes pel mètode més adequat.`,
    apartats: [
      TEX`$\left.\begin{aligned} \dfrac{x}{4} + y &= \dfrac{3}{4}\\[4pt] -\dfrac{x}{2} + 4y &= \dfrac{3}{2} \end{aligned}\right\}$`,
      TEX`$\left.\begin{aligned} 5x - \dfrac{y}{3} &= 3\\[4pt] 3x + y &= -\dfrac{9}{5} \end{aligned}\right\}$`],
    col: 2 },

  'apl-u4/SA1': {
    titol: TEX`Més a prop, millor`,
    text: TEX`En total estarem 5 dies de viatge. Això vol dir que dormirem 4 nits a l’hotel. Si ens allotgem a l’hotel Downtown, que és al centre, podrem anar a peu a tot arreu i ens estalviarem els diners del transport públic.`,
    punts: [
      TEX`Si $x$ és el preu del vol de la tarda, expressa quant costaria el vol de la nit.`,
      TEX`Si $y$ és el preu de l’hotel Downtown per persona i nit, expressa el preu per persona de 3 nits i de 4 nits tenint en compte l’oferta.`,
      TEX`Escriu la inequació corresponent a la situació següent: agafar el vol del matí i allotjar-nos 4 nits a l’hotel Downtown és més car que allotjar-nos 3 nits si agafem el vol de la nit.`] },

};

/* ── Funcions (no cal tocar-les) ─────────────────────────────────────── */

function enunciatDe(u, n){
  return ENUNCIATS[u + '/' + n] || null;
}

/* L'enunciat en HTML, per a la llista de la tasca. Cadena buida si l'exercici
   no en té, o si errades.js (que pinta les fórmules) no s'ha pogut carregar:
   llavors la llista mostra el títol curt. */
function htmlEnunciat(u, n){
  const e = enunciatDe(u, n);
  if(!e || typeof texAHtml !== 'function') return '';
  const lletra = i => String.fromCharCode(97 + i) + ')';
  let h = '<div class="enunciat">';
  if(e.titol) h += '<div class="enun-titol">' + texAHtml(e.titol) + '</div>';
  if(e.text)  h += '<div class="enun-text">' + texAHtml(e.text) + '</div>';
  if(e.punts && e.punts.length)
    h += '<ul class="enun-punts">' + e.punts.map(p => '<li>' + texAHtml(p) + '</li>').join('') + '</ul>';
  if(e.apartats && e.apartats.length){
    const col = Math.min(4, Math.max(1, e.col || 2));
    h += '<ol class="enun-apartats" data-col="' + col + '">'
       + e.apartats.map((a, i) => '<li><span class="enun-lletra">' + lletra(i) + '</span> '
                                 + '<span class="enun-ap">' + texAHtml(a) + '</span></li>').join('')
       + '</ol>';
  }
  (e.fig || []).forEach(f => {
    h += '<img class="enun-fig" src="' + u + '/' + f + '" alt="Figura de l’enunciat" loading="lazy" decoding="async">';
  });
  if(e.despres) h += '<div class="enun-text">' + texAHtml(e.despres) + '</div>';
  return h + '</div>';
}
