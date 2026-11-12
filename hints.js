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

  /* ── 4t ESO Aplicades · Unitat 1 · Nombres reals des de l’estimació ── */
  'apl-ud1/U1.4': 'L\'arrel quadrada d\'un nombre natural:<br>- és un nombre natural si fem l\'arrel quadrada d\'un <b>quadrat perfecte</b> (1, 4, 9, 16…): llavors l\'arrel és exacta.<br>- és un nombre <b>irracional</b> en tots els altres casos: un nombre decimal amb infinites xifres i que, a més a més, no repeteixen cap cicle.',
  'apl-ud1/U1.5': 'Mira com són les xifres decimals i decideix quin tipus de nombre és:<br>- Si s\'acaben, és un <b>decimal exacte</b>, i per tant racional.<br>- Si són infinites i es repeteixen sempre igual, és un <b>decimal periòdic</b>, i també és racional.<br>- Si són infinites i no es repeteixen, és un <b>nombre irracional</b>.',
  'apl-ud1/U1.6': 'Pots fer servir arrels quadrades de nombres que no siguin quadrats perfectes, o també el nombre π, entre d\'altres idees.',
  'apl-ud1/U1.40': 'L\'arrel quadrada d\'un nombre natural:<br>- és un nombre natural si fem l\'arrel d\'un <b>quadrat perfecte</b> (1, 4, 9…);<br>- és un nombre <b>irracional</b> en tots els altres casos.',
  'apl-ud1/U1.41': 'Abans de classificar cada nombre, fes totes les operacions que es puguin fer i simplifica.',
  'apl-ud1/U1.23': 'La diagonal divideix el rectangle en dos <b>triangles rectangles</b>: aplicant el teorema de Pitàgores podràs trobar quant mesura la diagonal, perquè en el fons és la hipotenusa d\'un triangle rectangle.',
  'apl-ud1/U1.46': 'Dibuixa l\'altura en el triangle equilàter i veuràs que el divideix en dos triangles rectangles:<br>- la hipotenusa és el costat del triangle<br>- un catet és la meitat del costat<br>- l\'altre catet és l\'altura que has dibuixat.<br>Aplicant el teorema de Pitàgores podràs trobar l\'altura.',
  'apl-ud1/U1.8': '- Per a les <b>arrels</b>, fes servir el teorema de Pitàgores. Per exemple, √10 és la hipotenusa d\'un triangle rectangle de catets 3 i 1.<br>- Per als <b>decimals</b>, mira primer entre quins dos enters són i després entre quines dècimes.<br>- Per a <b>2π</b>, n\'hi ha prou amb una aproximació.',
  'apl-ud1/U1.10': '<b>a)</b> Llegeix a la recta quin nombre correspon a cada lletra.<br><br><b>b)</b> Entre dos enters hi ha infinits nombres racionals: pensa en decimals exactes o en fraccions.<br><br><b>c)</b> Per escriure irracionals, pots fer servir arrels quadrades o sumar un nombre a π o a √2, mirant que el resultat quedi entre <i>C</i> i <i>D</i>.',
  'apl-ud1/U1.43': 'Fes servir el teorema de Pitàgores: busca un triangle rectangle de catets enters la hipotenusa del qual sigui l\'arrel que vols representar.<br>Per exemple, √5 és la hipotenusa d\'un triangle de catets 1 i 2, perquè 1² + 2² = 5.',
  'apl-ud1/U1.45': 'Calcula amb la calculadora el valor decimal de cada nombre, amb tres decimals, i ordena\'ls.',
  'apl-ud1/U1.20': '- Per <b>truncar</b>, talla el nombre a les centèsimes i no miris res més.<br>- Per <b>arrodonir</b>, mira la xifra de les mil·lèsimes: si és 5 o més, la xifra de les centèsimes augmenta 1.<br>Per exemple:<br>24,1587 truncat a les centèsimes és 24,15, però arrodonit a les centèsimes és 24,16.',
  'apl-ud1/U1.21': 'Per arrodonir a les unitats, mira la primera xifra decimal: si és {5, 6, 7, 8, 9}, llavors s\'arrodoneix a l\'alça.<br>Per exemple:<br><b>i)</b> 3,8 s\'arrodoneix a 4.<br><b>ii)</b> 3,2 s\'arrodoneix a 3.',
  'apl-ud1/U1.22': 'En primer lloc, escriu cada nombre amb <b>quatre decimals</b>. Per exemple, 11/9 ≈ 1,2222.<br>Posteriorment, trunca\'l a les centèsimes, i arrodoneix-lo a les centèsimes.',
  'apl-ud1/U1.83': 'Fes cada operació de les dues maneres:<br>- en primer lloc, opera-ho tot i, com a últim pas, arrodoneix el resultat;<br>- en segon lloc, arrodoneix cada nombre i després opera-ho tot.<br>Compara els dos resultats amb el resultat exacte: l\'<b>error</b> és la diferència entre el valor aproximat i el valor exacte.',
  'apl-ud1/U1.11': 'Recorda els conjunts numèrics, de més petit a més gran: <b>naturals</b>, <b>enters</b>, <b>racionals</b> i <b>reals</b>.<br>(El conjunt dels nombres <b>irracionals</b> està format per tots els nombres reals que no siguin racionals.)',
  'apl-ud1/U1.12': 'El <b>menor conjunt</b> és el conjunt més petit on hi pertany el nombre.<br>Per exemple, tot i que el −5 és un nombre real, també és un <b>nombre enter</b>.<br><b>Atenció</b>: en primer lloc, simplifica el que es pugui, com per exemple, √625, que és una arrel exacta.',
  'apl-ud1/U1.50': 'Pista: el nombre 418 és un nombre enter i racional, però també és nombre natural i per tant respondrem «natural» en aquest cas, perquè és el menor conjunt on hi pertany.',
  'apl-ud1/U1.52': 'En primer lloc, fes les operacions que es puguin fer i mira si l\'arrel és exacta. Per exemple, √(17 + 8) = √25 = 5.<br><b>Atenció</b>: tingues en compte que un nombre pot pertànyer a més d\'un conjunt: un natural també és enter, racional i real.',
  'apl-ud1/U1.60': 'En primer lloc, passa cada decimal periòdic a fracció. Per exemple, 2,777… = 25/9.<br>Posteriorment, opera amb les fraccions i comprova si finalment obtens una arrel exacta.',

  /* ── 4t ESO Aplicades · Unitat 2 · Percentatges i matemàtica financera ── */
  'apl-ud2/U2.27': 'Divideix el nombre d\'estudiants de cada activitat pel total (que és 432), i multiplica-ho per 100.',
  'apl-ud2/U2.28': 'Per aplicar un augment del 5,8 %, pots fer servir directament el <b>factor multiplicador</b>: 1,058.<br>(Un altre exemple: si l\'augment és d\'un 30 %, llavors el factor multiplicador és 1,30.)',
  'apl-ud2/U2.30': 'Si la natalitat ha baixat un 12,5 %, vol dir que ha passat del 100 % al 87,5 %.<br>També sabem que els 98 nadons d\'aquest any corresponen al 87,5 %.<br>Tens una situació de proporció directa: aplica la proporció, planteja l\'equació i trobaràs la resposta.',
  'apl-ud2/U2.35': 'Si no saps com començar, prova-ho amb un preu concret, per exemple 100 €: augmenta\'l un 15 % i, al resultat que obtinguis, resta-li un 15 %.',
  'apl-ud2/U2.92': 'Si vols aplicar dues vegades un augment del 3 %, pots multiplicar dues vegades pel <b>factor multiplicador</b>: 1,03.<br><b>Atenció</b>: pujar dues vegades un 3 % no equival a pujar un 6 %, saps per quin motiu?',
  'apl-ud2/U2.96': '<b>a)</b> Si ha disminuït un 20 %, vol dir que ha passat del 100 % al 80 %. També sabem que els 1 500 estudiants d\'ara corresponen al 80 %: tens una situació de proporció directa.',
  'apl-ud2/U2.99': '<b>Atenció</b>: et demanen quants diners puja cada article, no el preu final: n\'hi ha prou de calcular el 24 % de cada preu. És a dir, que en aquest cas <b>el factor multiplicador</b> és 0,24, i no 1,24.',
  'apl-ud2/2.5.1': 'Repassa quina és la fórmula per a un préstec amb interès <b>simple</b>.<br>Recorda que un 6 % es representa com 0,06.',
  'apl-ud2/2.5.2': 'En primer lloc, calcula <b>l\'interès</b>. Després, pots calcular les altres dades:<br>- <b>el total</b> es calcula amb una suma: cal sumar el capital inicial més els interessos<br>- <b>la quota mensual</b> és aquest total que has obtingut, però repartit entre tots els mesos que hi ha en 2 anys.',
  'apl-ud2/2.6.1': 'El cost total és tot el que pagues: l\'entrada (si és que n\'hi ha), més totes les quotes.',
  'apl-ud2/2.6.2': 'Calcula el cost total de cada opció:<br>- <b>al comptat</b>: 400 €;<br>- <b>a terminis</b>: l\'entrada més les nou quotes.<br>Et demanen el «sobrecost»: això vol dir la diferència entre els dos preus obtinguts.',
  'apl-ud2/U2.FN': 'Si no saps com començar, prova-ho amb un preu concret que et resulti fàcil, com per exemple 100 €:<br>- al gener, apuja\'l un 10 %;<br>- al febrer, apuja un 10 % sobre el nou preu;<br>- al març, torna\'l a apujar un 10 %.<br><br>A partir dels 100 €, quin ha estat el preu final? Et sorprèn que el preu final sigui <b>superior a</b> 130 €?<br>Creus realment que els percentatges encadenats es poden sumar?',

  /* ── 4t ESO Aplicades · Unitat 3 · Proporcionalitat i escales ── */
  'apl-ud3/U2.59': 'Si no saps com començar, pensa-ho en un cas més senzill.<br>Imagina que tens només 4 pals (separats 15 m entre si). I fes-ho més fàcil: si estiguessin a 30 m de separació, estàs d\'acord que calen menys pals? Com trobaries la distància entre les dues poblacions?',
  'apl-ud3/U5.67': 'Una escala 1:400 000 vol dir que 1 cm del mapa són 400 000 cm de la realitat.<br><br><b>a)</b> Aplica l\'escala i obtindràs un resultat que serà un nombre enorme, però expressat en centímetres. Per tant, com a pas final, has de passar el resultat a quilòmetres.<br><br><b>b)</b> Et recomanem que, abans de res, passis primer els 236 quilòmetres a centímetres.<br>Després, aplica l\'escala, però planteja bé l\'equació a partir de la proporció directa.',

  /* ── 4t ESO Aplicades · Unitat 4 · Mesura indirecta ── */
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

  /* ── 4t ESO Aplicades · Unitat 11 · Idea de polinomi ── */
  'apl-ud11/AP.1': 'Restar un polinomi és sumar el seu oposat: canvia el signe de <b>tots</b> els termes del segon parèntesi.<br>Després, agrupa els termes del mateix grau.',
  'apl-ud11/AP.36': 'Sabem que, si substituïm la <i>x</i> per −3, el càlcul ha de donar −1.<br>D\'aquesta manera obtindràs una equació on l\'única incògnita és <i>a</i>.',
  'apl-ud11/AP.71': 'Fes un esquema de la pàgina amb els marges. Anomenem <i>x</i> l\'amplada de la pàgina: llavors, l\'altura és el doble, o sigui, 2<i>x</i>.<br><br><b>a)</b> Escriu la superfície de la pàgina en funció de <i>x</i>.<br><br><b>b)</b> La part útil també és un rectangle. Pensa quants centímetres li treuen els marges a l\'amplada i quants a l\'altura.',
  'apl-ud11/AP.76': '<b>a)</b> El signe menys afecta <b>tots</b> els termes de <i>G(x)</i>.<br><br><b>b)</b> Una vegada hagis fet l\'apartat anterior, serà senzill substituir 365 a <i>B(x)</i>.',
  'apl-ud11/AP.81': '<b>a)</b> Quan comença la festa encara no ha arribat cap assistent, i al local només hi ha l\'organització. Quin valor té <i>t</i> en aquell moment?<br><br><b>b)</b> L\'enunciat ja et diu quan hi va haver més gent.<br><br><b>c)</b> <b>Atenció</b>: una hora i mitja s\'expressa així: <i>t</i> = 1,5.',

  /* ── 4t ESO Aplicades · Unitat 5 · Equacions de 2n grau ── */
  'apl-ud5/U3.3': 'Substitueix <i>x</i> = 3 i <i>x</i> = −3 a cada equació i comprova si es compleix la igualtat.',
  'apl-ud5/U3.33': 'No cal que resolguis les equacions: pots fer-ho al revés i substituir les solucions de la llista a cada equació, per veure quines la compleixen.<br>Recorda que una equació de segon grau pot tenir dues solucions, una o cap.',
  'apl-ud5/U3.8': 'Són equacions de segon grau <b>incompletes</b>, sense terme en <i>x</i>. Per resoldre-les, troba en primer lloc quant val <i>x</i>² i posteriorment fes l\'arrel quadrada.<br><br><b>Atenció</b>: un nombre positiu té dues arrels quadrades, una de positiva i una de negativa.',
  'apl-ud5/U3.38': 'Per exemple, en el primer cas, la igualtat a zero només és certa en aquests casos: o bé <i>x</i> = 0, o bé (6<i>x</i> - 7) = 0.<br>A partir d\'aquí, trobaràs dues solucions.',
  'apl-ud5/U3.39': 'En general, pots aplicar la propietat distributiva, igualar-ho tot a zero i resoldre l\'equació de segon grau.<br>L\'apartat <b>a)</b> es pot resoldre més ràpidament, saps per què?',
  'apl-ud5/U3.9': 'No cal resoldre-les: n\'hi ha prou de calcular el <b>discriminant</b>, <i>b</i>² − 4<i>ac</i>, que és el que hi ha dins de l\'arrel de la fórmula:<br>- Si és positiu, l\'equació té dues solucions.<br>- Si és zero, en té una (<b>solució doble</b>).<br>- Si és negatiu, no en té cap, perquè no existeix l\'arrel quadrada d\'un nombre negatiu.',
  'apl-ud5/U3.7': 'Et donem una pista: l\'equació <i>(x − p)(x − q)</i> = 0 té com a solucions els nombres <i>p</i> i <i>q</i>.',
  'apl-ud5/U3.11': 'Et donem una pista: l\'equació (<i>x</i> - 3) · (<i>x</i> + 5) = 0 té solucions <i>x</i> = 3 i <i>x</i> = -5.<br>Una altra pista: l\'equació 6 · (<i>x</i> - 3) · (<i>x</i> + 5) = 0 té exactament les mateixes solucions.',
  'apl-ud5/U3.40': '<b>a)</b> Si passes el 4 a l\'altre membre, obtens (<i>x</i> - 3)² = 4.<br>Quins nombres elevats al quadrat donen 4?<br><br><b>b)</b> Et donem una pista: <i>x</i>² − 6<i>x</i> + 8 = (<i>x</i> − 3)² − 1.',
  'apl-ud5/U3.41': 'Primer desenvolupa els productes i els quadrats de cada membre, aplicant la propietat distributiva.<br>Després, passa-ho tot a un membre i agrupa els termes semblants fins que l\'equació tingui aquesta forma:<br><i>ax</i>² + <i>bx</i> + <i>c</i> = 0.',
  'apl-ud5/U3.42': 'Per saber realment quin és el grau d\'una equació cal, en primer lloc, desenvolupar-ho tot i simplificar-ho, perquè podria passar que els termes en <i>x</i>² s\'anul·lin i que finalment l\'equació sigui de primer grau.',
  'apl-ud5/U3.43': 'Multiplica els dos membres pel <b>mínim comú múltiple</b> dels denominadors. Per exemple, en el primer apartat has de multiplicar per 12.<br>D\'aquesta manera obtindràs una equació sense fraccions, que ja saps resoldre.',
  'apl-ud5/U3.63': 'Anomenem <i>x</i> el nombre de germans i germanes, comptant-te a tu.<br>Cada persona fa un regal a les altres menys a ella mateixa. Per tant, hi ha <i>x</i> − 1 regals que fa cada persona.<br>Amb això podràs escriure una equació de segon grau.',
  'apl-ud5/U3.71': 'Fes un esquema de l\'hort: els 70 m de cable són el <b>perímetre</b>. Anomenem <i>x</i> la llargada: llavors, l\'amplada és 3<i>x</i>/4.<br>- En primer lloc, calcula el perímetre en funció de la llargada i l\'amplada. Obtindràs una equació i podràs aïllar la incògnita <i>x</i>.<br>- Posteriorment, quan ja tinguis les mesures de l\'hort, calcula la seva àrea.',
  'apl-ud5/U7.94': 'La pilota surt de terra (és a dir, amb altura <i>h</i> = 0) i quan torna a terra, torna a tenir <i>h</i> = 0. Per tant, en primer lloc troba els dos moments <i>t</i> on: <i>h(t)</i> = 0.<br>Com que la paràbola és simètrica, el punt més alt és just a la meitat.',

  /* ── 4t ESO Aplicades · Unitat 10 · Sistemes d’equacions i inequacions ── */
  'apl-ud10/U4.26': 'Substitueix cada possibilitat a l\'equació i comprova si es compleix la igualtat.',
  'apl-ud10/U4.63': 'Anomenem <i>x</i> el nombre d\'homes i <i>y</i> el de dones. Cada frase de l\'enunciat et dona una equació:<br>- el <b>total de persones</b>: <i>x</i> + <i>y</i> = 60;<br>- la <b>situació imaginada</b>: si marxen 3 homes i en vénen 3 dones, queden <i>x</i> − 3 homes i <i>y</i> + 3 dones, i les dones són la tercera part dels homes (o potser et convé pensar-ho com que «els homes són el triple que les dones»).',
  'apl-ud10/U3.59': 'En primer lloc, elimina els parèntesis aplicant la propietat distributiva, i agrupa els termes semblants.<br>Posteriorment, resol la inequació que obtinguis.',
  'apl-ud10/U3.73': 'Anomenem <i>x</i> el nombre d\'hores. Escriu què costa cada opció:<br>- la <b>cadira</b>: 3 € per hora, és a dir, 3<i>x</i>;<br>- la <b>gandula</b>: 5 € fixos més 2 € per hora.<br>«Més econòmica» vol dir que la gandula costa menys que la cadira: això et dona una <b>inequació</b>, perquè faràs servir el signe «menor que».',

  /* ── 4t ESO Aplicades · Unitat 6 · La paràbola ── */
  'apl-ud6/U7.106': '<b>a)</b> La funció és una paràbola cap avall (el motiu és que el coeficient que multiplica la <i>x</i>² és negatiu). Com que la paràbola mira cap avall, sabem que el cost més alt serà justament al <b>vèrtex</b>.<br><br><b>b)</b> Substitueix <i>x</i> = 15. <b>Atenció</b>: recorda que el resultat és en milers d\'euros.',

  /* ── 4t ESO Aplicades · Unitat 7 · Funcions: llegim gràfics ── */
  'apl-ud7/U6.52': 'Substitueix cada valor a la funció.<br><b>Atenció</b>: quan substitueixes nombres negatius, recorda escriure\'ls entre parèntesis: (−2)² = 4, i (−2)³ = −8.',
  'apl-ud7/U6.112': 'La nostra funció serà <i>f(x)</i>, on anomenem <i>x</i> l\'import de la comanda.<br>Cada frase de l\'enunciat és un tros de la funció: escriu què costa l\'enviament i segons els valors de <i>x</i>.',
  'apl-ud7/U7.89': 'El preu és una part fixa (la baixada de bandera, 1 €) més una part que depèn dels quilòmetres (0,80 € per quilòmetre).',
  'apl-ud7/U7.97': 'Comença amb 1 bacteri i fes una taula: cada 25 minuts, el nombre de bacteris es multiplica per 2 (1, 2, 4, 8…). Per tant, és una funció <b>exponencial</b> de base 2.',

  /* ── 4t ESO Aplicades · Unitat 8 · Estadística ── */
  'apl-ud8/U8.2': 'Compta quantes vegades surt cada color: aquesta és la <b>freqüència absoluta</b>.<br>En canvi, la <b>freqüència relativa</b> és la freqüència absoluta dividida pel total de dades (que en aquest cas és 15).',
  'apl-ud8/U8.52': 'En primer lloc, fes els intervals: [150, 155), [155, 160)…, de manera que hi puguis classificar totes les dades. Posteriorment, compta les dades que conté cada interval.<br><br><b>Atenció</b>: l\'interval [150, 155) inclou el 150 però no el 155.',
  'apl-ud8/8.3.5': 'Calcula la mitjana i també la mediana. Després, concentra\'t en el sou de 8 000 €: quina de les dues mesures canvia molt per «culpa» d\'aquest sou, i en canvi l\'altra gairebé no canvia?',
  'apl-ud8/U8.70': '- Si la mitjana dels 27 estudiants és 84, quant sumen totes les puntuacions de tots aquests estudiants?<br>- Troba també la suma de les puntuacions de 28 estudiants amb mitjana 83.<br>- Pensa una cosa: els 28 estudiants són l\'Ana i els 27 estudiants anteriors.',
  'apl-ud8/U8.82': '- Si creus que una frase és vertadera, busca un cas més senzill (no cal que siguin 25 estudiants) on s\'entengui el teu raonament.<br>- Si creus que una frase és falsa, busca un contraexemple, és a dir, un cas on veiem clar per què és impossible.',

  /* ── 4t ESO Aplicades · Unitat 9 · Atzar i decisions ── */
  'apl-ud9/U9.1': 'Fes un <b>diagrama d\'arbre</b>:<br>- en primer lloc, tria el color de la samarreta.<br>- per a cadascuna de les tries anteriors, escull el color dels pantalons.<br>- finalment, per tancar l\'arbre, has d\'escollir el color dels mitjons.',
  'apl-ud9/U9.27': 'Aplica la regla de Laplace. Per poder aplicar la fórmula, necessites saber quantes persones hi ha a l\'aula en total.',
  'apl-ud9/U9.81': 'Les probabilitats dels successos elementals han de complir dues condicions alhora:<br>1- Cadascuna ha de ser entre 0 i 1.<br>2- Entre totes han de sumar exactament 1.<br><br>Pensa si en el cas de l\'enunciat es compleixen les dues condicions.',
  'apl-ud9/U9.40': 'Fes un diagrama d\'arbre de dues extraccions i escriu la probabilitat a cada branca:<br>- Si <b>no retornes la bola</b>, a la segona extracció només queden 3 boles.<br>- Si <b>tornes la bola</b>, a la segona extracció tenim 4 boles, és a dir, igual que a la primera.',
  'apl-ud9/U9.88': 'Fes l\'arbre de les tres monedes. Et sortiran 8 casos, tots ells igual de probables.<br>- CCC<br>- CCX<br>- CXC<br>…',
  'apl-ud9/9.5.5': 'És preferible començar amb una situació més senzilla. Tens un dau equilibrat i vols endevinar quin nombre sortirà, de l\'1 al 6.<br>Quantes vegades de mitjana creus que caldrà llançar el dau per tal que l\'encertis per primera vegada?',
  'apl-ud9/9.5.10': '<b>a)</b> Fes els càlculs amb la calculadora, amb tres decimals. Per exemple, la divisió 1 : 2,10 ≈ 0,476.<br><br><b>b)</b> Si la casa fos justa, la suma hauria de donar exactament 1.<br><br><b>c)</b> Calcula 1 dividit per la suma i expressa-ho en cèntims per euro.',
  'apl-ud9/U9.98': '<b>a)</b> «Ser un noi» i «ser una noia» són successos contraris: les dues probabilitats sumen 1.<br><br><b>b)</b> Anomenem <i>n</i> el nombre de membres: hi ha proporció directa entre les noies i el total.',
  'apl-ud9/U9.96': 'Fes una llista <b>ordenada</b> de totes les maneres d\'obtenir 36 multiplicant tres nombres de l\'1 al 6:<br>- 1 · 6 · 6<br>- 2 · 3 · 6<br>- …<br>Després, compta en quants ordres pot sortir cadascuna.<br><br><b>Atenció</b>: recorda que en total hi ha 6 · 6 · 6 = 216 casos possibles.',

};

function pistaDe(u, n){
  const t = PISTES[u + '/' + n];
  return t ? t : null;
}
