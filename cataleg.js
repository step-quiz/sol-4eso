/* ═══════════════════════════════════════════════════════════════════════
   CATÀLEG D'EXERCICIS
   ───────────────────────────────────────────────────────────────────────
   Fitxer mantingut a mà (no el genera cap programa).
   Les PISTES no viuen aquí: són a hints.js.

   ── Matèries i unitats ─────────────────────────────────────────────────
   Aquest web té dues matèries de 4t d'ESO: Aplicades i Acadèmiques.
   Les unitats són les UD del llibre propi (Overleaf), no les de Santillana:

     apl-ud4    Aplicades, UD4 · Mesura indirecta       (carpeta apl-ud4/)
     apl-ud10   Aplicades, UD10 · Sistemes              (carpeta apl-ud10/)

   L'identificador és alhora la carpeta de les imatges i el principi de la
   clau de pistes, errades i enunciats:  'apl-ud10/U4.24'.
   `ordre` és la posició de la UD dins del curs (l'índex les mostra així):
   UD1, UD2, UD3, UD4, UD11, UD5, UD10, UD6, UD7, UD8, UD9.

   ── Les claus dels exercicis ───────────────────────────────────────────
   Una UD pot agafar exercicis de diverses unitats de Santillana i del
   llibre propi. Per això la clau porta l'origen:

     'U4.24'    Santillana, unitat 4, exercici 24     → etiqueta «U4 · 24»
     'U4.SA1'   Santillana, unitat 4, situació 1      → «U4 · Situació 1»
     '4.2.7'    llibre propi, exercici 4.2.7          → «4.2.7»

   ── Cada exercici ──────────────────────────────────────────────────────
     t   : títol (descripció curta)
     d   : dificultat ('●○○' | '●●○' | '●●●' | '')
     i   : imatges de suport (enunciat i solució), en ordre, dins de la
           carpeta de la unitat. Els exercicis del llibre propi no en tenen
           (i:[]): l'enunciat i la solució són a enunciats.js, en KaTeX.
     e   : (opcional) etiqueta curta: 'Repte 1', 'Situació 2'… Als de
           Santillana s'hi afegeix l'origen al davant («U4 · Situació 2»).
     nom : (opcional) títol de la pàgina de l'exercici. Sense nom,
           «Exercici 24 · U4» o «Exercici 4.2.7».

   Les tasques (tasques.js) només guarden aquestes claus. Tota la resta surt
   d'aquí: això és el que permet que una tasca barregi exercicis de temes
   diferents i en fixi l'ordre lliurement.
   ═══════════════════════════════════════════════════════════════════════ */

const MATERIES = {
  'apl': {nom:'Matemàtiques Aplicades',   curs:'4t d’ESO'},
  'aca': {nom:'Matemàtiques Acadèmiques', curs:'4t d’ESO'},
};

const UNITATS_META = {
  'apl-ud4':  {materia:'apl', nom:'Unitat 4',  subtitol:'Mesura indirecta',                    ordre:4},
  'apl-ud10': {materia:'apl', nom:'Unitat 10', subtitol:'Sistemes d’equacions i inequacions', ordre:7},
};

