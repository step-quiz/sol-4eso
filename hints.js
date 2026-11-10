/* ═══════════════════════════════════════════════════════════════════════
   LES PISTES
   ───────────────────────────────────────────────────────────────────────
   Una línia per pista. La clau és   'unitat/exercici'   i el valor, el text
   que veurà l'alumne quan premi el botó 💡.

     'apl-ud10/U4.24': 'Substitueix <i>x</i> = 2 i <i>y</i> = −1 a cada equació...',
     'apl-ud4/4.2.7':  'Busca els dos triangles semblants: tots dos tenen un angle recte...',

   Un exercici sense línia aquí simplement no mostra cap botó de pista: no
   cal escriure-hi res ni deixar-la buida.

   L'apòstrof s'ha d'escapar amb barra invertida:  d\'una  ,  fixa\'t
   (o fes servir l'apòstrof tipogràfic ’, que no cal escapar).

   Format: només <i>, <b> i <br>. L'estil de les pistes és a CLAUDE.md.

   Es pot editar des del mòbil: GitHub → hints.js → llapis → Commit changes.
   ═══════════════════════════════════════════════════════════════════════ */

const PISTES = {

  /* ── 4t ESO Aplicades · Unitat 4 · Mesura indirecta ──────────────────── */
  'apl-ud4/4.1.2': 'Dos triangles són <b>semblants</b> quan tenen la mateixa forma. Per exemple, això passa quan fem una fotocòpia ampliada d\'un triangle.<br>La <b>raó de semblança</b> <i>k</i> = 3 ens diu quantes vegades és més llarg cada costat del triangle gran que el costat corresponent del petit.<br>Per exemple, quan fas una fotocòpia amb un 20% d\'augment, llavors <i>k</i> = 1,2.',
  'apl-ud4/4.1.3': 'Els raigs del sol arriben al pal amb la mateixa inclinació que a l\'arbre (sempre que sigui al mateix instant, és clar). Per això, es formen dos triangles <b>semblants</b>: un triangle amb el pal i la seva ombra, i l\'altre triangle amb l\'arbre i la seva ombra.<br>A partir d\'aquí, podem escriure una equació, perquè hi ha proporció directa, i podem trobar el que ens demanen.',
  'apl-ud4/4.1.5': 'És veritat que l\'ombra de l\'arbre fa 3,9 m més que l\'ombra del pal, però això no es trasllada a l\'arbre i al pal.<br>Per exemple, imagina que són les 12 h del migdia i el sol és gairebé a dalt de tot, i l\'ombra de l\'arbre fa 1,25 m i l\'ombra del pal fa 1,2 m. Tu creus que l\'arbre només farà 0,05 m més d\'altura?',
  'apl-ud4/U5.57': 'Quan multipliquem tots els costats d\'un triangle per un mateix nombre <i>k</i>, obtenim un triangle <b>semblant</b>, i <i>k</i> és la <b>raó de semblança</b>.<br><br><b>a)</b> i <b>b)</b> Multiplica cada costat pel valor de <i>k</i> que et donen. Recorda que multiplicar per 1/2 és el mateix que dividir entre 2.<br><br><b>c)</b> Pensa amb lògica: dels dos triangles que has obtingut, un és el doble de l\'original, i l\'altre és la meitat de l\'original. Quant creus que val la raó de semblança <i>k</i>?',
  'apl-ud4/U5.64': 'Multiplica cada un dels tres costats per la <b>raó de semblança</b>, <i>r</i> = 1,6.<br>Com que 1,6 és més gran que 1, el triangle nou és més gran que l\'original. Si estiguessis fent una fotocòpia ampliada, posaries l\'ampliació del 60%.',
  'apl-ud4/4.2.1': 'En dos triangles semblants, la raó de semblança s\'aplica a <b>tots</b> els costats: cada costat del triangle gran és el costat corresponent del petit multiplicat per <i>k</i> = 2.',
  'apl-ud4/4.2.2': 'El pal i la torre formen, amb les seves ombres, dos triangles rectangles <b>semblants</b>. Per tant, podem aplicar una situació de proporció directa: escriu la igualtat entre les dues fraccions, resol una equació i troba <i>h</i> com a altura de la torre.',
  'apl-ud4/4.2.4': 'El mirall fa que es formin dos triangles <b>semblants</b>: un amb tu i la teva distància fins al mirall, i l\'altre amb l\'arbre i la seva distància fins al mirall (la llum surt del mirall amb la mateixa inclinació amb què hi arriba).<br>Com que tenim una proporció directa, has de plantejar l\'equació adequada i quan la resolguis podràs trobar l\'altura de l\'arbre.',
  'apl-ud4/4.2.5': 'Fixa\'t en el resultat: el pal fa 2 m i la seva ombra, 1,5 m, és a dir, el pal és més alt que la seva ombra. Tu creus que la torre pot fer 9 m si la seva ombra en fa 12?<br>Segurament el company no ha escrit correctament la proporció.',
  'apl-ud4/4.2.7': 'Fes un dibuix amb totes les dades:<br>- l\'arbre <i>T</i><br>- les estaques <i>A</i>, <i>B</i> i <i>C</i><br>- el punt on t\'atures, que anomenem <i>D</i>.<br>Hi veuràs dos triangles <b>semblants</b> que tenen en comú el vèrtex <i>B</i>: <i>TAB</i> i <i>DCB</i>. Tots dos tenen un angle recte, i els angles que fan a <i>B</i> són iguals, perquè són <b>oposats pel vèrtex</b>.<br>A partir d\'aquí, hi ha proporció directa. Escriu l\'equació que correspon. Quin costat del triangle petit es correspon amb l\'amplada del riu?',
  'apl-ud4/U5.81': 'El fanal i l\'edifici, cadascun amb la seva ombra, formen dos triangles <b>semblants</b>, perquè en el mateix moment el sol arriba amb la mateixa inclinació a tots dos.<br>Per tant, entre l\'altura i l\'ombra hi ha proporció directa: podem escriure una equació i trobar l\'altura de l\'edifici.',
  'apl-ud4/U5.65': 'Si tots els costats es fan <i>k</i> vegades més llargs, el perímetre també es fa <i>k</i> vegades més llarg.<br>Per tant, calcula el perímetre del triangle de 7, 8 i 10 cm i compara\'l amb 125 cm: així obtindràs la <b>raó de semblança</b>. Finalment, amb el valor de <i>k</i>, podràs trobar els costats del triangle gran.',
  'apl-ud4/4.3.1': 'Recorda el <b>teorema de Pitàgores</b>, que relaciona els dos catets i la hipotenusa d\'un triangle rectangle.<br><br><b>a)</b> Et donen els dos catets i et demanen la hipotenusa.<br><br><b>b)</b> Ara la incògnita és un catet, i l\'has de trobar a partir de la hipotenusa i l\'altre catet.',
  'apl-ud4/4.3.2': 'L\'escala, la paret i el terra formen un <b>triangle rectangle</b>, perquè la paret és perpendicular al terra. Per tant, podem aplicar el teorema de Pitàgores.<br>Fes un esquema i pensa en primer lloc quin dels tres costats és la hipotenusa.',
  'apl-ud4/4.3.6': 'És veritat que l\'escala, la paret i el terra formen un triangle rectangle i que cal aplicar el teorema de Pitàgores.<br>Però fixa\'t en el resultat: l\'escala fa 5 m. Tu creus que, recolzada a la paret, pot arribar a 5,8 m d\'altura?',
  'apl-ud4/4.3.3': 'Fes un esquema del camp i traça-hi la diagonal: hi veuràs dos <b>triangles rectangles</b>. Per tant, podem aplicar el teorema de Pitàgores.',
  'apl-ud4/4.3.4': 'La torre, el terra i el cable formen un <b>triangle rectangle</b>, perquè la torre és perpendicular al terra. Fes un esquema i podràs aplicar el teorema de Pitàgores per trobar la llargada del cable.',
  'apl-ud4/4.3.7': 'Pensa què pots mesurar sense enfilar-te al pal:<br>- Amb les ombres, necessites un dia de sol, un objecte de referència i una cinta mètrica.<br>- Amb el teorema de Pitàgores, necessites un triangle rectangle on puguis mesurar dos costats.<br><br>Quins costats d\'un triangle rectangle podries mesurar en aquest cas?',
  'apl-ud4/4.4.1': 'Fes un esquema de cada situació i pregunta\'t:<br>- Hi ha dos objectes amb les seves ombres? Llavors hi ha triangles semblants i proporció directa.<br>- Hi ha un sol triangle rectangle amb dos costats coneguts? Llavors podem aplicar el teorema de Pitàgores.',
  'apl-ud4/4.4.3': 'És veritat que el pal, el terra i el cable formen un triangle rectangle i que cal aplicar el teorema de Pitàgores.<br>Però fixa\'t en el resultat: el cable fa 6 m i va del cim del pal fins al terra. Tu creus que el pal pot fer 6,3 m?<br>Segurament s\'ha equivocat en decidir quin costat és la hipotenusa.',
  'apl-ud4/4.4.4': 'Per a cada cas, pensa què pots mesurar de veritat, amb una cinta mètrica i sense mullar-te:<br>- La semblança (proporció directa) ens permet calcular una distància que no podem tocar, a partir d\'un triangle petit que sí que podem mesurar.<br>- El teorema de Pitàgores necessita un triangle rectangle amb dos costats que puguem mesurar.<br><br>Al riu, quin costat del triangle no podries mesurar mai?',
  'apl-ud4/U5.77': 'Fes un esquema i fixa\'t en els dos cables per separat. Anomenem <i>n</i> i <i>m</i> les dues distàncies horitzontals, com al dibuix:<br>- El cable que va de <i>B</i> a <i>C</i> forma un triangle gran amb la columna <i>AB</i> i un de petit amb l\'altura <i>h</i>: són <b>semblants</b>, i hi ha proporció directa.<br>- Fes el mateix amb el cable que va de <i>D</i> a <i>A</i> i la columna <i>CD</i>.<br><br>Obtindràs dues equacions. Si les combines bé, <i>n</i> i <i>m</i> desapareixen: l\'altura <i>h</i> només dependrà de <i>AB</i> i <i>CD</i>.',

};

function pistaDe(u, n){
  const t = PISTES[u + '/' + n];
  return t ? t : null;
}
