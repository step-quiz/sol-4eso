/* ═══════════════════════════════════════════════════════════════════════
   ELS ENUNCIATS
   ───────────────────────────────────────────────────────────────────────
   L'enunciat complet d'un exercici, en català i amb les fórmules en LaTeX
   (les pinta KaTeX). A la llista de la tasca substitueix el títol curt del
   catàleg. Un exercici sense enunciat aquí mostra el títol curt, com abans.

   Hi van els exercicis de Santillana programats a tasques.js (com les pistes)
   i TOTS els del llibre propi, que no tenen cap altra font.

     'apl-ud10/U4.24': {
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
     solucio   NOMÉS per als exercicis del llibre propi (que no tenen imatge del
               solucionari): la solució, una llista de paràgrafs. Es mostra en
               prémer «Veure solució».

   Com s'escriu: igual que a errades.js. Sempre TEX`...` amb accents greus;
   les fórmules entre $...$. Cap accent greu ni la parella ${ dins del text.
   Un sistema:  $\left.\begin{aligned} x+y&=4\\ 2x+2y&=5 \end{aligned}\right\}$

   Fa servir TEX i texAHtml d'errades.js: s'ha de carregar després.
   ═══════════════════════════════════════════════════════════════════════ */

const ENUNCIATS = {

  /* ── 4t ESO Aplicades · UD4 · Mesura indirecta · llibre propi ──────────
     Els exercicis del llibre propi porten també la solució (camp solucio),
     perquè no tenen imatge del solucionari. */

  'apl-ud4/4.1.1': {
    titol: TEX`Escalfem el cap`,
    text: TEX`Recorda de 3r: en un triangle rectangle, com es diuen els dos costats que formen l’angle recte? I el costat de davant de l’angle recte?`,
    solucio: [TEX`Els dos costats de l’angle recte són els catets; el de davant de l’angle recte és la hipotenusa.`] },

  'apl-ud4/4.1.2': {
    titol: TEX`Semblança`,
    text: TEX`Dos triangles són semblants amb raó $k=3$. Si un costat del petit fa $5$ cm, quant fa el costat corresponent del gran?`,
    solucio: [TEX`$5\cdot 3 = 15$ cm.`] },

  'apl-ud4/4.1.3': {
    titol: TEX`L’arbre`,
    text: TEX`Un pal d’$1{,}2$ m fa una ombra de $0{,}8$ m. A la mateixa hora, un arbre fa una ombra de $6$ m. Quant fa d’alt l’arbre?`,
    solucio: [TEX`$\dfrac{1{,}2}{0{,}8} = \dfrac{h}{6} \;\Rightarrow\; h = \dfrac{1{,}2}{0{,}8}\cdot 6 = 9$ m.`] },

  'apl-ud4/4.1.4': {
    titol: TEX`Estima primer`,
    text: TEX`A la figura, l’arbre fa una ombra molt més llarga que el pal. Abans de calcular, l’arbre serà més alt o més baix que $5$ m? Per què?`,
    fig: ['enunciats/4.1.4.png'],
    solucio: [TEX`Més alt que $5$ m: l’ombra de l’arbre ($4{,}8$ m) és més de $5$ vegades la del pal ($0{,}9$ m), i el pal ja fa $1{,}5$ m, així que l’arbre passa bastant de $5$ m (de fet, en fa $8$).`] },

  'apl-ud4/4.1.5': {
    titol: TEX`Caça l’error`,
    text: TEX`Un company diu: «l’arbre fa una ombra de $4{,}8$ m i el pal, de $0{,}9$ m; per tant, l’arbre és $4{,}8 - 0{,}9 = 3{,}9$ m més alt». Per què no es poden restar les ombres així?`,
    solucio: [TEX`Perquè la relació entre altura i ombra és multiplicativa (proporcional), no de resta. El que es manté és la raó $\tfrac{1{,}5}{0{,}9}$, no la diferència.`] },

  'apl-ud4/4.2.1': {
    titol: TEX`Escalfem el cap`,
    text: TEX`Dos triangles semblants: el petit té costats $3$, $4$ i $5$, i la raó és $k=2$. Quins són els costats del gran?`,
    solucio: [TEX`$6$, $8$ i $10$ (cada costat, per $2$).`] },

  'apl-ud4/4.2.2': {
    titol: TEX`Ombres`,
    text: TEX`Un pal de $2$ m fa una ombra d’$1{,}5$ m. A la mateixa hora, una torre fa una ombra de $12$ m. Quant fa d’alta la torre?`,
    solucio: [TEX`$\dfrac{2}{1{,}5} = \dfrac{h}{12} \;\Rightarrow\; h = \dfrac{2}{1{,}5}\cdot 12 = 16$ m.`] },

  'apl-ud4/4.2.3': {
    titol: TEX`Ombres al revés`,
    text: TEX`Un fanal fa $6$ m i, a una certa hora, projecta una ombra de $9$ m. Quina ombra farà, a la mateixa hora, una persona d’$1{,}8$ m?`,
    solucio: [TEX`$\dfrac{6}{9} = \dfrac{1{,}8}{o} \;\Rightarrow\; o = \dfrac{1{,}8\cdot 9}{6} = 2{,}7$ m.`] },

  'apl-ud4/4.2.4': {
    titol: TEX`El mirall`,
    text: TEX`Poses un mirall a terra a $3$ m d’un arbre i, quan hi veus la punta reflectida, estàs a $1{,}5$ m del mirall; els teus ulls són a $1{,}6$ m d’alçada. Amb la semblança $\dfrac{\text{ulls}}{\text{dist. teva}} = \dfrac{\text{arbre}}{\text{dist. arbre}}$, quant fa l’arbre?`,
    solucio: [TEX`$\dfrac{1{,}6}{1{,}5} = \dfrac{h}{3} \;\Rightarrow\; h = \dfrac{1{,}6}{1{,}5}\cdot 3 = 3{,}2$ m.`] },

  'apl-ud4/4.2.5': {
    titol: TEX`Caça l’error`,
    text: TEX`Un company calcula l’altura de la torre de l’exercici 4.2.2 així: $\dfrac{1{,}5}{2} = \dfrac{h}{12}$, i li surt $h=9$ m. Quin error de plantejament ha fet? Quina és l’altura correcta?`,
    solucio: [TEX`Ha posat l’ombra a dalt i l’altura a baix a la primera fracció: ha invertit la raó. Ha de ser $\dfrac{\text{altura}}{\text{ombra}} = \dfrac{2}{1{,}5}$, no $\dfrac{1{,}5}{2}$. L’altura correcta és $h = 16$ m.`] },

  'apl-ud4/4.2.6': {
    titol: TEX`Estima abans de calcular`,
    text: TEX`A l’exercici 4.2.2, la torre serà més o menys del doble del pal? Estima-ho i comprova-ho.`,
    solucio: [TEX`Més del doble: l’ombra de la torre ($12$ m) és $8$ vegades la del pal ($1{,}5$ m), i el pal fa $2$ m, així que la torre supera de molt els $4$ m (en fa $16$).`] },

  'apl-ud4/4.2.7': {
    titol: TEX`El riu`,
    text: TEX`Per mesurar l’amplada d’un riu, claves una estaca $A$ davant d’un arbre $T$ de l’altra riba, camines $20$ m per la riba fins a $B$ i $5$ m més fins a $C$. Des de $C$, en angle recte i allunyant-te del riu, veus $B$ i $T$ alineats quan has fet $4$ m. Quant fa d’ample el riu?`,
    solucio: [TEX`Els triangles $TAB$ i $DCB$ són semblants:`,
              TEX`$\dfrac{\text{amplada}}{20} = \dfrac{4}{5} \;\Rightarrow\; \text{amplada} = \dfrac{4}{5}\cdot 20 = 16$ m.`] },

  'apl-ud4/4.2.8': {
    titol: TEX`Una foto amb referència`,
    text: TEX`En una foto, un arbre fa $6$ cm d’alt i la teva amiga, que fa $1{,}65$ m i és al costat de l’arbre, hi fa $1{,}1$ cm. Quant fa l’arbre?`,
    solucio: [TEX`L’arbre fa $\dfrac{6}{1{,}1}\approx 5{,}45$ vegades la noia: $h = \dfrac{6}{1{,}1}\cdot 1{,}65 = 9$ m.`] },

  'apl-ud4/4.2.9': {
    titol: TEX`La foto ampliada`,
    text: TEX`Tens una foto de la façana de l’institut de $10$ cm d’ample i $6$ cm d’alt, i l’amplies fins que l’amplada fa $25$ cm.`,
    apartats: [TEX`Quina és la raó de semblança? Quant fa ara l’altura?`,
               TEX`Per quant s’ha multiplicat l’àrea de la foto? (Recorda la unitat 3.)`],
    col: 1,
    solucio: [TEX`a) $k = \dfrac{25}{10} = 2{,}5$; l’altura fa $6\cdot 2{,}5 = 15$ cm.`,
              TEX`b) L’àrea passa de $10\cdot 6 = 60$ cm² a $25\cdot 15 = 375$ cm²: s’ha multiplicat per $6{,}25 = 2{,}5^2 = k^2$, no per $2{,}5$.`] },

  'apl-ud4/4.3.1': {
    titol: TEX`Escalfem el cap`,
    text: TEX`Calcula el costat que falta:`,
    apartats: [TEX`catets $3$ i $4$; hipotenusa?`, TEX`hipotenusa $13$ i un catet $5$; l’altre catet?`],
    col: 2,
    solucio: [TEX`a) $\sqrt{3^2+4^2} = \sqrt{25} = 5$`,
              TEX`b) $\sqrt{13^2-5^2} = \sqrt{144} = 12$`] },

  'apl-ud4/4.3.2': {
    titol: TEX`L’escala`,
    text: TEX`Una escala de $13$ m té el peu a $5$ m de la paret. A quina altura arriba?`,
    solucio: [TEX`$h = \sqrt{13^2 - 5^2} = \sqrt{169 - 25} = \sqrt{144} = 12$ m.`] },

  'apl-ud4/4.3.3': {
    titol: TEX`La diagonal`,
    text: TEX`Un camp rectangular fa $40$ m per $30$ m. Quant fa la diagonal?`,
    solucio: [TEX`$d = \sqrt{40^2 + 30^2} = \sqrt{2\,500} = 50$ m.`] },

  'apl-ud4/4.3.4': {
    titol: TEX`La tirolina`,
    text: TEX`Una tirolina va del cim d’una torre de $12$ m fins a un punt del terra que és a $35$ m de la base de la torre. Quant fa el cable (tens i recte)?`,
    solucio: [TEX`$\text{cable} = \sqrt{12^2 + 35^2} = \sqrt{144 + 1\,225} = \sqrt{1\,369} = 37$ m.`] },

  'apl-ud4/4.3.5': {
    titol: TEX`Amb marge d’error`,
    text: TEX`Mesures que un pal projecta una ombra d’entre $2{,}8$ i $3{,}2$ m, i fas servir una referència d’$1$ m amb una ombra de $0{,}5$ m. Entre quins valors és l’altura del pal? Dona el resultat amb marge.`,
    solucio: [TEX`Referència: $\dfrac{1}{0{,}5} = 2$. L’altura és $2\cdot\text{ombra}$: entre $2\cdot 2{,}8 = 5{,}6$ m i $2\cdot 3{,}2 = 6{,}4$ m.`,
              TEX`Resultat: uns $6$ m, amb un marge de $\pm 0{,}4$ m.`] },

  'apl-ud4/4.3.6': {
    titol: TEX`Caça l’error`,
    text: TEX`Un company vol l’altura a què arriba una escala de $5$ m amb el peu a $3$ m i escriu $h = \sqrt{5^2 + 3^2} = \sqrt{34} \approx 5{,}8$ m. Per què està malament? Quina és l’altura correcta?`,
    solucio: [TEX`Ha sumat en comptes de restar: l’escala és la hipotenusa, no un catet. Correcte: $h = \sqrt{5^2 - 3^2} = 4$ m.`] },

  'apl-ud4/4.3.7': {
    titol: TEX`Decideix el mètode`,
    text: TEX`Per mesurar l’altura d’un pal recte del pati, quin mètode faries servir: ombres o Pitàgores? Per què?`,
    solucio: [TEX`Resposta oberta. Un pal recte i vertical va bé amb ombres (semblança), perquè no cal formar un triangle rectangle que es pugui mesurar amb una cinta; Pitàgores és més útil quan ja tenim un triangle rectangle amb dos costats mesurables (escala, estany, tirolina).`] },

  'apl-ud4/4.3.8': {
    titol: TEX`On és més important no equivocar-se?`,
    text: TEX`Una referència d’$1$ m fa una ombra de $0{,}5$ m, i un arbre fa una ombra de $4$ m.`,
    apartats: [TEX`Quant fa l’arbre?`,
               TEX`Si l’ombra de la referència la mesures entre $0{,}48$ i $0{,}52$ m, entre quins valors queda l’altura?`,
               TEX`Si, en canvi, l’error és a l’ombra de l’arbre, entre $3{,}98$ i $4{,}02$ m, entre quins valors queda?`,
               TEX`Quina mesura cal fer amb més cura? Per què?`],
    col: 1,
    solucio: [TEX`a) $\dfrac{1}{0{,}5}\cdot 4 = 8$ m.`,
              TEX`b) $\dfrac{4}{0{,}52}\approx 7{,}7$ m i $\dfrac{4}{0{,}48}\approx 8{,}3$ m: uns $8$ m $\pm 0{,}3$ m.`,
              TEX`c) $2\cdot 3{,}98 = 7{,}96$ m i $2\cdot 4{,}02 = 8{,}04$ m: uns $8$ m $\pm 0{,}04$ m.`,
              TEX`d) L’ombra de la referència: el mateix error de $2$ cm hi pesa unes $8$ vegades més, perquè és una ombra molt més curta (es multiplica per $\tfrac{4}{0{,}5} = 8$).`] },

  'apl-ud4/4.4.1': {
    titol: TEX`Tria i resol`,
    text: TEX`Per a cada cas, digues quin mètode faries servir (semblança o Pitàgores) i resol-lo:`,
    apartats: [TEX`Un pal d’$1{,}5$ m fa una ombra d’$1$ m i un arbre, una de $6$ m. Quant fa l’arbre?`,
               TEX`Una escala de $10$ m té el peu a $6$ m de la paret. Fins on puja?`,
               TEX`Una rampa recta puja $2$ m d’alçada al llarg de $2{,}5$ m d’horitzontal. Quant fa de llarga la rampa?`],
    col: 1,
    solucio: [TEX`a) Semblança: $\dfrac{1{,}5}{1} = \dfrac{h}{6} \;\Rightarrow\; h = 9$ m.`,
              TEX`b) Pitàgores: $\sqrt{10^2 - 6^2} = \sqrt{64} = 8$ m.`,
              TEX`c) Pitàgores (hipotenusa): $\sqrt{2^2 + 2{,}5^2} = \sqrt{10{,}25} \approx 3{,}2$ m.`] },

  'apl-ud4/4.4.2': {
    titol: TEX`Amb marge`,
    text: TEX`L’altura d’un edifici, mesurada per ombres, surt entre $23{,}5$ i $24{,}5$ m. Com donaries el resultat?`,
    solucio: [TEX`«Uns $24$ m, amb un marge d’uns $\pm 0{,}5$ m.»`] },

  'apl-ud4/4.4.3': {
    titol: TEX`Caça l’error`,
    text: TEX`Un cable tens de $6$ m va del cim d’un pal fins a una estaca clavada a $2$ m de la base. Un enunciat diu: «el pal fa $\sqrt{6^2+2^2} = \sqrt{40}\approx 6{,}3$ m». Quin error hi ha? Resol-ho bé.`,
    solucio: [TEX`Ha sumat buscant un catet: el cable és la hipotenusa (el pal no pot fer més que el cable!). Correcte: $\sqrt{6^2 - 2^2} = \sqrt{32} \approx 5{,}7$ m.`] },

  'apl-ud4/4.4.4': {
    titol: TEX`Decideix`,
    text: TEX`Quin mètode faries servir per a cada cosa? Justifica-ho.`,
    apartats: [TEX`L’amplada d’un riu que no pots travessar.`,
               TEX`L’altura d’un arbre, un dia de sol.`,
               TEX`La distància en línia recta entre dues cantonades oposades d’una bassa rectangular que pots vorejar.`],
    col: 1,
    solucio: [TEX`a) Semblança amb estaques: totes les mesures es fan a la riba on ets. Pitàgores no, perquè la diagonal que travessa el riu no es pot mesurar.`,
              TEX`b) Semblança per ombres (o amb el mirall).`,
              TEX`c) Pitàgores: els dos costats de la bassa es poden mesurar caminant, i la diagonal és la hipotenusa.`] },

  'apl-ud4/4.4.5': {
    titol: TEX`Contrasta`,
    text: TEX`Per què és bona idea mesurar una altura per dos mètodes diferents i comparar els resultats?`,
    solucio: [TEX`Perquè cada mètode té els seus errors de mesura. Si dos mètodes independents donen un valor semblant, el resultat és més fiable; i si no coincideixen, sabem que hi ha un problema a revisar.`] },

  'apl-ud4/4.6.1': {
    titol: TEX`Ombres`,
    text: TEX`Un pal d’$1{,}2$ m fa una ombra de $0{,}8$ m. A la mateixa hora, un arbre fa una ombra de $6$ m. Quant fa d’alt l’arbre?`,
    solucio: [TEX`$\dfrac{1{,}2}{0{,}8} = \dfrac{h}{6} \;\Rightarrow\; h = 9$ m.`] },

  'apl-ud4/4.6.2': {
    titol: TEX`Pitàgores`,
    text: TEX`Una escala de $13$ m té el peu a $5$ m de la paret. A quina altura arriba?`,
    solucio: [TEX`$h = \sqrt{13^2 - 5^2} = \sqrt{144} = 12$ m.`] },

  'apl-ud4/4.6.3': {
    titol: TEX`Diagonal`,
    text: TEX`Una porxada rectangular fa $6$ m per $8$ m. Quant fa la diagonal?`,
    solucio: [TEX`$d = \sqrt{6^2 + 8^2} = \sqrt{100} = 10$ m.`] },

  'apl-ud4/4.6.4': {
    titol: TEX`Amb marge`,
    text: TEX`Un pal d’$1$ m fa una ombra de $0{,}8$ m. L’ombra d’una torre, a la mateixa hora, la mesures entre $12{,}6$ i $13{,}4$ m. Entre quins valors és l’altura de la torre? Dona el resultat amb marge.`,
    solucio: [TEX`La torre fa $\dfrac{1}{0{,}8} = 1{,}25$ vegades la seva ombra: entre $1{,}25\cdot 12{,}6 = 15{,}75$ m i $1{,}25\cdot 13{,}4 = 16{,}75$ m.`,
              TEX`Resultat: «uns $16{,}25$ m, amb un marge de $\pm 0{,}5$ m» (o, arrodonit, «uns $16$ m»).`] },

  'apl-ud4/4.6.5': {
    titol: TEX`Caça l’error`,
    text: TEX`«Una escala de $5$ m amb el peu a $4$ m arriba a $\sqrt{5^2+4^2} = \sqrt{41} \approx 6{,}4$ m.» Per què està malament? Resol-ho bé.`,
    solucio: [TEX`Ha sumat buscant un catet: l’escala és la hipotenusa. Correcte: $\sqrt{5^2 - 4^2} = \sqrt{9} = 3$ m.`] },

  'apl-ud4/4.6.6': {
    titol: TEX`Decideix el mètode`,
    text: TEX`Vols saber la distància en línia recta entre dues cantonades oposades d’una bassa rectangular, que no pots travessar però sí vorejar. Quin mètode faries servir? Explica com, i calcula-la si els costats fan $15$ m i $8$ m.`,
    solucio: [TEX`Pitàgores: els dos costats es poden mesurar caminant per la vora, i la diagonal és la hipotenusa: $d = \sqrt{15^2 + 8^2} = \sqrt{289} = 17$ m.`] },

  /* ── 4t ESO Aplicades · UD4 · exercicis de Santillana programats ── */

  'apl-ud4/U5.57': {
    text: TEX`Donat el triangle de costats $3$, $6$ i $8$ cm, calcula:`,
    apartats: [
      TEX`La longitud dels costats d’un altre triangle semblant amb raó de semblança $k = 2$.`,
      TEX`La longitud dels costats d’un altre triangle semblant amb raó de semblança $k = \dfrac{1}{2}$.`,
      TEX`Quina és la raó de semblança entre els dos triangles que has obtingut?`],
    col: 1 },

  'apl-ud4/U5.64': {
    text: TEX`Troba la longitud dels costats d’un triangle semblant a un altre de costats $5$, $6$ i $8$ cm, amb raó de semblança $r = 1{,}6$.` },

  'apl-ud4/U5.81': {
    text: TEX`L’ombra d’un edifici, a una certa hora del dia, fa $15$ m. En aquell mateix moment, l’ombra d’un fanal de $5$ m d’alçada fa $3$ m. Quina és l’altura de l’edifici?` },

  /* ── 4t ESO Aplicades · UD11 · Idea de polinomi (annex de Polinomis) ── */

  'apl-ud11/AP.1': {
    text: TEX`Efectua: $(-2x^3 + x^2 + x - 1) - (x^3 + x^2 - x - 1)$.` },

  'apl-ud11/AP.2': {
    text: TEX`Si $P(x) = x^2 - x + 2$ i $Q(x) = x^3 - x^2 + 1$, calcula:`,
    apartats: [TEX`$P(1) + P(-1)$`, TEX`$P(0) + Q(-1)$`],
    col: 2 },

  'apl-ud11/AP.33': {
    text: TEX`Efectua les operacions següents i indica el grau i el terme independent del resultat.`,
    apartats: [
      TEX`$x^2 + x(x - 3) - (4x - 6)$`, TEX`$3x(2x + 5) - x^2(x - 1) + 5$`,
      TEX`$(3 + x)(4x - x^2) - (x - 8)$`, TEX`$7x - (x + 9) - 3x^2 + (x - 1)\cdot 4$`,
      TEX`$(2 - 3x) - (x^2 - x + 4) + (x^2 - 1)x$`],
    col: 2 },

  'apl-ud11/AP.36': {
    text: TEX`Sabent que el valor numèric del polinomi $P(x) = x^3 + 3x^2 - ax + 5$ per a $x = -3$ és $-1$, calcula el valor de $a$.` },

  'apl-ud11/AP.71': {
    text: TEX`La pàgina d’un llibre fa el doble d’alt que d’ample, els marges laterals fan $2$ cm, i els marges superior i inferior, $3$ cm.`,
    apartats: [
      TEX`Expressa la superfície total de la pàgina en llenguatge algebraic.`,
      TEX`Fes el mateix amb la superfície útil de paper (el que queda dins dels marges).`],
    col: 1 },

  /* ── 4t ESO Aplicades · UD5 · Equacions de 2n grau ── */

  'apl-ud5/U3.33': {
    text: TEX`Relaciona cada equació amb les seves solucions.`,
    apartats: [
      TEX`$6x - 2 = x + 8$`, TEX`$(x + 3)^2 = 0$`, TEX`$(x - 2)(x + 4) = 0$`,
      TEX`$x^2 + 8x = 0$`, TEX`$x^2 + x - 1 = 0$`],
    col: 3,
    despres: TEX`Solucions: \quad I) $x = -3$ \quad II) $x = -4$ \quad III) $x = 2$ \quad IV) $x = 0$ \quad V) $x = -8$` },

  'apl-ud5/U3.37': {
    text: TEX`Resol les equacions de segon grau següents.`,
    apartats: [
      TEX`$x^2 - 5x + 6 = 0$`, TEX`$x^2 = 4x - 3$`, TEX`$x^2 - 2x = 3$`, TEX`$x^2 + 3x - 2 = 0$`,
      TEX`$x^2 + 15 = 8x$`, TEX`$x^2 - x = 30$`, TEX`$8x^2 = 15 - 2x$`, TEX`$x^2 - 3x - 1 = 0$`,
      TEX`$2x^2 + 7x = 3$`, TEX`$x^2 = x - 3$`],
    col: 3 },

  'apl-ud5/U3.41': {
    text: TEX`Desenvolupa i resol aquestes equacions de segon grau.`,
    apartats: [
      TEX`$(x + 3)(x - 4) + x(x + 2) = 2 - x^2$`, TEX`$3x - 2(x + 1)^2 = -3$`,
      TEX`$x^2 + (x + 2)(x - 3) = 0$`, TEX`$4x^2 + 2(x - 6) - (x + 2)^2 = 0$`,
      TEX`$(x - 1)(x + 2) + 3x = 4(x - 2) - (x - 12)$`, TEX`$(x + 5)(3 - x) = 2x(1 - x) + 12$`,
      TEX`$x + x(x - 3) + 3 = x(4 - 2x) + x + 1$`, TEX`$2x^2 - 3(x + 2) = x(x + 3) - 11$`],
    col: 2 },

  'apl-ud5/AP.49': {
    text: TEX`Efectua:`,
    apartats: [TEX`$(3x + 4)^2$`, TEX`$\left(4x - \dfrac{2}{3}\right)^2$`, TEX`$(2x - 3)^3$`],
    col: 3 },

  'apl-ud5/U3.63': {
    text: TEX`Quants germans i germanes tens si per Nadal cadascú fa un regal a cadascun dels altres i entre tots reuniu $36$ regals?` },

  'apl-ud5/U7.94': {
    text: TEX`El llançament d’una pilota segueix una trajectòria d’equació $h(t) = 2t - t^2$. Determina l’altura, en metres, i els segons que calen perquè la pilota arribi al punt més alt de la trajectòria.` },

  /* ── 4t ESO Aplicades · UD10 · Sistemes d'equacions i inequacions (Santillana U4) ── */

  'apl-ud10/U4.24': {
    text: TEX`Troba de quines equacions és solució $x = 2$, $y = -1$.`,
    apartats: [
      TEX`$x + 3y = 5$`, TEX`$\dfrac{x}{2} + y = 0$`, TEX`$-2x + y = -5$`,
      TEX`$3x - y = 7$`, TEX`$4x + 3y = 4$`, TEX`$x = 2y$`],
    col: 3 },

  'apl-ud10/U4.25': {
    text: TEX`Troba de quines equacions és solució el parell $(2, 3)$.`,
    apartats: [
      TEX`$x + y = 1$`, TEX`$-x + y = 1$`, TEX`$3x - \dfrac{y}{3} = 5$`,
      TEX`$y = -x + 5$`, TEX`$2x - y = 1$`, TEX`$\dfrac{x}{2} + 2 = y$`],
    col: 3 },

  'apl-ud10/U4.26': {
    text: TEX`Esbrina quins d’aquests parells són solució de l’equació $3x - \dfrac{y}{2} = 6$.`,
    apartats: [
      TEX`$(1, -6)$`, TEX`$(-1, 6)$`, TEX`$\left(\dfrac{1}{6}, -11\right)$`,
      TEX`$(0, 12)$`, TEX`$(-2, -24)$`, TEX`$\left(\dfrac{1}{3}, 10\right)$`],
    col: 3 },

  'apl-ud10/U4.32': {
    text: TEX`Determina quantes solucions tenen aquests sistemes d’equacions i interpreta geomètricament el resultat.`,
    apartats: [
      TEX`$\left.\begin{aligned} 3x - y &= 1\\ -6x + 2y &= -2 \end{aligned}\right\}$`,
      TEX`$\left.\begin{aligned} x - 5y &= 11\\ 2x + 3y &= -4 \end{aligned}\right\}$`,
      TEX`$\left.\begin{aligned} 2x - 3y &= 9\\ 4x - 9 &= 6y \end{aligned}\right\}$`,
      TEX`$\left.\begin{aligned} x + 2y &= 5\\ 2x + y &= 7 \end{aligned}\right\}$`],
    col: 2 },

  'apl-ud10/U4.39': {
    text: TEX`Resol els sistemes pel mètode més adequat.`,
    apartats: [
      TEX`$\left.\begin{aligned} \dfrac{x}{4} + y &= \dfrac{3}{4}\\[4pt] -\dfrac{x}{2} + 4y &= \dfrac{3}{2} \end{aligned}\right\}$`,
      TEX`$\left.\begin{aligned} 5x - \dfrac{y}{3} &= 3\\[4pt] 3x + y &= -\dfrac{9}{5} \end{aligned}\right\}$`],
    col: 2 },

  'apl-ud10/U4.SA1': {
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

/* La solució d'un exercici del llibre propi, en HTML (cadena buida si no en té). */
function htmlSolucio(u, n){
  const e = enunciatDe(u, n);
  if(!e || !e.solucio || typeof texAHtml !== 'function') return '';
  return '<div class="solucio-propia"><div class="sol-cap">Solució</div>'
       + e.solucio.map(p => '<p>' + texAHtml(p) + '</p>').join('') + '</div>';
}