const CATALEG = {

  'apl-ud4': {

    /* ── Santillana, unitat 5 · Activitats (pàgines 133–134 del llibre) */
    'U5.19': {t:'Són semblants els dos rectangles? Troba’n la raó de semblança', d:'', i:['u5-activitats/data/full-1.png', 'u5-activitats/data/full-2.png']},
    'U5.20': {t:'Costats d’un heptàgon de perímetre 25 cm semblant a un altre de conegut', d:'', i:['u5-activitats/data/full-2.png']},
    'U5.21': {t:'Cert o fals: tots els quadrats, tots els rombes, tots els hexàgons regulars són semblants', d:'', i:['u5-activitats/data/full-2.png']},

    /* ── Santillana, unitat 5 · Activitats finals · 2. Semblances (pàgines 145–148) */
    'U5.57': {t:'Costats de triangles semblants a un de 3, 6 i 8 cm amb k = 2 i k = 1/2', d:'●○○', i:['u5-semblanca/data/full-1.png', 'u5-semblanca/data/full-2.png']},
    'U5.61': {t:'Tots els triangles rectangles són semblants?', d:'●●○', i:['u5-semblanca/data/full-3.png']},
    'U5.63': {t:'Dos pentàgons semblants amb raó 5/2: un costat, un angle i un altre costat', d:'●○○', i:['u5-semblanca/data/full-3.png']},
    'U5.64': {t:'Costats d’un triangle semblant a un de 5, 6 i 8 cm amb raó 1,6', d:'●○○', i:['u5-semblanca/data/full-3.png']},
    'U5.65': {t:'Triangle semblant a un de 7, 8 i 10 cm amb perímetre 125 cm', d:'●●○', i:['u5-semblanca/data/full-3.png']},
    'U5.66': {t:'Dos quadrilàters amb els angles iguals són semblants?', d:'●●○', i:['u5-semblanca/data/full-3.png', 'u5-semblanca/data/full-4.png']},

    /* ── Santillana, unitat 5 · Problemes (pàgines 150–151) */
    'U5.77': {t:'Dues columnes i dos cables que es creuen: l’altura del punt de tall', d:'●●●', i:['u5-problemes/data/full-1.png', 'u5-problemes/data/full-2.png']},
    'U5.80': {t:'Costat que falta en dos triangles rectangles semblants', d:'', i:['u5-problemes/data/full-2.png']},
    'U5.81': {t:'L’ombra d’un edifici i la d’un fanal de 5 m', d:'', i:['u5-problemes/data/full-2.png']},

    /* ── Santillana, unitat 7 (pàgina 223) */
    'U7.91': {t:'L’ombra d’un pal d’1 m: taula, funció i gràfica', d:'●●○', i:['u7-problemes/data/full-1.png']},

    /* ── Llibre propi · UD4. L'enunciat i la solució són a enunciats.js.
          Fora: els «Per al Quadern d'eines» i la reflexió final. */
    '4.1.1': {t:'Com es diuen els costats d’un triangle rectangle?', d:'', i:[]},
    '4.1.2': {t:'Triangles semblants amb raó k = 3: el costat corresponent', d:'', i:[]},
    '4.1.3': {t:'L’arbre: altura per ombres', d:'', i:[]},
    '4.1.4': {t:'Estima primer: l’arbre fa més o menys de 5 m?', d:'', i:[]},
    '4.1.5': {t:'Caça l’error: es poden restar les ombres?', d:'', i:[]},
    '4.2.1': {t:'Costats d’un triangle semblant a un de 3, 4 i 5 amb k = 2', d:'', i:[]},
    '4.2.2': {t:'Ombres: l’altura d’una torre', d:'', i:[]},
    '4.2.3': {t:'Ombres al revés: l’ombra d’una persona', d:'', i:[]},
    '4.2.4': {t:'El mirall: l’altura d’un arbre', d:'', i:[]},
    '4.2.5': {t:'Caça l’error: la raó invertida', d:'', i:[]},
    '4.2.6': {t:'Estima abans de calcular: la torre i el pal', d:'', i:[]},
    '4.2.7': {t:'El riu: l’amplada amb estaques', d:'', i:[]},
    '4.2.8': {t:'Una foto amb referència: l’altura d’un arbre', d:'', i:[]},
    '4.2.9': {t:'La foto ampliada: raó de semblança i àrea', d:'', i:[]},
    '4.3.1': {t:'Pitàgores: el costat que falta', d:'', i:[]},
    '4.3.2': {t:'L’escala recolzada a la paret', d:'', i:[]},
    '4.3.3': {t:'La diagonal d’un camp rectangular', d:'', i:[]},
    '4.3.4': {t:'La tirolina: la llargada del cable', d:'', i:[]},
    '4.3.5': {t:'Amb marge d’error: l’altura d’un pal', d:'', i:[]},
    '4.3.6': {t:'Caça l’error: Pitàgores sumant', d:'', i:[]},
    '4.3.7': {t:'Decideix el mètode: ombres o Pitàgores?', d:'', i:[]},
    '4.3.8': {t:'On és més important no equivocar-se?', d:'', i:[]},
    '4.4.1': {t:'Tria el mètode i resol: pal, escala i rampa', d:'', i:[]},
    '4.4.2': {t:'Amb marge: com dones el resultat?', d:'', i:[]},
    '4.4.3': {t:'Caça l’error: el cable i el pal', d:'', i:[]},
    '4.4.4': {t:'Decideix el mètode: riu, arbre i bassa', d:'', i:[]},
    '4.4.5': {t:'Per què mesurar per dos mètodes?', d:'', i:[]},
    '4.6.1': {t:'Ombres: l’altura d’un arbre', d:'', i:[]},
    '4.6.2': {t:'Pitàgores: l’escala', d:'', i:[]},
    '4.6.3': {t:'La diagonal d’una porxada', d:'', i:[]},
    '4.6.4': {t:'Amb marge: l’altura d’una torre', d:'', i:[]},
    '4.6.5': {t:'Caça l’error: l’escala de 5 m', d:'', i:[]},
    '4.6.6': {t:'Decideix el mètode: la diagonal d’una bassa', d:'', i:[]},
  },

  'apl-ud10': {

    /* Santillana, unitat 4. Fora (vistiplau F10–F12 i F18): paràmetres, sistemes
       d'inequacions, inequacions amb dues incògnites i el sistema no lineal (ex. 72). */

    /* ── Activitats (pàgines 89–95 del llibre) */
    'U4.1': {t:'Comprova que x = −1/2, y = 3/4 és solució d’un sistema', d:'', i:['u4-activitats/data/full-1.png']},
    'U4.2': {t:'Representa gràficament cada sistema i resol-lo', d:'', i:['u4-activitats/data/full-2.png']},
    'U4.3': {t:'Resol gràficament dos sistemes i digues quantes solucions tenen', d:'', i:['u4-activitats/data/full-2.png']},
    'U4.4': {t:'Escriu un sistema que tingui la solució donada', d:'', i:['u4-activitats/data/full-3.png']},
    'U4.5': {t:'Classifica quatre sistemes segons el nombre de solucions', d:'', i:['u4-activitats/data/full-3.png', 'u4-activitats/data/full-4.png']},
    'U4.6': {t:'Classifica sis sistemes a partir del nombre de solucions', d:'', i:['u4-activitats/data/full-4.png']},
    'U4.7': {t:'Observa les gràfiques: escriu el sistema, la solució i el tipus de sistema', d:'', i:['u4-activitats/data/full-4.png', 'u4-activitats/data/full-5.png']},
    'U4.8': {t:'Resol dos sistemes per substitució, igualació i reducció', d:'', i:['u4-activitats/data/full-5.png']},
    'U4.9': {t:'Què passa en resoldre un sistema indeterminat per igualació o un d’incompatible per reducció?', d:'', i:['u4-activitats/data/full-5.png']},
    'U4.10': {t:'Resol dos sistemes amb fraccions', d:'', i:['u4-activitats/data/full-6.png']},
    'U4.11': {t:'Troba la solució de dos sistemes amb fraccions (pissarra)', d:'', i:['u4-activitats/data/full-6.png']},
    'U4.12': {t:'Calcula la solució de sis sistemes amb parèntesis i productes', d:'', i:['u4-activitats/data/full-7.png']},

    /* ── Activitats finals · 1. Nombre de solucions d'un sistema i com es calculen */
    'U4.24': {t:'De quines equacions és solució x = 2, y = −1?', d:'●○○', i:['u4-sistemes/data/full-1.png']},
    'U4.25': {t:'De quines equacions és solució el parell (2, 3)?', d:'●○○', i:['u4-sistemes/data/full-1.png']},
    'U4.26': {t:'Quins parells són solució de l’equació 3x − y/2 = 6?', d:'●○○', i:['u4-sistemes/data/full-1.png', 'u4-sistemes/data/full-2.png']},
    'U4.27': {t:'Relaciona cada equació amb un parell que en sigui solució', d:'●○○', i:['u4-sistemes/data/full-2.png']},
    'U4.28': {t:'Completa els parells perquè siguin solució de 2x − y = 3', d:'●○○', i:['u4-sistemes/data/full-2.png']},
    'U4.29': {t:'Representa les solucions de sis equacions lineals', d:'●●○', i:['u4-sistemes/data/full-2.png', 'u4-sistemes/data/full-3.png']},
    'U4.31': {t:'Escriu dues solucions de quatre equacions', d:'●●○', i:['u4-sistemes/data/full-4.png']},
    'U4.32': {t:'Quantes solucions tenen quatre sistemes? Interpreta-ho geomètricament', d:'●○○', i:['u4-sistemes/data/full-4.png', 'u4-sistemes/data/full-5.png']},
    'U4.34': {t:'Interpreta quatre gràfiques com a sistemes: solució i tipus', d:'●●○', i:['u4-sistemes/data/full-6.png']},
    'U4.35': {t:'Calcula el valor d’A, B, C i D en una resta', d:'●●●', i:['u4-sistemes/data/full-6.png']},
    'U4.36': {t:'Vertader o fals: multiplicar una equació d’un sistema compatible determinat per 3', d:'●●○', i:['u4-sistemes/data/full-6.png']},
    'U4.37': {t:'Dues tiradores d’arc: quines trajectòries corresponen a cada una?', d:'●●○', i:['u4-sistemes/data/full-6.png', 'u4-sistemes/data/full-7.png']},
    'U4.38': {t:'Resol vuit sistemes pel mètode més adequat: què va beure cadascú?', d:'●●○', i:['u4-sistemes/data/full-7.png']},
    'U4.39': {t:'Resol dos sistemes amb fraccions pel mètode més adequat', d:'●○○', i:['u4-sistemes/data/full-8.png']},
    'U4.40': {t:'Joc: generar sistemes compatibles determinats amb la mateixa solució', d:'●●○', i:['u4-sistemes/data/full-8.png']},
    'U4.44': {t:'Quin nombre de dues xifres compleix cada condició?', d:'●●○', i:['u4-sistemes/data/full-9.png']},
    'U4.45': {t:'Resol un sistema amb coeficients √2', d:'●●●', i:['u4-sistemes/data/full-9.png']},
    'U4.46': {t:'Com es resol un sistema compatible indeterminat (resolt al llibre de text)', d:'', i:['u4-sistemes/data/full-9.png']},
    'U4.47': {t:'Resol dos sistemes (indeterminat o incompatible)', d:'●●●', i:['u4-sistemes/data/full-9.png', 'u4-sistemes/data/full-10.png']},
    'U4.48': {t:'Inventa sistemes compatibles determinats, indeterminats i incompatibles', d:'●●○', i:['u4-sistemes/data/full-10.png']},
    'U4.49': {t:'Si en aïllar i igualar no es pot resoldre l’equació, el sistema és compatible o incompatible?', d:'●●●', i:['u4-sistemes/data/full-10.png']},


    /* ── Activitats finals · 3. Problemes amb sistemes */
    'U4.62': {t:'900 bombons en caixes de 6 i de 12 unitats', d:'●●○', i:['u4-problemes/data/full-1.png']},
    'U4.63': {t:'Un congrés de 60 persones: quants homes i quantes dones hi ha?', d:'●●○', i:['u4-problemes/data/full-1.png']},
    'U4.64': {t:'Una caravana de camells i dromedaris: potes i gepes', d:'●●○', i:['u4-problemes/data/full-1.png', 'u4-problemes/data/full-2.png']},
    'U4.65': {t:'Bitllets de 50 € i de 20 € a la butxaca', d:'●●○', i:['u4-problemes/data/full-2.png']},
    'U4.66': {t:'Monedes de 5 cèntims i de 20 cèntims al banc', d:'●●○', i:['u4-problemes/data/full-2.png']},
    'U4.67': {t:'Un xandall i unes sabatilles comprats en rebaixes', d:'●●○', i:['u4-problemes/data/full-2.png']},
    'U4.68': {t:'Vuit monedes de 0,50 € i de 0,20 € que sumen 3,10 €', d:'●●○', i:['u4-problemes/data/full-2.png']},
    'U4.69': {t:'Un campament de 60 joves europeus i asiàtics', d:'●●○', i:['u4-problemes/data/full-2.png', 'u4-problemes/data/full-3.png']},
    'U4.70': {t:'Casos de xarampió el 2021 i el 2022', d:'●●○', i:['u4-problemes/data/full-3.png']},
    'U4.71': {t:'Canvi de moneda: pesos argentins i sols peruans', d:'●●○', i:['u4-problemes/data/full-3.png']},
    'U4.73': {t:'Un camió puja i baixa una muntanya entre tres pobles', d:'●●○', i:['u4-problemes/data/full-3.png', 'u4-problemes/data/full-4.png']},
    'U4.74': {t:'Una mescla de 300 kg de patates de dues classes', d:'●●○', i:['u4-problemes/data/full-4.png']},
    'U4.75': {t:'Un bot a favor i en contra del corrent', d:'●●●', i:['u4-problemes/data/full-4.png']},
    'U4.76': {t:'La bateria de l’ordinador portàtil: hores d’ús i en repòs', d:'●●●', i:['u4-problemes/data/full-4.png']},
    'U4.77': {t:'Vols entre ciutats amb fusos horaris diferents', d:'●●●', i:['u4-problemes/data/full-4.png', 'u4-problemes/data/full-5.png']},
    'U4.78': {t:'Editores i editors del departament: planteja una inequació', d:'●●○', i:['u4-problemes/data/full-5.png']},
    'U4.79': {t:'Massa màxima autoritzada d’un camió: quantes bigues pot portar?', d:'●●○', i:['u4-problemes/data/full-5.png', 'u4-problemes/data/full-6.png']},

    /* ── Problemes aparentment diferents */
    'U4.80': {t:'Resol un sistema amb un percentatge', d:'', i:['u4-problemes-diferents/data/full-1.png']},
    'U4.81': {t:'Mescla de vinagre d’1,20 €/l i d’1,60 €/l', d:'', i:['u4-problemes-diferents/data/full-1.png']},
    'U4.82': {t:'Calcula x + y sense resoldre el sistema', d:'', i:['u4-problemes-diferents/data/full-1.png']},
    'U4.83': {t:'Entrepans i refrescos: quant costa cadascun?', d:'', i:['u4-problemes-diferents/data/full-2.png']},

    /* ── Reptes de l'inici de la unitat, fake news, situació d'aprenentatge i autoavaluació.
          No tenen número d'exercici propi: la clau és un text ('U4.FN', 'U4.SA1', 'U4.AV1'…). */
    'U4.FN': {t:'L’efecte papallona: canvi de bitllets de dòlars en dues oficines', d:'', i:['u4-fake-news/data/full-1.png'], e:'Fake news', nom:'Fake news'},
    'U4.SA1': {t:'Més a prop, millor: vols i hotels del viatge', d:'', i:['u4-situacio/data/full-1.png'], e:'Situació 1', nom:'Situació d’aprenentatge 1'},
    'U4.SA2': {t:'Check in / check out: l’hotel dels afores', d:'', i:['u4-situacio/data/full-1.png', 'u4-situacio/data/full-2.png'], e:'Situació 2', nom:'Situació d’aprenentatge 2'},
    'U4.SA3': {t:'Barat surt car? La targeta de transport públic', d:'', i:['u4-situacio/data/full-2.png', 'u4-situacio/data/full-3.png'], e:'Situació 3', nom:'Situació d’aprenentatge 3'},
    'U4.AV1': {t:'Solucions d’un sistema d’equacions lineals', d:'', i:['u4-autoavaluacio/data/full-1.png'], e:'Autoav. 1', nom:'Autoavaluació 1'},
    'U4.AV2': {t:'Nombre de solucions d’un sistema', d:'', i:['u4-autoavaluacio/data/full-1.png'], e:'Autoav. 2', nom:'Autoavaluació 2'},
    'U4.AV3': {t:'Nombre de solucions d’un sistema amb fraccions', d:'', i:['u4-autoavaluacio/data/full-1.png'], e:'Autoav. 3', nom:'Autoavaluació 3'},
    'U4.AV4': {t:'Solució d’un sistema amb parèntesis', d:'', i:['u4-autoavaluacio/data/full-1.png'], e:'Autoav. 4', nom:'Autoavaluació 4'},
    'U4.AV6': {t:'La parcel·la de la Sílvia: àrea d’un terreny rectangular', d:'', i:['u4-autoavaluacio/data/full-2.png'], e:'Autoav. 6', nom:'Autoavaluació 6'},

  },

};

