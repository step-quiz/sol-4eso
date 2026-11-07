/* ═══════════════════════════════════════════════════════════════════════
   CATÀLEG D'EXERCICIS
   ───────────────────────────────────────────────────────────────────────
   Fitxer mantingut a mà (no el genera cap programa).
   Les PISTES no viuen aquí: són a hints.js.

   ── Matèries i unitats ─────────────────────────────────────────────────
   Aquest web té dues matèries de 4t d'ESO: Aplicades i Acadèmiques.
   Cada unitat té un identificador amb el prefix de la matèria:

     apl-u4    Aplicades, unitat 4        (carpeta apl-u4/)
     aca-u2    Acadèmiques, unitat 2      (carpeta aca-u2/)

   L'identificador és alhora la carpeta de les imatges i el principi de la
   clau de pistes i errades:  'apl-u4/24'.

   ── Cada exercici ──────────────────────────────────────────────────────
   Per a cada unitat, cada exercici hi apareix UN SOL COP, amb:
     t   : títol (descripció curta)
     d   : dificultat ('●○○' | '●●○' | '●●●' | '')
     i   : imatges de suport (enunciat i solució), en ordre, dins de la
           carpeta de la unitat
     e   : (opcional) etiqueta curta del requadre: 'Repte 1', 'Situació 2'…
           Sense e, l'etiqueta és «Ex. 24».
     nom : (opcional) títol de la pàgina de l'exercici. Sense nom, «Exercici 24».

   La clau d'un exercici numerat és el seu número (24). Els que no tenen
   número propi al llibre porten una clau de text, perquè no xoquin amb els
   exercicis: 'R1' (reptes de l'inici), 'FN' (fake news), 'SA1' (situació
   d'aprenentatge), 'AV1' (autoavaluació).

   Les tasques (tasques.js) només guarden aquestes claus. Tota la resta surt
   d'aquí: això és el que permet que una tasca barregi exercicis de temes
   diferents i en fixi l'ordre lliurement.
   ═══════════════════════════════════════════════════════════════════════ */

const MATERIES = {
  'apl': {nom:'Matemàtiques Aplicades',   curs:'4t d’ESO'},
  'aca': {nom:'Matemàtiques Acadèmiques', curs:'4t d’ESO'},
};

const UNITATS_META = {
  'apl-u4': {materia:'apl', nom:'Unitat 4', subtitol:'Sistemes d’equacions i inequacions'},
};