/* ── Funcions (no cal tocar-les) ─────────────────────────────────────── */

function fitxaDe(u, n){
  const c = CATALEG[u]; return (c && c[n]) ? c[n] : null;
}
/* La clau partida: 'U4.24' → {origen:'U4', num:'24'}; '4.2.7' → {origen:'', num:'4.2.7'}. */
function _parts(n){
  const m = /^(U\d+)\.(.+)$/.exec(String(n));
  return m ? {origen: m[1], num: m[2]} : {origen: '', num: String(n)};
}
/* L'etiqueta del requadre de la llista: «U4 · 24», «U4 · Situació 2», «4.2.7»… */
function etiquetaDe(u, n){
  const f = fitxaDe(u, n), p = _parts(n);
  const base = (f && f.e) ? f.e : (p.origen ? p.num : (/^\d+$/.test(p.num) ? 'Ex. ' + p.num : p.num));
  return p.origen ? p.origen + ' · ' + base : base;
}
/* El títol de la pàgina d'un exercici: «Exercici 24 · U4», «Exercici 4.2.7»… */
function nomDe(u, n){
  const f = fitxaDe(u, n), p = _parts(n);
  const cua = p.origen ? ' · ' + p.origen : '';
  return (f && f.nom) ? f.nom + cua : 'Exercici ' + p.num + cua;
}
/* Si l'exercici és del llibre propi (sense imatges del solucionari). */
function esPropi(u, n){
  const f = fitxaDe(u, n); return !!f && (!f.i || f.i.length === 0);
}
/* La matèria d'una unitat ('apl-ud4' → 'apl'). */
function materiaDe(u){
  return (UNITATS_META[u] && UNITATS_META[u].materia) || u.split('-')[0];
}
/* La posició de la unitat dins del curs (per ordenar l'índex). */
function ordreDe(u){
  const m = UNITATS_META[u]; return (m && m.ordre) || 99;
}