const CATALEG = {

  'apl-u4': {

    /* ── Activitats (pàgines 89–103) */
     1: {t:'Comprova que x = −1/2, y = 3/4 és solució d’un sistema', d:'', i:['activitats/data/full-1.png']},
     2: {t:'Representa gràficament cada sistema i resol-lo', d:'', i:['activitats/data/full-2.png']},
     3: {t:'Resol gràficament dos sistemes i digues quantes solucions tenen', d:'', i:['activitats/data/full-2.png']},
     4: {t:'Escriu un sistema que tingui la solució donada', d:'', i:['activitats/data/full-3.png']},
     5: {t:'Classifica quatre sistemes segons el nombre de solucions', d:'', i:['activitats/data/full-3.png', 'activitats/data/full-4.png']},
     6: {t:'Classifica sis sistemes a partir del nombre de solucions', d:'', i:['activitats/data/full-4.png']},
     7: {t:'Observa les gràfiques: escriu el sistema, la solució i el tipus de sistema', d:'', i:['activitats/data/full-4.png', 'activitats/data/full-5.png']},
     8: {t:'Resol dos sistemes per substitució, igualació i reducció', d:'', i:['activitats/data/full-5.png']},
     9: {t:'Què passa en resoldre un sistema indeterminat per igualació o un d’incompatible per reducció?', d:'', i:['activitats/data/full-5.png']},
     10: {t:'Resol dos sistemes amb fraccions', d:'', i:['activitats/data/full-6.png']},
     11: {t:'Troba la solució de dos sistemes amb fraccions (pissarra)', d:'', i:['activitats/data/full-6.png']},
     12: {t:'Calcula la solució de sis sistemes amb parèntesis i productes', d:'', i:['activitats/data/full-7.png']},
     13: {t:'Decideix si x = −2, x = 0 i x = 3 són solució de sistemes d’inequacions', d:'', i:['activitats/data/full-7.png', 'activitats/data/full-8.png']},
     14: {t:'Uneix cada sistema d’inequacions amb els valors que formen part de la solució', d:'', i:['activitats/data/full-8.png']},
     15: {t:'Resol cinc sistemes d’inequacions amb una incògnita', d:'', i:['activitats/data/full-8.png']},
     16: {t:'Resol tres sistemes d’inequacions amb parèntesis', d:'', i:['activitats/data/full-9.png']},
     17: {t:'Troba la solució de tres sistemes d’inequacions', d:'', i:['activitats/data/full-9.png']},
     18: {t:'Troba la solució de dos sistemes d’inequacions amb fraccions', d:'', i:['activitats/data/full-9.png', 'activitats/data/full-10.png']},
     19: {t:'Resol gràficament vuit inequacions amb dues incògnites', d:'', i:['activitats/data/full-10.png', 'activitats/data/full-11.png']},
     20: {t:'Uneix cada inequació amb els parells de valors que en són solució', d:'', i:['activitats/data/full-11.png', 'activitats/data/full-12.png']},
     21: {t:'Resol gràficament vuit sistemes d’inequacions amb dues incògnites', d:'', i:['activitats/data/full-12.png', 'activitats/data/full-13.png', 'activitats/data/full-14.png']},
     22: {t:'Regió solució de dos sistemes de tres inequacions amb dues incògnites', d:'', i:['activitats/data/full-14.png']},
     23: {t:'Escriu els sistemes d’inequacions que determinen cada quadrant', d:'', i:['activitats/data/full-14.png', 'activitats/data/full-15.png']},

    /* ── Activitats finals · 1. Nombre de solucions d'un sistema i com es calculen */
     24: {t:'De quines equacions és solució x = 2, y = −1?', d:'●○○', i:['sistemes/data/full-1.png']},
     25: {t:'De quines equacions és solució el parell (2, 3)?', d:'●○○', i:['sistemes/data/full-1.png']},
     26: {t:'Quins parells són solució de l’equació 3x − y/2 = 6?', d:'●○○', i:['sistemes/data/full-1.png', 'sistemes/data/full-2.png']},
     27: {t:'Relaciona cada equació amb un parell que en sigui solució', d:'●○○', i:['sistemes/data/full-2.png']},
     28: {t:'Completa els parells perquè siguin solució de 2x − y = 3', d:'●○○', i:['sistemes/data/full-2.png']},
     29: {t:'Representa les solucions de sis equacions lineals', d:'●●○', i:['sistemes/data/full-2.png', 'sistemes/data/full-3.png']},
     30: {t:'Equació amb solucions de la forma (3a, 1 − 2a): valor d’a per a cada parell', d:'●●○', i:['sistemes/data/full-3.png', 'sistemes/data/full-4.png']},
     31: {t:'Escriu dues solucions de quatre equacions', d:'●●○', i:['sistemes/data/full-4.png']},
     32: {t:'Quantes solucions tenen quatre sistemes? Interpreta-ho geomètricament', d:'●○○', i:['sistemes/data/full-4.png', 'sistemes/data/full-5.png']},
     33: {t:'Valor d’a perquè els sistemes siguin incompatibles o compatibles indeterminats (graella)', d:'●●○', i:['sistemes/data/full-5.png']},
     34: {t:'Interpreta quatre gràfiques com a sistemes: solució i tipus', d:'●●○', i:['sistemes/data/full-6.png']},
     35: {t:'Calcula el valor d’A, B, C i D en una resta', d:'●●●', i:['sistemes/data/full-6.png']},
     36: {t:'Vertader o fals: multiplicar una equació d’un sistema compatible determinat per 3', d:'●●○', i:['sistemes/data/full-6.png']},
     37: {t:'Dues tiradores d’arc: quines trajectòries corresponen a cada una?', d:'●●○', i:['sistemes/data/full-6.png', 'sistemes/data/full-7.png']},
     38: {t:'Resol vuit sistemes pel mètode més adequat: què va beure cadascú?', d:'●●○', i:['sistemes/data/full-7.png']},
     39: {t:'Resol dos sistemes amb fraccions pel mètode més adequat', d:'●○○', i:['sistemes/data/full-8.png']},
     40: {t:'Joc: generar sistemes compatibles determinats amb la mateixa solució', d:'●●○', i:['sistemes/data/full-8.png']},
     41: {t:'Com es resol un sistema en funció d’un paràmetre (resolt al llibre de text)', d:'', i:['sistemes/data/full-8.png']},
     42: {t:'Discuteix quatre sistemes en funció del paràmetre a', d:'●●●', i:['sistemes/data/full-8.png', 'sistemes/data/full-9.png']},
     43: {t:'Nombre de solucions de tres sistemes segons els valors d’a i b', d:'●●●', i:['sistemes/data/full-9.png', 'sistemes/data/full-10.png']},
     44: {t:'Quin nombre de dues xifres compleix cada condició?', d:'●●○', i:['sistemes/data/full-10.png']},
     45: {t:'Resol un sistema amb coeficients √2', d:'●●●', i:['sistemes/data/full-10.png']},
     46: {t:'Com es resol un sistema compatible indeterminat (resolt al llibre de text)', d:'', i:['sistemes/data/full-10.png']},
     47: {t:'Resol dos sistemes (indeterminat o incompatible)', d:'●●●', i:['sistemes/data/full-10.png', 'sistemes/data/full-11.png']},
     48: {t:'Inventa sistemes compatibles determinats, indeterminats i incompatibles', d:'●●○', i:['sistemes/data/full-11.png']},
     49: {t:'Si en aïllar i igualar no es pot resoldre l’equació, el sistema és compatible o incompatible?', d:'●●●', i:['sistemes/data/full-11.png']},

    /* ── Activitats finals · 2. Solucions d'un sistema d'inequacions */
     50: {t:'Relaciona cada sistema d’inequacions amb les seves solucions', d:'●○○', i:['inequacions/data/full-1.png']},
     51: {t:'Troba la solució de quatre sistemes d’inequacions', d:'●●○', i:['inequacions/data/full-1.png']},
     52: {t:'Sudoku amb el valor màxim d’x de quatre sistemes d’inequacions', d:'●○○', i:['inequacions/data/full-1.png']},
     53: {t:'Resol quatre sistemes d’inequacions amb fraccions', d:'●●○', i:['inequacions/data/full-1.png', 'inequacions/data/full-2.png']},
     54: {t:'Inventa un sistema d’inequacions amb la solució donada', d:'●●●', i:['inequacions/data/full-2.png']},
     55: {t:'Interval solució de tres sistemes amb inequacions de segon grau', d:'●●●', i:['inequacions/data/full-2.png', 'inequacions/data/full-3.png']},
     56: {t:'Joc: generar sistemes d’inequacions que tinguin (1, 1) com a solució', d:'●●○', i:['inequacions/data/full-3.png']},
     57: {t:'Resol gràficament quatre sistemes d’inequacions amb dues incògnites', d:'●●○', i:['inequacions/data/full-3.png', 'inequacions/data/full-4.png']},
     58: {t:'Regió solució de dos sistemes de tres inequacions', d:'●●●', i:['inequacions/data/full-4.png', 'inequacions/data/full-5.png']},
     59: {t:'Resol un sistema d’inequacions amb a i b nombres naturals', d:'●●●', i:['inequacions/data/full-5.png']},
     60: {t:'Expressa amb un sistema d’inequacions cada regió del pla de la figura', d:'●●●', i:['inequacions/data/full-5.png']},
     61: {t:'Quin polígon fa la frontera del conjunt S que compleix unes condicions?', d:'●●●', i:['inequacions/data/full-6.png']},

    /* ── Activitats finals · 3. Problemes amb sistemes */
     62: {t:'900 bombons en caixes de 6 i de 12 unitats', d:'●●○', i:['problemes/data/full-1.png']},
     63: {t:'Un congrés de 60 persones: quants homes i quantes dones hi ha?', d:'●●○', i:['problemes/data/full-1.png']},
     64: {t:'Una caravana de camells i dromedaris: potes i gepes', d:'●●○', i:['problemes/data/full-1.png', 'problemes/data/full-2.png']},
     65: {t:'Bitllets de 50 € i de 20 € a la butxaca', d:'●●○', i:['problemes/data/full-2.png']},
     66: {t:'Monedes de 5 cèntims i de 20 cèntims al banc', d:'●●○', i:['problemes/data/full-2.png']},
     67: {t:'Un xandall i unes sabatilles comprats en rebaixes', d:'●●○', i:['problemes/data/full-2.png']},
     68: {t:'Vuit monedes de 0,50 € i de 0,20 € que sumen 3,10 €', d:'●●○', i:['problemes/data/full-2.png']},
     69: {t:'Un campament de 60 joves europeus i asiàtics', d:'●●○', i:['problemes/data/full-2.png', 'problemes/data/full-3.png']},
     70: {t:'Casos de xarampió el 2021 i el 2022', d:'●●○', i:['problemes/data/full-3.png']},
     71: {t:'Canvi de moneda: pesos argentins i sols peruans', d:'●●○', i:['problemes/data/full-3.png']},
     72: {t:'Dos solars quadrats que junts fan 9 700 m²', d:'●●○', i:['problemes/data/full-3.png']},
     73: {t:'Un camió puja i baixa una muntanya entre tres pobles', d:'●●○', i:['problemes/data/full-3.png', 'problemes/data/full-4.png']},
     74: {t:'Una mescla de 300 kg de patates de dues classes', d:'●●○', i:['problemes/data/full-4.png']},
     75: {t:'Un bot a favor i en contra del corrent', d:'●●●', i:['problemes/data/full-4.png']},
     76: {t:'La bateria de l’ordinador portàtil: hores d’ús i en repòs', d:'●●●', i:['problemes/data/full-4.png']},
     77: {t:'Vols entre ciutats amb fusos horaris diferents', d:'●●●', i:['problemes/data/full-4.png', 'problemes/data/full-5.png']},
     78: {t:'Editores i editors del departament: planteja una inequació', d:'●●○', i:['problemes/data/full-5.png']},
     79: {t:'Massa màxima autoritzada d’un camió: quantes bigues pot portar?', d:'●●○', i:['problemes/data/full-5.png', 'problemes/data/full-6.png']},

    /* ── Problemes aparentment diferents */
     80: {t:'Resol un sistema amb un percentatge', d:'', i:['problemes-diferents/data/full-1.png']},
     81: {t:'Mescla de vinagre d’1,20 €/l i d’1,60 €/l', d:'', i:['problemes-diferents/data/full-1.png']},
     82: {t:'Calcula x + y sense resoldre el sistema', d:'', i:['problemes-diferents/data/full-1.png']},
     83: {t:'Entrepans i refrescos: quant costa cadascun?', d:'', i:['problemes-diferents/data/full-2.png']},
     84: {t:'Resol un sistema d’inequacions', d:'', i:['problemes-diferents/data/full-2.png']},
     85: {t:'El sou mensual de la Cíntia', d:'', i:['problemes-diferents/data/full-2.png']},

    /* ── Reptes de l'inici de la unitat, fake news, situació d'aprenentatge i autoavaluació.
          No tenen número d'exercici propi: la clau és un text ('R1', 'FN', 'SA1', 'AV1'…). */
    'R1': {t:'Representa un sistema amb el paràmetre a i troba’n les solucions', d:'', i:['activitats/data/full-1.png'], e:'Repte 1', nom:'Repte 1'},
    'R2': {t:'Té solució el sistema d’inequacions x + y > a, x + y < −a?', d:'', i:['activitats/data/full-1.png'], e:'Repte 2', nom:'Repte 2'},
    'FN': {t:'L’efecte papallona: canvi de bitllets de dòlars en dues oficines', d:'', i:['fake-news/data/full-1.png'], e:'Fake news', nom:'Fake news'},
    'SA1': {t:'Més a prop, millor: vols i hotels del viatge', d:'', i:['situacio/data/full-1.png'], e:'Situació 1', nom:'Situació d’aprenentatge 1'},
    'SA2': {t:'Check in / check out: l’hotel dels afores', d:'', i:['situacio/data/full-1.png', 'situacio/data/full-2.png'], e:'Situació 2', nom:'Situació d’aprenentatge 2'},
    'SA3': {t:'Barat surt car? La targeta de transport públic', d:'', i:['situacio/data/full-2.png', 'situacio/data/full-3.png'], e:'Situació 3', nom:'Situació d’aprenentatge 3'},
    'AV1': {t:'Solucions d’un sistema d’equacions lineals', d:'', i:['autoavaluacio/data/full-1.png'], e:'Autoav. 1', nom:'Autoavaluació 1'},
    'AV2': {t:'Nombre de solucions d’un sistema', d:'', i:['autoavaluacio/data/full-1.png'], e:'Autoav. 2', nom:'Autoavaluació 2'},
    'AV3': {t:'Nombre de solucions d’un sistema amb fraccions', d:'', i:['autoavaluacio/data/full-1.png'], e:'Autoav. 3', nom:'Autoavaluació 3'},
    'AV4': {t:'Solució d’un sistema amb parèntesis', d:'', i:['autoavaluacio/data/full-1.png'], e:'Autoav. 4', nom:'Autoavaluació 4'},
    'AV5': {t:'Quin sistema d’inequacions correspon a la gràfica?', d:'', i:['autoavaluacio/data/full-1.png'], e:'Autoav. 5', nom:'Autoavaluació 5'},
    'AV6': {t:'La parcel·la de la Sílvia: àrea d’un terreny rectangular', d:'', i:['autoavaluacio/data/full-2.png'], e:'Autoav. 6', nom:'Autoavaluació 6'},
  },

};

/* ── Funcions (no cal tocar-les) ─────────────────────────────────────── */

function fitxaDe(u, n){
  const c = CATALEG[u]; return (c && c[n]) ? c[n] : null;
}
/* L'etiqueta del requadre de la llista: «Ex. 24», «Repte 1», «Situació 2»… */
function etiquetaDe(u, n){
  const f = fitxaDe(u, n);
  return (f && f.e) ? f.e : 'Ex. ' + n;
}
/* El títol de la pàgina d'un exercici: «Exercici 24», «Situació d'aprenentatge 2»… */
function nomDe(u, n){
  const f = fitxaDe(u, n);
  return (f && f.nom) ? f.nom : 'Exercici ' + n;
}
/* La matèria d'una unitat ('apl-u4' → 'apl'). */
function materiaDe(u){
  return (UNITATS_META[u] && UNITATS_META[u].materia) || u.split('-')[0];
}
