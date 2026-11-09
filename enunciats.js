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
    col: 1,
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
    col: 1 },

  'apl-ud5/AP.49': {
    text: TEX`Efectua:`,
    apartats: [TEX`$(3x + 4)^2$`, TEX`$\left(4x - \dfrac{2}{3}\right)^2$`, TEX`$(2x - 3)^3$`],
    col: 3 },

  'apl-ud5/U3.63': {
    text: TEX`Quants germans i germanes tens si per Nadal cadascú fa un regal a cadascun dels altres i entre tots reuniu $36$ regals?` },

  'apl-ud5/U7.94': {
    text: TEX`El llançament d’una pilota segueix una trajectòria d’equació $h(t) = 2t - t^2$. Determina l’altura, en metres, i els segons que calen perquè la pilota arribi al punt més alt de la trajectòria.` },

  /* ── 4t ESO Aplicades · UD6 · La paràbola ── */

  'apl-ud6/U7.QS1': {
    text: TEX`Resol l’equació $x^2 - 2x + 1 = 0$ i digues quantes solucions té.` },

  'apl-ud6/U7.45': {
    text: TEX`Representa les funcions següents.`,
    apartats: [TEX`$y = -5x^2$`, TEX`$y = 5x^2$`, TEX`$y = \dfrac{x^2}{4}$`],
    col: 3 },

  'apl-ud6/U7.49': {
    text: TEX`Troba el vèrtex de les paràboles següents i representa-les. Raona, en cada cas, si el vèrtex és un màxim o un mínim.`,
    apartats: [
      TEX`$y = -2x^2 + 1$`, TEX`$y = 3x^2 - 6$`, TEX`$y = 5x^2 - 4$`,
      TEX`$y = -4x^2 + 2$`, TEX`$y = x^2 - 8x + 15$`, TEX`$y = x^2 + 9x + 18$`],
    col: 3 },

  'apl-ud6/U7.86': {
    titol: TEX`Matemàtiques i videojocs`,
    text: TEX`En una pantalla d’un videojoc, el personatge salta descrivint una paràbola i arriba a l’altura màxima al punt $(4, 4)$ per caure sobre l’enemic. Des d’on va poder saltar? Escriu l’equació de la paràbola.`,
    fig: ['enunciats/U7.86.png'] },

  'apl-ud6/U7.105': {
    text: TEX`Donada la funció $y = -\dfrac{1}{4}x^2 + 4x + 20$:`,
    apartats: [TEX`Calcula’n el vèrtex.`, TEX`Troba $f(15)$.`],
    col: 2 },

  'apl-ud6/U6.24': {
    text: TEX`Determina els punts de tall amb els eixos de cadascuna de les funcions següents.`,
    apartats: [TEX`$f(x) = x^2 - 3x$`, TEX`$f(x) = 9x^2 - 4$`, TEX`$f(x) = -x^2 + 144$`, TEX`$f(x) = 5x^2 - 4x$`],
    col: 2 },

  /* ── 4t ESO Aplicades · UD7 · Funcions: llegim gràfics ── */

  'apl-ud7/U6.7': {
    text: TEX`Donada la funció que associa a cada nombre enter la seva quarta part més cinc unitats:`,
    apartats: [
      TEX`Troba’n l’expressió algebraica.`,
      TEX`Completa una taula de valors.`,
      TEX`Representa-la gràficament. Es poden unir els punts?`],
    col: 1 },

  'apl-ud7/U6.52': {
    text: TEX`Per a cadascuna de les funcions, calcula la imatge de $2$, $-2$, $3$, $-3$, $1$ i $-1$.`,
    apartats: [
      TEX`$f(x) = 5x^2 - 1$`, TEX`$f(x) = x^3 - 1$`, TEX`$f(x) = \dfrac{1}{x^2 + 2}$`,
      TEX`$f(x) = x^2 - x - 1$`, TEX`$f(x) = \sqrt{\dfrac{x}{2} + 5}$`, TEX`$f(x) = \dfrac{x^2}{3} - 2x + \dfrac{3}{5}$`],
    col: 3 },

  'apl-ud7/U6.89': {
    text: TEX`Troba la taxa de variació relativa a l’interval $[-1, 2]$.`,
    apartats: [TEX`$y = 3x - 1$`, TEX`$y = 1 - 3x$`, TEX`$y = x^2 - 5x + 2$`],
    col: 3,
    despres: TEX`Recorda: $TVR\,[a, b] = \dfrac{f(b) - f(a)}{f(a)}\cdot 100$.` },

  'apl-ud7/U7.89': {
    text: TEX`Els taxis d’una ciutat cobren $1$ € per baixada de bandera i $0{,}80$ € per cada quilòmetre recorregut.`,
    apartats: [
      TEX`Fes una taula que expressi el preu del viatge en funció dels quilòmetres recorreguts.`,
      TEX`Escriu la funció que relaciona les dues magnituds i representa-la.`],
    col: 1 },

  'apl-ud7/U7.92': {
    text: TEX`Els alumnes de 4t d’ESO volen anar de viatge d’estudis. Per aconseguir diners, compren $360$ capses de polvorons, que han de vendre entre tots.`,
    apartats: [
      TEX`Fes una taula que relacioni el nombre d’alumnes que van al viatge amb el nombre de capses que ha de vendre cadascun.`,
      TEX`Escriu-ne l’expressió algebraica i representa la funció.`,
      TEX`Comprova que el producte del nombre d’alumnes pel nombre de capses és constant. Quin és aquest valor?`],
    col: 1 },

  'apl-ud7/U2.44': {
    titol: TEX`Reflexiona`,
    text: TEX`Què és més rendible: invertir $1\,000$ € durant $3$ anys al $4\,\%$ a interès simple o a interès compost?` },

  /* ── 4t ESO Aplicades · UD8 · Estadística ── */

  'apl-ud8/U8.6': {
    text: TEX`Organitza en una taula de freqüències aquestes dades sobre el pes, en kg, de $20$ persones: $42$, $51$, $56$, $66$, $75$, $69$, $59$, $50$, $70$, $59$, $47$, $51$, $45$, $63$, $79$, $62$, $54$, $60$, $63$, $58$.`,
    apartats: [
      TEX`Representa les dades amb el gràfic més adequat.`,
      TEX`Calcula’n les mesures de centralització.`],
    col: 1 },

  'apl-ud8/U8.34': {
    text: TEX`Les hores diàries d’estudi de $30$ estudiants són: $3$, $4$, $3$, $5$, $5$, $3$, $4$, $5$, $0$, $2$, $2$, $1$, $3$, $2$, $0$, $1$, $1$, $1$, $1$, $2$, $0$, $3$, $2$, $2$, $1$, $1$, $2$, $1$, $4$, $3$.`,
    apartats: [
      TEX`Fes el recompte i organitza els resultats en una taula de freqüències.`,
      TEX`Què volen dir les freqüències acumulades que has calculat?`],
    col: 1 },

  'apl-ud8/U8.40': {
    titol: TEX`Repte`,
    text: TEX`El $15\,\%$ dels estudiants d’una classe són esquerrans i la resta, destres. Quin és el nombre més petit d’estudiants que pot tenir la classe?` },

  'apl-ud8/U8.58': {
    text: TEX`Calcula la mitjana aritmètica, la mediana i la moda de cada grup de valors.`,
    apartats: [
      TEX`1, 0, 2, 3, 1, 2, 2, 0, 3, 4, 1, 5, 3, 1, 2, 4, 5, 3, 2, 2, 1, 0`,
      TEX`8, 4, 2, 6, 8, 4, 4, 2, 6, 6, 8, 8, 4, 6, 2`,
      TEX`100, 150, 300, 100, 250, 200, 250, 100, 200, 250`],
    col: 1 },

  'apl-ud8/U8.70': {
    titol: TEX`Investiga`,
    text: TEX`La puntuació mitjana de $27$ estudiants en un test és $84$. Quan l’Ana s’afegeix al grup, la mitjana passa a ser $83$. Quina és la puntuació de l’Ana?` },

  'apl-ud8/U8.89': {
    text: TEX`Una corredora recorre, de dilluns a divendres, $2$, $5$, $5$, $7$ i $3$ km. Quina distància ha de recórrer dissabte per mantenir la mitjana? I perquè la mediana no variï?` },

  /* ── 4t ESO Aplicades · UD9 · Atzar i decisions ── */

  'apl-ud9/U9.2': {
    text: TEX`De quantes maneres diferents es poden col·locar les $4$ lletres de la paraula PACO?` },

  'apl-ud9/U9.27': {
    text: TEX`En una aula hi ha $17$ nois i $19$ noies. Se n’escull una persona a l’atzar. Calcula la probabilitat d’aquests successos:`,
    apartats: [TEX`«Ser un noi».`, TEX`«Ser una noia».`],
    col: 2 },

  'apl-ud9/U9.33': {
    text: TEX`Es llancen dos daus i se sumen els punts obtinguts. Calcula la probabilitat que la suma:`,
    apartats: [TEX`Sigui $3$.`, TEX`No sigui $7$.`, TEX`Sigui més petita que $11$.`, TEX`Sigui $4$ o $5$.`],
    col: 1 },

  'apl-ud9/U9.41': {
    text: TEX`Es llancen $3$ monedes enlaire. Construeix el diagrama d’arbre i calcula aquestes probabilitats:`,
    apartats: [
      TEX`$P(\text{3 cares})$`, TEX`$P(\text{0 cares})$`, TEX`$P(\text{4 cares})$`, TEX`$P(\text{2 creus i 1 cara})$`,
      TEX`$P(\text{2 cares i 1 creu})$`, TEX`$P(\text{1 creu})$`, TEX`$P(\text{almenys 2 cares})$`, TEX`$P(\text{com a màxim 1 cara})$`],
    col: 1 },

  'apl-ud9/U9.58': {
    text: TEX`A una reunió hi van $10$ persones. Quantes encaixades de mans hi haurà si cadascuna saluda la resta una vegada?` },

  'apl-ud9/U9.93': {
    text: TEX`En una urna hi ha $4$ boles vermelles i $6$ de blanques. Si se’n treuen $2$ boles una darrere l’altra, calcula la probabilitat d’aquests successos:`,
    apartats: [
      TEX`«Treure dues boles blanques».`, TEX`«Treure una bola blanca i una de vermella».`,
      TEX`«Treure almenys una bola vermella».`, TEX`«No treure cap bola vermella».`],
    col: 1 },

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


  /* ── 4t ESO Aplicades · UD1 · exercicis de Santillana programats ── */

  'apl-ud1/U1.45': {
    text: TEX`Utilitza la calculadora i ordena de menor a major.`,
    apartats: [TEX`$\sqrt{3},\ \dfrac{\sqrt{6}}{2},\ \dfrac{\sqrt{3}}{3}$`, TEX`$\sqrt{65},\ 5\sqrt{3},\ \dfrac{\sqrt{265}}{2}$`],
    col: 2 },

  'apl-ud1/U1.57': {
    titol: TEX`Investiga`,
    text: TEX`Si $a$ és un nombre racional, indica quin tipus de nombre és cadascun dels següents.`,
    apartats: [TEX`$2a$`, TEX`$\dfrac{a}{2}$`, TEX`$\sqrt{2}\,a$`, TEX`$\pi a$`],
    col: 4 },

  'apl-ud1/U1.90': {
    text: TEX`Expressa mitjançant intervals aquestes situacions.`,
    apartats: [TEX`La capacitat dels envasos és menor que $5$ ℓ.`,
               TEX`L’altura de les cortines ha de ser menor o igual que $2{,}8$ m.`,
               TEX`El descompte s’aplica a compres superiors a $40$ €.`,
               TEX`Els preus van des de $30$ € fins a $60$ €.`],
    col: 1 },

  'apl-ud1/U1.97': {
    text: TEX`Si $A = (-\infty, 3]$, $B = (-2, 0]$ i $C = [2, 5)$, calcula:`,
    apartats: [TEX`$A \cup B$`, TEX`$A \cup B \cup C$`, TEX`$A \cap C$`, TEX`$A \cap B \cap C$`],
    col: 2 },

  'apl-ud1/U1.99': {
    titol: TEX`Investiga`,
    text: TEX`Si dos nombres reals, $x$ i $y$, pertanyen als intervals $(-1, 3)$ i $[0, 2]$ respectivament, a quin interval pertany el resultat d’aquestes operacions?`,
    apartats: [TEX`$x + y$`, TEX`$x - y$`, TEX`$y - x$`, TEX`$x \cdot y$`],
    col: 2 },

  'apl-ud1/U1.101': {
    titol: TEX`Repte`,
    text: TEX`Troba les edats, consecutives i diferents, de cada persona.`,
    punts: [TEX`$10 <$ Javier $< 14$`, TEX`$10 \leq$ Ismael $< 12$`, TEX`Elisa $<$ Pilar $<$ Javier`, TEX`Cristina $>$ Javier`, TEX`Milena $<$ Elisa`] },

  /* ── 4t ESO Aplicades · UD2 · exercicis de Santillana programats ── */

  'apl-ud2/U2.28': {
    text: TEX`Calcula el preu d’un televisor que valia $360$ € si se n’ha augmentat el preu un $5{,}8\,\%$.` },

  'apl-ud2/U2.35': {
    text: TEX`Si el preu inicial d’un producte s’augmenta un $15\,\%$ i després, sobre aquest preu augmentat, es disminueix un $15\,\%$, obtenim el preu inicial?` },

  'apl-ud2/U2.36': {
    text: TEX`Calcula l’interès que obtindrem si invertim un capital de $100$ € a un rèdit del $3{,}5\,\%$ durant $2$ anys i mig.` },

  'apl-ud2/U2.92': {
    text: TEX`Un comerciant decideix apujar un $3\,\%$ el preu d’una mercaderia de $72$ €. Si la setmana següent decideix apujar-lo un altre $3\,\%$, quin és el preu final de la venda?` },

  'apl-ud2/U2.94': {
    text: TEX`Un venedor de cotxes rep com a comissió el $0{,}8\,\%$ de les vendes que fa.`,
    apartats: [TEX`Si en un mes rep $300$ € de comissió, quines vendes va fer?`,
               TEX`L’empresa proposa al venedor canviar-li el percentatge de comissió per un $7{,}5$ per mil. Li convé acceptar?`],
    col: 1 },

  'apl-ud2/U2.103': {
    text: TEX`Quant valia un producte que està etiquetat a $60$ €, sabent que se li ha afegit el $21\,\%$ d’IVA i que se n’obté un guany del $10\,\%$?` },

  /* ── 4t ESO Aplicades · UD2 · llibre propi (activitats 2.5 i 2.6) ── */

  'apl-ud2/2.5.1': {
    titol: TEX`Interès simple`,
    text: TEX`Calcula l’interès de:`,
    apartats: [TEX`$2\,000$ € al $6\,\%$ durant $3$ anys`, TEX`$800$ € al $10\,\%$ durant $1$ any`],
    col: 1,
    solucio: [TEX`a) $2\,000\cdot 0{,}06\cdot 3 = 360$ €`,
              TEX`b) $800\cdot 0{,}10\cdot 1 = 80$ €`] },

  'apl-ud2/2.5.2': {
    titol: TEX`Quota i total`,
    text: TEX`Demanes $1\,500$ € al $10\,\%$ anual per tornar en $2$ anys. Calcula l’interès, el total i la quota mensual.`,
    solucio: [TEX`$I = 1\,500\cdot 0{,}10\cdot 2 = 300$ €; total $= 1\,800$ €; quota $= \dfrac{1\,800}{24} = 75$ €/mes.`] },

  'apl-ud2/2.5.3': {
    titol: TEX`El cost real`,
    text: TEX`Un mòbil de $480$ € al comptat s’ofereix en $12$ quotes de $44$ €. Quant pagues en total? Quin és el sobrecost?`,
    solucio: [TEX`Total $= 12\cdot 44 = 528$ €; sobrecost $= 528 - 480 = 48$ €.`] },

  'apl-ud2/2.5.4': {
    titol: TEX`Caça l’error`,
    text: TEX`Un company calcula l’interès de $1\,000$ € al $5\,\%$ durant $2$ anys així: «$1\,000\cdot 0{,}05 = 50$ €». Què s’ha deixat? Quin és l’interès correcte?`,
    solucio: [TEX`S’ha deixat el temps ($t = 2$ anys). Correcte: $1\,000\cdot 0{,}05\cdot 2 = 100$ €.`] },

  'apl-ud2/2.5.5': {
    titol: TEX`Decideix`,
    text: TEX`Per un ordinador de $700$ €: opció A, pagar al comptat; opció B, $18$ quotes de $42$ €. Quant costa cada opció? Val la pena finançar?`,
    solucio: [TEX`A: $700$ €. B: $18\cdot 42 = 756$ €. Finançar costa $56$ € més; val la pena finançar només si no es poden avançar els $700$ € i es necessita l’ordinador ja (decisió raonada).`] },

  'apl-ud2/2.5.6': {
    titol: TEX`Estima abans de calcular`,
    text: TEX`Un préstec de $3\,000$ € al $9\,\%$ durant $1$ any: estima l’interès de memòria i després calcula’l.`,
    solucio: [TEX`Estimació: un $9\,\%$ de $3\,000$ és uns $270$ €. Exacte: $3\,000\cdot 0{,}09\cdot 1 = 270$ €.`] },

  'apl-ud2/2.6.1': {
    titol: TEX`Escalfem el cap`,
    text: TEX`Calcula el cost total de:`,
    apartats: [TEX`entrada $100$ € $+$ $6$ quotes de $30$ €`, TEX`$10$ quotes de $25$ €`],
    col: 1,
    solucio: [TEX`a) $100 + 6\cdot 30 = 280$ €`,
              TEX`b) $10\cdot 25 = 250$ €`] },

  'apl-ud2/2.6.2': {
    titol: TEX`Compara`,
    text: TEX`Una bici de $400$ €: opció comptat $400$ €; opció terminis, entrada $40$ € $+$ $9$ quotes de $45$ €. Quant costa cada opció? Quin és el sobrecost de finançar?`,
    solucio: [TEX`Comptat: $400$ €. Terminis: $40 + 9\cdot 45 = 445$ €. Sobrecost de finançar: $45$ €.`] },

  'apl-ud2/2.6.3': {
    titol: TEX`Tres opcions`,
    text: TEX`Un portàtil de $800$ €: (A) comptat $800$ €; (B) $12$ quotes de $72$ €; (C) $24$ quotes de $38$ €. Ordena de més barata a més cara.`,
    solucio: [TEX`A: $800$ €. B: $12\cdot 72 = 864$ €. C: $24\cdot 38 = 912$ €. Ordre: A ($800$) $<$ B ($864$) $<$ C ($912$).`] },

  'apl-ud2/2.6.4': {
    titol: TEX`Caça l’error`,
    text: TEX`En l’exercici anterior, un company diu: «l’opció C és la millor perquè la quota és de només $38$ €». Per què el seu raonament és incomplet?`,
    solucio: [TEX`Mira només la quota, no el cost total. C té la quota més petita però és la més cara ($912$ €), perquè paga $24$ mesos.`] },

  'apl-ud2/2.6.5': {
    titol: TEX`Decideix amb criteri`,
    text: TEX`Per a la compra del portàtil anterior, en quin cas triaries finançar tot i el sobrecost? Escriu dos motius raonables.`,
    solucio: [TEX`Resposta oberta. Motius raonables: no es disposa dels $800$ € ara i es necessita l’equip; el sobrecost és assumible; s’evita quedar-se sense estalvi per a imprevistos.`] },

  /* ── 4t ESO Aplicades · UD3 · exercicis de Santillana programats ── */

  'apl-ud3/U2.48': {
    text: TEX`Una recepta per a $6$ persones porta $240$ g de salmó. Quant salmó es necessita per a $8$ persones?` },

  'apl-ud3/U2.59': {
    text: TEX`Entre dues poblacions hi ha $61$ pals de telèfon, separats $15$ m entre si.`,
    apartats: [TEX`Si estiguessin a $25$ m de separació, quants pals hi hauria?`,
               TEX`Quina distància hi ha entre les poblacions?`],
    col: 1 },

  'apl-ud3/U5.28': {
    text: TEX`Les dimensions d’un camp de futbol són $70$ i $100$ m, respectivament. Quina és la superfície d’un futbolí fet a escala $1{:}75$?` },

  'apl-ud3/U5.34': {
    text: TEX`Un aficionat al futbol vol construir un futbolí de manera que el recinte de joc sigui semblant al del seu equip favorit, que és un rectangle de $100 \times 70$ m. Si vol que la còpia tingui una raó de semblança $r = \dfrac{1}{100}$ respecte de l’original:`,
    apartats: [TEX`Quines seran les mesures del rectangle de joc al futbolí?`,
               TEX`I la seva superfície?`],
    col: 1 },

  'apl-ud3/U5.67': {
    text: TEX`L’escala d’un mapa és $1{:}400\,000$. Troba:`,
    apartats: [TEX`La distància real que separa dues localitats si al mapa és $11$ cm.`,
               TEX`La distància al mapa de dues localitats que en la realitat disten $236$ km.`],
    col: 1 },

  'apl-ud3/U5.69': {
    titol: TEX`Inventa`,
    text: TEX`Tria $3$ escales diferents de manera que puguis representar Galícia en un paper de mida DIN A4. La pots representar amb aquestes mateixes escales en un pòsit de mida $10 \times 10$ cm?` },

  /* ── 4t ESO Aplicades · UD8 · llibre propi (activitat 8.3) ── */

  'apl-ud8/8.3.1': {
    titol: TEX`Escalfem el cap`,
    text: TEX`Calcula mitjana, mediana i moda de: $4, 6, 6, 7, 9, 6, 8$.`,
    solucio: [TEX`Suma $= 46$, $n = 7$: mitjana $= \dfrac{46}{7} \approx 6{,}57$.`,
              TEX`Ordenades: $4, 6, 6, 6, 7, 8, 9 \to$ mediana $= 6$. Moda $= 6$.`] },

  'apl-ud8/8.3.2': {
    titol: TEX`Ponderada bàsica`,
    text: TEX`Una nota es calcula amb tres proves que pesen $20\,\%$, $30\,\%$ i $50\,\%$. Un alumne treu $6$, $7$ i $8$. Quina és la nota final?`,
    solucio: [TEX`$\dfrac{6\cdot 20 + 7\cdot 30 + 8\cdot 50}{100} = \dfrac{120 + 210 + 400}{100} = \dfrac{730}{100} = 7{,}3$.`] },

  'apl-ud8/8.3.3': {
    titol: TEX`Ponderada 2`,
    text: TEX`En un altre grup, els pesos són $40\,\%$ examen, $40\,\%$ projecte i $20\,\%$ actitud. Amb notes $4$, $8$ i $9$, quina és la nota final?`,
    solucio: [TEX`$\dfrac{4\cdot 40 + 8\cdot 40 + 9\cdot 20}{100} = \dfrac{160 + 320 + 180}{100} = \dfrac{660}{100} = 6{,}6$.`] },

  'apl-ud8/8.3.4': {
    titol: TEX`Simple vs ponderada`,
    text: TEX`Per a l’exercici 8.3.3, calcula també la mitjana simple. Per què surten diferents?`,
    solucio: [TEX`Simple: $\dfrac{4 + 8 + 9}{3} = 7$.`,
              TEX`Surten diferents perquè l’examen, on ha tret la nota més baixa ($4$), pesa un $40\,\%$: arrossega la nota final cap avall.`] },

  'apl-ud8/8.3.5': {
    titol: TEX`Valors extrems`,
    text: TEX`Amb els sous $1\,200,\ 1\,250,\ 1\,300,\ 1\,350,\ 1\,400,\ 8\,000$: calcula mitjana i mediana. Quina fa servir un sindicat per descriure el sou «normal»? Per què?`,
    solucio: [TEX`Mitjana $= \dfrac{14\,500}{6} = 2\,416{,}67$ €; mediana $= \dfrac{1\,300 + 1\,350}{2} = 1\,325$ €.`,
              TEX`Un sindicat faria servir la mediana: la mitjana està distorsionada pel sou de $8\,000$ € i no descriu el que cobra la majoria.`] },

  'apl-ud8/8.3.6': {
    titol: TEX`Caça l’error`,
    text: TEX`Un company calcula una mitjana ponderada amb pesos $30$, $30$ i $40$ així: $\dfrac{5\cdot 30 + 7\cdot 30 + 8\cdot 40}{3}$. Quin error ha fet? Quin és el resultat correcte?`,
    solucio: [TEX`Ha dividit per $3$ (el nombre de dades) en comptes de per la suma dels pesos ($100$). Correcte: $\dfrac{680}{100} = 6{,}8$.`] },

  'apl-ud8/8.3.7': {
    titol: TEX`Decideix la mesura`,
    text: TEX`Per a cada cas, digues quina mesura és més adequada (mitjana, mediana o moda):`,
    apartats: [TEX`la talla de samarreta més demanada;`,
               TEX`el sou típic en una empresa amb un directiu que cobra molt;`,
               TEX`la nota mitjana d’un examen sense notes extremes.`],
    col: 1,
    solucio: [TEX`a) moda; b) mediana; c) mitjana.`] },

  'apl-ud8/8.3.8': {
    titol: TEX`La nota que falta`,
    text: TEX`Les notes d’un alumne són $6$, $8$, $5$, $9$, $7$ i una sisena que no sabem. La mitjana de les sis és $7{,}5$. Quina és la sisena nota?`,
    solucio: [TEX`Les sis notes sumen $6\cdot 7{,}5 = 45$; les cinc conegudes, $6 + 8 + 5 + 9 + 7 = 35$. La sisena és $45 - 35 = 10$.`] },

  'apl-ud8/8.3.9': {
    titol: TEX`Un jugador nou`,
    text: TEX`Els $11$ jugadors d’un equip fan, de mitjana, $1{,}78$ m. S’hi afegeix un jugador de $1{,}90$ m. Quina és l’alçada mitjana dels $12$?`,
    solucio: [TEX`Suma antiga: $11\cdot 1{,}78 = 19{,}58$ m. Suma nova: $19{,}58 + 1{,}90 = 21{,}48$ m.`,
              TEX`Mitjana: $\dfrac{21{,}48}{12} = 1{,}79$ m.`] },

  'apl-ud8/8.3.10': {
    titol: TEX`Quina nota cal?`,
    text: TEX`La nota final és un $40\,\%$ de l’examen i un $60\,\%$ dels treballs. Als treballs tens un $7$. Quina nota necessites a l’examen per treure un $7{,}5$ de final?`,
    solucio: [TEX`$0{,}4\cdot x + 0{,}6\cdot 7 = 7{,}5 \Rightarrow 0{,}4\cdot x = 7{,}5 - 4{,}2 = 3{,}3 \Rightarrow x = \dfrac{3{,}3}{0{,}4} = 8{,}25$.`] },

  'apl-ud8/8.3.11': {
    titol: TEX`Caça l’error`,
    text: TEX`La classe A ($20$ alumnes) té mitjana $6$ i la classe B ($30$ alumnes), mitjana $7$. Un company diu: «la mitjana de les dues classes juntes és $\dfrac{6 + 7}{2} = 6{,}5$». Per què s’equivoca? Quina és la mitjana correcta?`,
    solucio: [TEX`Perquè les dues classes no tenen el mateix nombre d’alumnes: la B pesa més.`,
              TEX`Sumes: $20\cdot 6 = 120$ i $30\cdot 7 = 210$; total $330$ entre $50$ alumnes: $\dfrac{330}{50} = 6{,}6$. És una mitjana ponderada, amb pesos $20$ i $30$.`] },

  /* ── 4t ESO Aplicades · UD9 · llibre propi (activitat 9.5) ── */

  'apl-ud9/9.5.1': {
    titol: TEX`Escalfem el cap`,
    text: TEX`Un joc paga $4$ € si encertes un dau parell ($P = \tfrac12$) i perds l’euro si no. És just? Calcula el guany mitjà per euro. (Quan diem que un joc paga $X$ €, vol dir que guanyes $X$ € i a més recuperes l’euro apostat; si perds, perds l’euro.)`,
    solucio: [TEX`Guany mitjà $= 4\cdot\dfrac12 - 1\cdot\dfrac12 = 2 - 0{,}5 = 1{,}5$ € per euro.`,
              TEX`Aquest joc et seria favorable (per això no existeix cap joc comercial així).`] },

  'apl-ud9/9.5.2': {
    titol: TEX`Just o no?`,
    text: TEX`Un joc et paga $3$ € si surt un $6$ amb un dau. Quant hauria de pagar perquè fos just? Qui hi guanya, tal com està? (Quan diem que un joc paga $X$ €, vol dir que guanyes $X$ € i a més recuperes l’euro apostat; si perds, perds l’euro.)`,
    solucio: [TEX`Com que $P(6) = \dfrac16$, per ser just hauria de pagar $5$ €: $5\cdot\dfrac16 - 1\cdot\dfrac56 = 0$.`,
              TEX`Pagant-ne $3$, hi guanya la casa: de mitjana perds $3\cdot\dfrac16 - 1\cdot\dfrac56 = \dfrac{3 - 5}{6} \approx -0{,}33$ € per euro.`] },

  'apl-ud9/9.5.3': {
    titol: TEX`La ruleta`,
    text: TEX`En una ruleta europea hi ha $37$ caselles ($0$ a $36$). Si apostes $1$ € a un número i encertes, et paguen $35$ € (a més de recuperar el teu), i de mitjana perds $35\cdot\dfrac{1}{37} - 1\cdot\dfrac{36}{37} = -\dfrac{1}{37}$ € per euro. Repeteix el càlcul si el premi fos $36$ € en comptes de $35$. Seria just?`,
    solucio: [TEX`$36\cdot\dfrac{1}{37} - 1\cdot\dfrac{36}{37} = \dfrac{36 - 36}{37} = 0$. Sí, seria just (ni guanyes ni perds de mitjana).`,
              TEX`Per això les ruletes reals paguen $35$ i no $36$: aquesta casella de diferència és el benefici.`] },

  'apl-ud9/9.5.4': {
    titol: TEX`Caça el parany`,
    text: TEX`Els quatre paranys habituals són: 1) «Ja toca»; 2) ensenyar els guanyadors i amagar els perdedors; 3) premis petits freqüents; 4) «depèn de l’habilitat». Identifica quin parany hi ha a cada missatge:`,
    apartats: [TEX`«Fa setmanes que no surt el $7$: aquesta setmana és la bona»;`,
               TEX`«Mira el vídeo de la Maria, que ha guanyat $10\,000$ €!»;`,
               TEX`«Amb el meu sistema encerto més sovint a la ruleta».`],
    col: 1,
    solucio: [TEX`a) parany 1, «ja toca» (l’atzar no té memòria);`,
              TEX`b) parany 2 (ensenyar guanyadors i amagar perdedors);`,
              TEX`c) parany 4 (en atzar pur no hi ha habilitat que canviï la probabilitat).`] },

  'apl-ud9/9.5.5': {
    titol: TEX`Compara riscos`,
    text: TEX`La probabilitat d’encertar la loteria $6/49$ és d’$1$ entre $14$ milions. Quantes setmanes seguides hauries de jugar, aproximadament, perquè fos raonable esperar-ne un encert?`,
    solucio: [TEX`Aproximadament $14$ milions de setmanes, és a dir, centenars de milers d’anys. Serveix per fer palpable la magnitud.`] },

  'apl-ud9/9.5.6': {
    titol: TEX`Debat en grup`,
    text: TEX`«Jugar de tant en tant és entreteniment; jugar per guanyar diners és un mal pla.» Prepareu arguments a favor i en contra i debateu-los amb dades (també les de les apostes en línia).`,
    solucio: [TEX`Resposta oberta (debat amb arguments i dades).`] },

  'apl-ud9/9.5.7': {
    titol: TEX`Decideix i recomana`,
    text: TEX`Un amic et diu que ha perdut i que vol «recuperar-ho» jugant més. Amb el que saps, què li diries? (Pensa en l’avantatge de la casa i en la llei dels grans nombres.)`,
    solucio: [TEX`Resposta oberta. Idees: cada jugada és independent, així que jugar més no «recupera» res; l’avantatge de la casa fa que, com més jugues, més probable és perdre encara més. Convé parlar-ne amb algú de confiança.`] },

  'apl-ud9/9.5.8': {
    titol: TEX`Una rifa`,
    text: TEX`Una associació ven $500$ butlletes a $3$ € i sorteja un premi de $600$ €. Calcula el guany mitjà d’una butlleta. Quin hauria de ser el premi perquè la rifa fos justa?`,
    solucio: [TEX`$600\cdot\dfrac{1}{500} - 3 = 1{,}20 - 3 = -1{,}80$ € per butlleta. Justa amb un premi de $500\cdot 3 = 1\,500$ €.`] },

  'apl-ud9/9.5.9': {
    titol: TEX`Una aposta de $10$ €`,
    text: TEX`Apostes $10$ € a quota $1{,}80$ en un fet que té, de debò, probabilitat $\tfrac12$. Calcula el guany mitjà. Si en fas $50$ com aquesta, quant esperes perdre?`,
    solucio: [TEX`Guany si encertes: $0{,}80\cdot 10 = 8$ €. Guany mitjà: $8\cdot\dfrac12 - 10\cdot\dfrac12 = 4 - 5 = -1$ € per aposta (un $10\,\%$).`,
              TEX`En $50$ apostes, de mitjana, $50$ € perduts.`] },

  'apl-ud9/9.5.10': {
    titol: TEX`El marge d’un partit`,
    text: TEX`Una casa d’apostes ofereix aquestes quotes per a un partit: $1$ (guanya el local) $2{,}10$; X (empat) $3{,}20$; $2$ (guanya el visitant) $3{,}60$.`,
    apartats: [TEX`Per a cada quota, calcula $\tfrac{1}{\text{quota}}$ (és la probabilitat que «insinua» la casa).`,
               TEX`Suma els tres resultats. Hauria de donar $1$ (un dels tres resultats segur que passa). Quant dona?`,
               TEX`El que sobra per sobre de $1$ és el marge de la casa. Quants cèntims per euro torna, de mitjana? (Calcula $\tfrac{1}{\text{suma}}$.)`],
    col: 1,
    solucio: [TEX`a) $\dfrac{1}{2{,}10} \approx 0{,}476$; $\dfrac{1}{3{,}20} = 0{,}3125$; $\dfrac{1}{3{,}60} \approx 0{,}278$.`,
              TEX`b) Suma $\approx 1{,}066$: més d’$1$.`,
              TEX`c) $\dfrac{1}{1{,}066} \approx 0{,}938$: torna uns $94$ cèntims per euro, de mitjana. El marge és d’uns $6$ cèntims per euro.`] },

  'apl-ud9/9.5.11': {
    titol: TEX`Cada setmana`,
    text: TEX`Un jove de $19$ anys aposta $10$ € cada setmana, tot l’any, a quota $1{,}90$ en fets del $50\,\%$. Quant ha apostat en total? Quant esperes que hagi perdut? I si fa combinades de tres?`,
    solucio: [TEX`$52\cdot 10 = 520$ € apostats. Pèrdua mitjana: $520\cdot 0{,}05 = 26$ €.`,
              TEX`Amb combinades de tres, $520\cdot 0{,}143 \approx 74$ €.`] },

  'apl-ud9/9.5.12': {
    titol: TEX`Respon amb números`,
    text: TEX`Un amic et diu: «el meu cosí guanya diners amb les apostes; si en saps, a la llarga es guanya». Fes-li una resposta de tres o quatre frases amb els números d’aquesta activitat.`,
    solucio: [TEX`Resposta oberta. Idees: cada aposta té guany mitjà negatiu (per exemple, $-5$ cèntims per euro a quota $1{,}90$); al principi molta gent va guanyant (un $38\,\%$ després de $10$ apostes), però després de $1\,000$ només un $5\,\%$, i la pèrdua mitjana és de $500$ €; qui guanya ho explica i qui perd, no.`] },

  /* ── Enunciats de les tasques UD4–UD11 del curs 2026-27 ── */

  'apl-ud4/U5.65': {
    text: TEX`Els costats d’un triangle fan $a = 7$ cm, $b = 8$ cm i $c = 10$ cm. Quant fan els costats d’un triangle semblant de perímetre $125$ cm?` },

  'apl-ud4/U5.77': {
    titol: TEX`Repte`,
    text: TEX`Demostra que, per calcular l’altura $h$, no influeix la distància de separació de les columnes $AB$ i $CD$. Quant fa l’altura?`,
    fig: ['enunciats/U5.77.png'] },

  'apl-ud11/AP.76': {
    text: TEX`Considera els polinomis $I(x) = x^2 + 2x$ i $G(x) = x^2 - 2x$ i calcula:`,
    apartats: [TEX`$B(x) = I(x) - G(x)$`, TEX`$B(365)$`] },

  'apl-ud11/AP.81': {
    text: TEX`El nombre d’assistents a una festa ve donat per $N(t) = -\dfrac{20t^2}{3} + 40t + 10$, on $t$ són les hores transcorregudes des que comença. L’organització és al local abans i després de la festa, i el pic d’assistència va ser a les $3$ hores de començar.`,
    apartats: [TEX`Quantes persones formen l’organització?`, TEX`Quantes persones hi va haver a la vegada, com a màxim?`, TEX`Quants assistents hi havia al cap d’una hora i mitja?`],
    col: 1 },

  'apl-ud5/U3.3': {
    text: TEX`Comprova si $x = 3$ i $x = -3$ són solució d’aquestes equacions.`,
    apartats: [TEX`$3x - 2 = 7$`, TEX`$x^2 - 9 = 0$`, TEX`$x - 3 = 0$`, TEX`$(x - 3)^2 = 0$`] },

  'apl-ud5/U3.8': {
    text: TEX`Resol aquestes equacions.`,
    apartats: [TEX`$7x^2 - 12 = 0$`, TEX`$2x^2 - 32 = 0$`, TEX`$2x^2 = 0$`],
    col: 3 },

  'apl-ud5/U3.38': {
    text: TEX`Resol aquestes equacions.`,
    apartats: [TEX`$x(6x - 7) = 0$`, TEX`$x(5 - 4x) = 0$`, TEX`$x(2x + 9) = 0$`, TEX`$x(4x + 8) = 0$`] },

  'apl-ud5/U3.39': {
    text: TEX`Resol aquestes equacions.`,
    apartats: [TEX`$x(x + 1) = 0$`, TEX`$x(x + 1) = 1$`, TEX`$x(x + 1) = x$`, TEX`$x(x + 1) = -x$`, TEX`$x(x + 1) = x + 1$`, TEX`$x(x + 1) = -x + 1$`] },

  'apl-ud5/AP.10': {
    text: TEX`Desenvolupa aplicant les igualtats notables.`,
    apartats: [TEX`$(x + 3y)^2$`, TEX`$(3x + 2)(3x - 2)$`, TEX`$(5x - 1)^2$`, TEX`$(x + 5y)(x - 5y)$`, TEX`$(-3x + y)^2$`, TEX`$(-2x - y)^2$`] },

  'apl-ud5/U3.9': {
    text: TEX`Determina el nombre de solucions d’aquestes equacions.`,
    apartats: [TEX`$x^2 - 10x + 25 = 0$`, TEX`$x^2 - 5x + 8 = 0$`] },

  'apl-ud5/U3.45': {
    text: TEX`Sense resoldre-les, digues quantes solucions tenen aquestes equacions.`,
    apartats: [TEX`$x^2 - 8x + 16 = 0$`, TEX`$4x^2 + 4x - 1 = 0$`, TEX`$x^2 - 12x + 40 = 0$`, TEX`$x^2 + 3x = 0$`, TEX`$x^2 = x$`, TEX`$x^2 = x - 3$`, TEX`$-x^2 = 5$`, TEX`$x^2 = -x$`] },

  'apl-ud5/U3.7': {
    titol: TEX`Reflexiona`,
    text: TEX`Troba equacions de segon grau que tinguin aquestes solucions.`,
    apartats: [TEX`$x_1 = 4$, $x_2 = -2$`, TEX`$x_1 = 7$, $x_2 = 0$`] },

  'apl-ud5/U3.11': {
    titol: TEX`Reflexiona`,
    text: TEX`Escriu dues equacions de segon grau que tinguin $-2$ com a única solució.` },

  'apl-ud5/U3.40': {
    titol: TEX`Investiga`,
    text: TEX`Busca una manera de resoldre aquestes equacions sense la fórmula, fent servir les identitats notables, i resol-les.`,
    apartats: [TEX`$(x - 3)^2 - 4 = 0$`, TEX`$x^2 - 6x + 8 = 0$`] },

  'apl-ud5/U3.42': {
    text: TEX`Indica el grau d’aquestes equacions i resol-les.`,
    apartats: [TEX`$2x(1 + x) - 5 = x(x + 1) + x^2$`, TEX`$(x + 4)(x - 8) = x(x + 1) - 2$`, TEX`$4(x + 1)x - 9 + 2x(3 + x) \cdot 5 - 1 = 7x(2x + 3)$`],
    col: 1 },

  'apl-ud5/U3.43': {
    text: TEX`Troba les solucions d’aquestes equacions.`,
    apartats: [TEX`$-x^2 - \dfrac{x}{3} + \dfrac{1}{12} = 0$`, TEX`$x^2 - \dfrac{5x}{4} - \dfrac{3}{2} = 0$`, TEX`$\dfrac{x^2}{9} + \dfrac{2x}{3} - 3 = 0$`, TEX`$\dfrac{3x^2}{8} + \dfrac{5x}{4} + 1 = 0$`] },

  'apl-ud5/U3.49': {
    titol: TEX`Inventa`,
    text: TEX`Escriu quatre equacions de segon grau de la forma $x^2 + 2x + c = 0$:`,
    apartats: [TEX`amb dues solucions.`, TEX`amb una solució doble.`, TEX`sense solució.`],
    col: 1 },

  'apl-ud5/U3.51': {
    text: TEX`Digues si és vertader o fals, i raona-ho.`,
    apartats: [TEX`Les solucions de $x^2 + 1 = 0$ són $x = \pm 1$.`, TEX`$x^2 - 4 = 0$ té les mateixes solucions que $3x^2 = 12$.`, TEX`$x^2 + 2x^2 + 3x^2 + 4x^2 = 0$ té com a solució $x = 10$.`, TEX`Les solucions de $x^2 - x = 0$ i de $x^2 = -x$ coincideixen.`, TEX`Si es multiplica $ax^2 + bx + c = 0$ per $n$, les seves solucions queden multiplicades per $n$.`],
    col: 1 },

  'apl-ud5/U3.71': {
    text: TEX`Tenim $70$ m de cable per encerclar un hort rectangular. Si l’amplada ha de ser tres quartes parts de la llargada, quina superfície tindrà l’hort?` },

  'apl-ud5/U3.77': {
    text: TEX`Un jardí rectangular fa $5\,600$ m² i té $10$ m més de llargada que d’amplada. Quant fa d’amplada?` },

  'apl-ud5/U7.95': {
    text: TEX`Un jugador de bàsquet, a la línia situada a $4{,}6$ m de la cistella, llança un tir lliure.`,
    apartats: [TEX`Quin tipus de funció és la trajectòria de la pilota?`, TEX`Troba’n l’equació, sabent que el punt més alt és a la meitat de la distància entre el jugador i la cistella i que la seva altura és de $3{,}5$ m.`],
    col: 1 },

  'apl-ud5/U3.44': {
    titol: TEX`Repte`,
    text: TEX`Si $x = \sqrt{2} - 1$ és solució de $3x^2 - ax + 1 = 0$, quin és el valor de $a$?` },

  'apl-ud10/U4.8': {
    text: TEX`Resol per substitució, igualació i reducció aquests sistemes.`,
    apartats: [TEX`$\left.\begin{aligned} x-y&=4\\ x+2y&=13 \end{aligned}\right\}$`, TEX`$\left.\begin{aligned} 2x+3y&=-5\\ 3x+2y&=-5 \end{aligned}\right\}$`] },

  'apl-ud10/U4.63': {
    text: TEX`En un congrés hi ha $60$ persones. Si se n’anessin $3$ homes i en vinguessin $3$ dones, el nombre de dones seria $\dfrac{1}{3}$ del d’homes. Quants homes i quantes dones hi ha?` },

  'apl-ud10/U4.64': {
    text: TEX`En una caravana de camells i dromedaris hi ha $440$ potes i $160$ gepes. Quants camells i quants dromedaris hi ha? (Els camells tenen dues gepes i els dromedaris, una.)` },

  'apl-ud10/U4.68': {
    text: TEX`L’Elena té vuit monedes que sumen $3{,}10$ €. Totes són de $0{,}50$ € o de $0{,}20$ €. Quantes en té de cada tipus?` },

  'apl-ud10/U3.58': {
    text: TEX`Completa amb $<$, $\le$, $>$ o $\ge$ perquè sigui cert per a $x = 2$.`,
    apartats: [TEX`$2x\ \square\ 3$`, TEX`$-2x\ \square\ 3$`, TEX`$-2x\ \square\ -3$`, TEX`$-2x\ \square\ 3x$`, TEX`$2\ \square\ -3x$`, TEX`$-2\ \square\ -3x$`, TEX`$4x\ \square\ 1$`, TEX`$3x\ \square\ -x + 3$`] },

  'apl-ud10/U3.24': {
    text: TEX`Resol aquestes inequacions.`,
    apartats: [TEX`$2x - 3x + 5 > 6x - 1$`, TEX`$-2x < 2x - 4$`, TEX`$2x > 4x + 2$`, TEX`$5x \le x + 5$`, TEX`$7 - 2x < -4$`, TEX`$x + 1 < 2x - 1$`, TEX`$4x \ge 1 - x$`, TEX`$-2x \ge 0$`],
    col: 1 },

  'apl-ud10/U3.59': {
    text: TEX`Opera i resol aquestes inequacions.`,
    apartats: [TEX`$1 - (x + 2) \cdot 2 \le 4(x - 9)$`, TEX`$6(x + 5) > x + 3(4 - x)$`, TEX`$-7(4 + x) < 1 + 5(2 - x)$`, TEX`$5(4x - 1) \ge (x + 3)(-4)$`, TEX`$2 - 3(9 - x) \ge x - (-x + 7)$`, TEX`$x + (7 - x) \cdot 3 < 4x - 5(3 + x)$`],
    col: 1 },

  'apl-ud10/U3.26': {
    titol: TEX`Reflexiona`,
    text: TEX`Escriu una inequació que tingui com a solució $[2, +\infty)$.` },

  'apl-ud10/U3.80': {
    text: TEX`Resol $0 < x - 3 < 18$.` },

  'apl-ud10/U3.73': {
    text: TEX`A la platja, llogar una cadira costa $3$ € l’hora. Una gandula costa $5$ € fixos més $2$ € l’hora. A partir de quantes hores és més econòmica la gandula?` },

  'apl-ud10/U7.93': {
    text: TEX`El Carles vol llogar una caravana. La tarifa A és de $50$ € més $10$ € per dia, i la tarifa B, de $30$ € més $12$ € per dia.`,
    apartats: [TEX`Si la lloga $8$ dies, quina empresa és més barata?`, TEX`I si la lloga $15$ dies?`, TEX`Escriu les funcions Preu–Temps i representa-les en els mateixos eixos. On es tallen? Què representen els punts de tall?`],
    col: 1 },

  'apl-ud6/U7.46': {
    text: TEX`Relaciona cada funció amb la seva gràfica.`,
    apartats: [TEX`$y = (x + 1)^2 - 1$`, TEX`$y = -(x + 2)^2 + 4$`, TEX`$y = 2(x + 1)^2 - 2$`, TEX`$y = -(x - 3)^2 + 5$`],
    fig: ['enunciats/U7.46.png'] },

  'apl-ud6/U7.51': {
    text: TEX`Representa aquestes funcions.`,
    apartats: [TEX`$y = -x^2 + 7x$`, TEX`$y = -\left(x - \dfrac{1}{2}\right)^2 + \dfrac{1}{4}$`, TEX`$y = 3x^2 - 4x$`, TEX`$y = -\left(\dfrac{1}{3} - x\right)^2 + \dfrac{1}{9}$`],
    col: 1 },

  'apl-ud6/U6.28': {
    text: TEX`Troba en cada cas els punts de tall amb els eixos.`,
    apartats: [TEX`$f(x) = \dfrac{x^2 + 4x + 3}{3}$`, TEX`$f(x) = \dfrac{2x - 1}{5}$`] },

  'apl-ud6/U7.54': {
    titol: TEX`Inventa`,
    text: TEX`Escriu l’equació de dues paràboles:`,
    apartats: [TEX`amb vèrtex al punt $(2, -1)$.`, TEX`que passin pel punt $(-1, 4)$.`],
    col: 1 },

  'apl-ud6/U7.106': {
    text: TEX`En una fàbrica de tractors, el cost de fabricació per unitat, en milers d’euros, ve donat per la funció $y = -\dfrac{1}{4}x^2 + 4x + 20$, on $x$ és el nombre de tractors fabricats.`,
    apartats: [TEX`Quin és el preu màxim de cost d’una unitat?`, TEX`Quant costa un tractor si avui se n’han fabricat $15$?`],
    col: 1 },

  'apl-ud6/U7.96': {
    text: TEX`Es llança un bumerang que segueix la trajectòria $f(x) = -x^2 + 5x$. Un ocell vola al mateix temps seguint la recta $y = x + 3$. Es tallen les trajectòries en algun punt? En quin punt es produirà el xoc?` },

  'apl-ud6/U7.100': {
    titol: TEX`Ajuda humanitària`,
    text: TEX`Els avions de càrrega llancen aliments i medicines a poblacions aïllades. Volen tan baix com poden perquè l’impacte no malmeti el contingut. La velocitat $v$, en m/s, amb què arriba a terra un objecte que cau des d’una altura $h$, en m, és $v = \sqrt{20h}$. Representa la funció que relaciona l’altura des de la qual s’ha de llançar un objecte amb la velocitat amb què ha d’arribar.` },

  'apl-ud7/U6.79': {
    text: TEX`Determina els intervals de creixement i de decreixement i els màxims i mínims d’aquestes funcions.`,
    fig: ['enunciats/U6.79.png'] },

  'apl-ud7/U6.84': {
    text: TEX`El gràfic mostra l’evolució de la temperatura d’un dia (a l’eix horitzontal, les hores). Determina quan es va arribar a la temperatura màxima i a la mínima, i si aquest màxim és absolut o relatiu.`,
    fig: ['enunciats/U6.84.png'] },

  'apl-ud7/U6.100': {
    text: TEX`Representa aquesta funció i troba’n el domini i el recorregut.`,
    despres: TEX`$f(x) = \begin{cases} 2x - 2 & \text{si } x \le 1\\ 2 - 2x & \text{si } 1 < x \le 3\\ -4 & \text{si } x > 3 \end{cases}$` },

  'apl-ud7/U6.112': {
    text: TEX`Expressa amb una funció a trossos el cost dels enviaments d’una botiga:`,
    punts: [TEX`Comanda de menys de $400$ €: $39$ €.`, TEX`Comanda d’entre $400$ € i $990$ €: el $10$ % de l’import.`, TEX`Comanda de $990$ € o més: $99$ €.`] },

  'apl-ud7/U7.87': {
    text: TEX`El cost fix de la factura mensual d’electricitat és de $10$ €. A més, cada quilowatt hora costa $0{,}02$ €. Fes una taula que relacioni la despesa mensual, en kWh, i l’import, en euros. Escriu la funció i representa-la.` },

  'apl-ud7/U7.97': {
    text: TEX`El bacteri E. coli, que viu a l’intestí d’alguns animals, es reprodueix per bipartició cada $25$ minuts. Calcula l’expressió de la funció que relaciona el nombre de bacteris, $n$, amb el temps, $t$, transcorregut des que el primer bacteri es reprodueix.` },

  'apl-ud7/U7.75': {
    text: TEX`Representa aquestes funcions sobre els mateixos eixos.`,
    apartats: [TEX`$y = 2^{2x}$`, TEX`$y = 4^{-2x}$`, TEX`$y = \left(\dfrac{1}{2}\right)^{x/2}$`],
    col: 3 },

  'apl-ud8/U8.1': {
    text: TEX`Digues si estudiaries la població o una mostra.`,
    apartats: [TEX`La longitud dels cargols que fabrica una màquina de manera contínua.`, TEX`El pes d’un grup de cinc amics.`],
    col: 1 },

  'apl-ud8/U8.2': {
    titol: TEX`Reflexiona`,
    text: TEX`Aquest és el color de cabells de $15$ noies (M: morè, R: ros, P: pèl-roig). Fes-ne la taula de freqüències.`,
    despres: TEX`M R P M M M P R R R M M R R P` },

  'apl-ud8/U8.3': {
    text: TEX`Aquest és el sexe de $20$ nadons (H: nen, M: nena). Fes-ne la taula de freqüències, el diagrama de sectors i el diagrama de barres.`,
    despres: TEX`H M H H M · M H H M M · M M M H M · M H H M M` },

  'apl-ud8/U8.39': {
    text: TEX`Dels $30$ estudiants d’una classe, el $10$ % ho va aprovar tot, el $20$ % va suspendre una assignatura, el $50$ % en va suspendre dues i la resta, més de dues.`,
    apartats: [TEX`Fes la taula de freqüències.`, TEX`Quina freqüència respon a quants van suspendre menys de dues assignatures?`],
    col: 1 },

  'apl-ud8/U8.46': {
    text: TEX`Tria un gràfic adequat i representa les $35$ dades obtingudes en un estudi estadístic d’una variable quantitativa amb cinc valors, per als quals es té que $f_1 = 7$, $f_2 = 5$, $f_3 = 9$ i $f_4 = 10$.` },

  'apl-ud8/U8.49': {
    text: TEX`Construeix un diagrama de sectors per a aquesta taula.`,
    despres: TEX`$\begin{array}{l|c|c} \text{Menjar} & f_i & h_i\\ \hline \text{Pasta} & 45 & 0{,}225\\ \text{Llegums} & 30 & 0{,}15\\ \text{Verdura} & 20 & 0{,}1\\ \text{Carn} & 65 & 0{,}325\\ \text{Peix} & 40 & 0{,}2 \end{array}$` },

  'apl-ud8/U8.52': {
    text: TEX`Aquestes són les estatures, en cm, de $27$ joves. Agrupa-les en intervals d’amplitud $5$ començant per $[150, 155)$, fes el recompte i la taula de freqüències, i dibuixa l’histograma.`,
    despres: TEX`$\begin{array}{ccccc} 155 & 178 & 170 & 165 & 173\\ 169 & 158 & 170 & 179 & 161\\ 167 & 151 & 163 & 158 & 164\\ 168 & 160 & 166 & 176 & \\ 164 & 156 & 170 & 171 & \\ 174 & 176 & 164 & 154 & \end{array}$` },

  'apl-ud8/U8.54': {
    text: TEX`Fes la taula de freqüències d’aquest gràfic.`,
    fig: ['enunciats/U8.54.png'] },

  'apl-ud8/U8.63': {
    text: TEX`Calcula les mesures de centralització d’aquestes dades.`,
    despres: TEX`$\begin{array}{cccccccccc} 7&3&2&4&5&1&8&6&1&5\\ 8&6&3&4&0&9&2&5&7&4\\ 3&2&4&9&8&1&0&2&4&1\\ 0&2&1&5&6&4&3&5&2&3 \end{array}$` },

  'apl-ud8/U8.59': {
    text: TEX`Troba el valor de $x_4$ si la mitjana és $5$.`,
    apartats: [TEX`$\begin{array}{c|ccccc} x_i & 1 & 4 & 6 & x_4 & 9\\ \hline f_i & 5 & 2 & 6 & 4 & 1 \end{array}$`, TEX`$\begin{array}{c|cccc} x_i & 2 & 3 & 6 & x_4\\ \hline f_i & 5 & 2 & 4 & 3 \end{array}$`],
    col: 1 },

  'apl-ud8/U8.62': {
    text: TEX`Calcula la mitjana, la mediana i la moda d’aquestes dades.`,
    despres: TEX`$\begin{array}{c|c} \text{Interval} & f_i\\ \hline [0, 4) & 15\\ {[4, 8)} & 12\\ {[8, 12)} & 9\\ {[12, 16)} & 10\\ {[16, 20)} & 7 \end{array}$` },

  'apl-ud8/U8.69': {
    text: TEX`Tenim les dades $23$, $17$, $y$, $19$, $x$, $16$. Troba $x$ i $y$ perquè la mitjana sigui $20$ i la moda, $23$.` },

  'apl-ud8/U8.80': {
    titol: TEX`Finances`,
    text: TEX`L’1 de gener de 2018 vaig invertir $12\,000$ € en un fons d’inversió. Les rentabilitats anuals van ser: 2018, $+2{,}57$ %; 2019, $-0{,}22$ %; 2020, $+3{,}48$ %; 2021, $-4{,}67$ %; 2022, $-1{,}08$ %.`,
    apartats: [TEX`Quina va ser la rentabilitat mitjana?`, TEX`Si vaig treure els diners l’1 de gener de 2023, en vaig obtenir més o menys dels que vaig invertir? Quant vaig obtenir?`],
    col: 1 },

  'apl-ud8/U8.81': {
    titol: TEX`Agricultura`,
    text: TEX`El preu per quilo de la coliflor depèn del pes de cada peça: fins a $0{,}5$ kg, $1{,}20$ €; de $0{,}51$ a $1$ kg, $1{,}50$ €; de $1{,}01$ a $1{,}5$ kg, $1{,}80$ €; de $1{,}51$ a $2$ kg, $2{,}10$ €; més de $2$ kg, $2{,}40$ €. Aquests són els pesos, en kg, de les coliflors d’un hort:`,
    punts: [TEX`$0{,}45\quad 0{,}89\quad 1{,}12\quad 1{,}23\quad 1{,}01$`, TEX`$0{,}78\quad 1{,}56\quad 0{,}92\quad 1{,}34\quad 0{,}99$`, TEX`$1{,}67\quad 1{,}87\quad 1{,}56\quad 1{,}05\quad 0{,}91$`, TEX`$1{,}74\quad 1{,}22\quad 1{,}15\quad 1{,}46\quad 1{,}14$`, TEX`$1{,}23\quad 1{,}33\quad 1{,}47\quad 1{,}65\quad 1{,}78$`, TEX`$1{,}09\quad 0{,}85\quad 1{,}19\quad 1{,}22\quad 1{,}08$`, TEX`$1{,}18\quad 1{,}29\quad 1{,}36$`],
    apartats: [TEX`Agrupa-les per classes i calcula quants ingressos s’obtenen per totes.`, TEX`Quant s’obté de mitjana per quilo?`, TEX`El pes mitjà d’una coliflor és de $1{,}2$ kg. Aquest hort és per sobre o per sota?`, TEX`Quina és la classe amb més coliflors? Com s’anomena aquesta classe?`, TEX`S’estima que poden augmentar $0{,}2$ kg per setmana durant dues setmanes. Quant s’obtindrà si es mantenen dues setmanes més? S’incrementarà la mitjana del preu per quilo?`],
    col: 1 },

  'apl-ud8/U8.82': {
    titol: TEX`Investiga`,
    text: TEX`L’estatura mitjana de $25$ estudiants és de $160$ cm. Digues si és vertader o fals.`,
    apartats: [TEX`Si una noia fa $162$ cm, hi ha d’haver un estudiant de $158$ cm.`, TEX`L’estatura de la majoria és de $160$ cm.`, TEX`Si s’ordenen per estatura, el que ocupa la posició central fa $160$ cm.`, TEX`La meitat ha de fer menys de $160$ cm i l’altra meitat, més.`],
    col: 1 },

  'apl-ud8/U8.73': {
    text: TEX`Afegeix dues dades a $8\ \ 8\ \ 8\ \ 8\ \ 8\ \ 9\ \ 9\ \ 10\ \ 10\ \ 10$ perquè:`,
    apartats: [TEX`$Me = 8{,}5$`, TEX`$Me = 8$`, TEX`$Me = 9$`],
    col: 3 },

  'apl-ud8/U8.77': {
    titol: TEX`Repte`,
    text: TEX`La mitjana de $100$ nombres és $86$. S’esborren $20$ nombres i la mitjana passa a ser $84$. Quina és la mitjana dels $20$ nombres esborrats?` },

  'apl-ud9/U9.17': {
    text: TEX`Digues quins d’aquests experiments són aleatoris i quins són deterministes.`,
    apartats: [TEX`Pesar $1$ dm³ d’aigua.`, TEX`Mesurar el costat d’un quadrat de $2$ cm².`, TEX`Preguntar un nombre de $2$ xifres.`, TEX`Llançar un dau i anotar el resultat.`],
    col: 1 },

  'apl-ud9/U9.63': {
    text: TEX`Classifica en deterministes o aleatoris.`,
    apartats: [TEX`El temps d’un atleta en una cursa.`, TEX`Repartir un nombre de caramels entre $4$ nenes.`, TEX`Triar un nombre menor que $12$.`, TEX`Les persones que hi ha en un autobús a una hora determinada.`, TEX`La distància recorreguda per un vehicle que circula a $80$ km/h.`, TEX`Els caràcters rebuts en el pròxim correu.`, TEX`Les monedes d’$1$ € per $4$ bitllets de $5$ €.`, TEX`Les monedes que et donen a canvi de $4$ bitllets de $5$ €.`],
    col: 1 },

  'apl-ud9/U9.1': {
    text: TEX`Un equip de futbol té $2$ equipacions, formades per samarreta, pantalons i mitjons, de colors diferents, verd i blau. De quantes maneres diferents es poden vestir sense que es repeteixi la indumentària?` },

  'apl-ud9/U9.45': {
    text: TEX`Un menú té $3$ primers, $3$ segons i $4$ postres. Quants menús diferents es poden fer? Calcula-ho amb el mètode del producte i amb un diagrama d’arbre.` },

  'apl-ud9/U9.47': {
    text: TEX`Amb les xifres $1$, $2$, $3$ i $4$ es formen nombres de tres xifres. Quants nombres n’hi ha que comencin per una xifra parella? Quants comencen i acaben per una xifra senar?` },

  'apl-ud9/U9.23': {
    text: TEX`Llancem una moneda $75$ vegades i obtenim $43$ cares. La freqüència relativa de «Sortir creu» és:`,
    apartats: [TEX`$\dfrac{32}{75}$`, TEX`$32$`, TEX`$\dfrac{32}{100}$`, TEX`$0{,}32$`],
    col: 4 },

  'apl-ud9/U9.26': {
    text: TEX`En una bossa hi ha $5$ boles vermelles, $10$ de verdes i $5$ de blaves. Calcula la probabilitat d’extreure’n una que sigui:`,
    apartats: [TEX`vermella.`, TEX`verda.`, TEX`blava.`, TEX`negra.`],
    col: 4 },

  'apl-ud9/U9.28': {
    text: TEX`El Jordi té $5$ camises de màniga llarga, $8$ de màniga curta i $7$ samarretes. Si tria una peça a l’atzar, calcula la probabilitat que sigui:`,
    apartats: [TEX`una camisa de màniga llarga.`, TEX`una samarreta.`, TEX`una camisa de màniga curta.`, TEX`una camisa.`],
    col: 1 },

  'apl-ud9/U9.80': {
    text: TEX`Traiem una carta d’una baralla espanyola de $40$ cartes (oros, copes, espases i bastos; cada pal té as, del $2$ al $7$, sota, cavall i rei). Calcula la probabilitat de treure:`,
    apartats: [TEX`un as.`, TEX`un oro.`, TEX`el rei de bastos.`, TEX`un as o una figura.`] },

  'apl-ud9/U9.81': {
    titol: TEX`Investiga`,
    text: TEX`Un espai mostral té quatre successos elementals. Raona si pot ser cert que les seves probabilitats siguin $\dfrac{1}{5}$, $\dfrac{2}{3}$, $\dfrac{1}{10}$ i $\dfrac{1}{20}$.` },

  'apl-ud9/U9.40': {
    text: TEX`En una urna hi ha $2$ boles blanques i $2$ de blaves. Calcula la probabilitat d’extreure primer una bola blava i després una de blanca si:`,
    apartats: [TEX`no tornem la primera bola a l’urna.`, TEX`tornem la primera bola a l’urna.`],
    col: 1 },

  'apl-ud9/U9.99': {
    titol: TEX`Biologia`,
    text: TEX`Suposem que és igual de probable que un nadó sigui nen o nena. Una parella té dos fills. Calcula la probabilitat que siguin:`,
    apartats: [TEX`dos nens.`, TEX`dues nenes.`, TEX`un nen i una nena.`],
    col: 1 },

  'apl-ud9/U9.88': {
    text: TEX`Es llancen tres monedes. Calcula la probabilitat d’obtenir:`,
    apartats: [TEX`almenys dues creus.`, TEX`almenys una cara.`, TEX`com a molt dues creus.`, TEX`com a molt una cara.`] },

  'apl-ud9/U9.43': {
    text: TEX`Durant una campanya de vacunació de la grip es vacuna el $60$ % de la població. Passat un mes, s’observa que han emmalaltit el $10$ % de les persones vacunades i el $60$ % de les no vacunades. Calcula la probabilitat que, triada una persona a l’atzar:`,
    apartats: [TEX`estigui vacunada i no hagi emmalaltit.`, TEX`no estigui vacunada i hagi emmalaltit.`],
    col: 1 },

  'apl-ud9/U9.87': {
    text: TEX`Es llança un dau enlaire i se sumen els punts de les cares visibles. Calcula la probabilitat d’obtenir:`,
    apartats: [TEX`exactament $15$.`, TEX`$17$ o $19$.`, TEX`més de $16$.`, TEX`un nombre primer.`] },

  'apl-ud9/U9.34': {
    text: TEX`Calcula la probabilitat de no treure ni asos ni figures en extreure una carta de la baralla espanyola.` },

  'apl-ud9/U9.84': {
    text: TEX`En un dau tenim que $P(1) = P(2) = P(3) = \dfrac{1}{7}$ i $P(4) = P(5) = P(6) = x$. Quin és el valor de $x$?` },

  'apl-ud9/U9.98': {
    text: TEX`En una penya, la probabilitat que, triada una persona a l’atzar, sigui un noi és $0{,}48$.`,
    apartats: [TEX`Quina és la probabilitat que sigui una noia?`, TEX`Quants membres té la penya si hi ha $13$ noies?`],
    col: 1 },

  'apl-ud9/U9.96': {
    text: TEX`Es llancen tres daus i es multipliquen els resultats. Quina és la probabilitat que el producte sigui $36$?` },

  'apl-ud9/U9.102': {
    titol: TEX`Investiga`,
    text: TEX`Dos jugadors de bàsquet tenen un percentatge d’encert del $50$ % en tirs lliures. Juguen alternant els tirs fins que un dels dos anoti. Quin avantatge té el primer que llança?` },

  /* ── Enunciats de les tasques UD1 i UD2 (amagades fins al curs 2027-28) ── */

  'apl-ud1/U1.4': {
    text: TEX`Considera les arrels quadrades dels nombres naturals de l’$1$ al $20$ i indica quines són nombres racionals i quines són nombres irracionals.` },

  'apl-ud1/U1.5': {
    text: TEX`Indica de quin tipus són aquests nombres.`,
    apartats: [TEX`$1{,}232323\ldots$`, TEX`$-0{,}246810$`, TEX`$\sqrt{13}$`, TEX`$0{,}135791113$`] },

  'apl-ud1/U1.6': {
    text: TEX`Escriu quatre nombres irracionals i explica per què ho són.` },

  'apl-ud1/U1.40': {
    text: TEX`Digues quines de les arrels quadrades de l’$1$ al $20$ són nombres racionals i quines, irracionals.` },

  'apl-ud1/U1.41': {
    text: TEX`Esbrina quins d’aquests nombres són racionals i quins, irracionals.`,
    apartats: [TEX`$24{,}232323\ldots$`, TEX`$1 + \sqrt{8}$`, TEX`$\sqrt{1 + 8}$`, TEX`$2\sqrt[4]{4}$`, TEX`$\left(\sqrt[4]{4}\right)^2$`, TEX`$\pi^2$`] },

  'apl-ud1/U1.23': {
    titol: TEX`Reflexiona`,
    text: TEX`Calcula la diagonal d’un rectangle de costats $8$ cm i $10$ cm. Quina classe de nombre s’obté? Arrodoneix el resultat a les mil·lèsimes.` },

  'apl-ud1/U1.46': {
    text: TEX`En un triangle equilàter, calcula i determina de quin tipus de nombre es tracta:`,
    apartats: [TEX`L’altura, si el costat fa $10$ cm.`, TEX`L’àrea, si el costat fa $3$ cm.`, TEX`L’altura i l’àrea, si el costat fa $\sqrt{3}$ cm.`],
    col: 1 },

  'apl-ud1/U1.8': {
    text: TEX`Representa aquests nombres reals.`,
    apartats: [TEX`$\sqrt{10}$`, TEX`$1{,}\widehat{3}$`, TEX`$\sqrt{13}$`, TEX`$-2{,}334445555\ldots$`, TEX`$2\pi$`, TEX`$1{,}25$`] },

  'apl-ud1/U1.10': {
    titol: TEX`Reflexiona`,
    text: TEX`Observa aquesta recta real i escriu:`,
    fig: ['enunciats/U1.10.png'],
    apartats: [TEX`Dos nombres enters entre $A$ i $C$.`, TEX`Tres nombres racionals no enters entre $B$ i $C$.`, TEX`Tres nombres irracionals entre $C$ i $D$.`],
    col: 1 },

  'apl-ud1/U1.43': {
    text: TEX`Representa aquestes arrels a la recta real.`,
    apartats: [TEX`$\sqrt{3}$`, TEX`$\sqrt{6}$`, TEX`$\sqrt{38}$`, TEX`$1 + \sqrt{37}$`] },

  'apl-ud1/U1.20': {
    text: TEX`Trunca i arrodoneix a les centèsimes.`,
    apartats: [TEX`$24{,}1587$`, TEX`$24{,}1507$`, TEX`$24{,}9215$`, TEX`$24{,}1582$`, TEX`$24{,}1617$`, TEX`$24{,}1627$`],
    col: 3 },

  'apl-ud1/U1.21': {
    text: TEX`Una professora decideix arrodonir les notes de $10$ estudiants. Quines notes els posarà?`,
    despres: TEX`$\begin{array}{ccccc} 3{,}8 & 6{,}4 & 9{,}7 & 4{,}3 & 5{,}8\\ 8{,}4 & 9{,}7 & 2{,}3 & 3{,}8 & 6{,}4 \end{array}$` },

  'apl-ud1/U1.22': {
    text: TEX`Aproxima $0{,}121212\ldots$; $5{,}23888\ldots$ i $\dfrac{11}{9}$ per arrodoniment i per truncament amb dues xifres decimals.` },

  'apl-ud1/U1.83': {
    text: TEX`Fes aquestes operacions i arrodoneix els resultats a les dècimes. Després, arrodoneix cada nombre a les dècimes i resol l’operació. Amb quin procediment es comet un error menor?`,
    apartats: [TEX`$3{,}253 + 8{,}45$`, TEX`$53{,}32 - 18{,}93$`, TEX`$13{,}5 \cdot 2{,}7$`, TEX`$40{,}92 : 5{,}3$`] },

  'apl-ud1/U1.11': {
    text: TEX`Indica el conjunt numèric al qual pertany cada nombre.`,
    apartats: [TEX`$8{,}0999\ldots$`, TEX`$-11$`, TEX`$2{,}5$`, TEX`$-\dfrac{1}{5}$`, TEX`$6{,}\widehat{126}$`, TEX`$1{,}223334444\ldots$`, TEX`$\sqrt{15}$`, TEX`$\dfrac{8}{7}$`, TEX`$\pi$`],
    col: 3 },

  'apl-ud1/U1.12': {
    text: TEX`Decideix el menor conjunt numèric al qual pertany cadascun d’aquests nombres.`,
    apartats: [TEX`$-5$`, TEX`$\sqrt{2}$`, TEX`$\dfrac{3}{5}$`, TEX`$\sqrt{625}$`, TEX`$3\pi$`, TEX`$-37$`, TEX`$\sqrt{\dfrac{1125}{5}}$`, TEX`$21{,}\widehat{463}$`] },

  'apl-ud1/U1.50': {
    text: TEX`Classifica cada nombre en el menor conjunt numèric al qual pertany.`,
    apartats: [TEX`$\pi$`, TEX`$-7$`, TEX`$6{,}\widehat{72}$`, TEX`$418$`],
    col: 4 },

  'apl-ud1/U1.52': {
    text: TEX`Indica tots els conjunts numèrics als quals pertanyen aquests nombres.`,
    apartats: [TEX`$\sqrt{17} + 8$`, TEX`$\sqrt{17 + 8}$`, TEX`$8 - \sqrt{17}$`, TEX`$\sqrt{17 - 8}$`, TEX`$4 - \sqrt{20}$`, TEX`$20 - \sqrt{4}$`, TEX`$\sqrt{20 - 4}$`, TEX`$4 + \sqrt{20}$`] },

  'apl-ud1/U1.53': {
    text: TEX`Classifica aquests nombres reals. Expressa’ls en forma decimal i ordena’ls de menor a major.`,
    apartats: [TEX`$5$; $\dfrac{7}{3}$; $2\sqrt{5}$; $\dfrac{7}{9}$; $\dfrac{8}{5}$`, TEX`$\sqrt{8}$; $6 - \sqrt{3}$; $\dfrac{35}{90}$; $\dfrac{\sqrt{12}}{2}$`],
    col: 1 },

  'apl-ud1/U1.60': {
    text: TEX`Opera i indica quin tipus de nombre real resulta.`,
    apartats: [TEX`$\sqrt{2{,}\widehat{7}}$`, TEX`$4{,}0\widehat{9} - 1{,}3\widehat{9}$`, TEX`$5{,}4\widehat{3} \cdot 1{,}\widehat{2}$`, TEX`$\sqrt{\dfrac{1{,}\widehat{3}}{3}}$`] },

  'apl-ud1/U1.FN': {
    titol: TEX`Fake news: tanta gent hi havia?`,
    text: TEX`Mario Vargas Llosa explica, a la novel·la «El Paraíso en la otra esquina», que en un acte la protagonista va descobrir que tres quartes parts dels assistents eren patrons i només un terç, obrers. A mi no em surten els comptes… I tu, què en penses?` },

  'apl-ud1/U1.82': {
    titol: TEX`Matemàtiques i… història`,
    text: TEX`Observa aquestes aproximacions de $\pi = 3{,}14159265\ldots$:`,
    punts: [TEX`Antic Egipte (1800 aC): $\left(\dfrac{4}{3}\right)^4$`, TEX`Grècia (s. III aC), Arquimedes: $\dfrac{22}{7}$`, TEX`Egipte (s. II dC), Ptolemeu: $\dfrac{377}{120}$`, TEX`Xina (s. V dC), Tsu Chung Chih: $\dfrac{355}{113}$`],
    despres: TEX`Arrodoneix les aproximacions a les milionèsimes i troba l’error absolut i el relatiu. Quina és la més precisa?` },

  'apl-ud2/U2.27': {
    text: TEX`Calcula el percentatge d’estudiants, d’un total de $432$, que fan aquestes activitats extraescolars.`,
    apartats: [TEX`$54$ estudiants juguen a bàsquet.`, TEX`$144$ estudiants toquen un instrument musical.`, TEX`$62$ estudiants participen en el club de lectura.`],
    col: 1 },

  'apl-ud2/U2.29': {
    titol: TEX`Reflexiona`,
    text: TEX`L’Agnès cull $70$ tones de cereal, que ven a $323$ € la tona de gra i a $15$ € la tona de palla. Si la palla representa el $60$ % del pes total del cereal, calcula els diners que obté.` },

  'apl-ud2/U2.30': {
    text: TEX`La natalitat d’una població ha baixat un $12{,}5$ %. Si aquest any han nascut $98$ nadons, quants en van néixer l’any passat?` },

  'apl-ud2/U2.89': {
    text: TEX`Quin percentatge hi ha en aquestes expressions?`,
    apartats: [TEX`Tres de cada vint persones s’adormen als viatges.`, TEX`Vuit de cada deu establiments tanquen a les 20:00 h.`, TEX`Dos de cada cinc cotxes tenen més de $10$ anys.`, TEX`Un de cada dos pastissos porta xocolata.`, TEX`Set de cada cinquanta pacients no es recuperen amb el primer tractament.`],
    col: 1 },

  'apl-ud2/U2.90': {
    text: TEX`Calcula aquests percentatges de $300$.`,
    apartats: [TEX`$50$ %`, TEX`$10$ %`, TEX`$100$ %`, TEX`$200$ %`, TEX`$25$ %`, TEX`$11$ %`],
    col: 3 },

  'apl-ud2/U2.91': {
    text: TEX`En una època de sequera, un embassament amb una capacitat màxima de $200$ hm³ era al $45$ % de la seva capacitat. Quina quantitat d’aigua contenia en aquell moment?` },

  'apl-ud2/U2.31': {
    text: TEX`Després d’augmentar una quantitat un $12$ %, se’n calcula el $20$ % i s’obté $112$. Calcula la quantitat.` },

  'apl-ud2/U2.33': {
    text: TEX`En augmentar el preu d’un producte un $28$ % i després rebaixar-lo un $12$ %, obtenim un preu final de $527{,}85$ €. Quin era el preu inicial?` },

  'apl-ud2/U2.96': {
    text: TEX`El nombre d’estudiants d’un institut ha disminuït un $20$ % respecte a l’any anterior. Si actualment n’hi ha $1\,500$:`,
    apartats: [TEX`Quants estudiants es van matricular l’any anterior?`, TEX`En quant ha disminuït la matrícula?`],
    col: 1 },

  'apl-ud2/U2.99': {
    text: TEX`Quants diners cal augmentar el preu d’aquests articles perquè tinguin una pujada del $24$ %?`,
    apartats: [TEX`Pa: $0{,}60$ €/unitat.`, TEX`Llet: $1{,}10$ €/ℓ.`, TEX`Ous: $2{,}42$ €/dotzena.`, TEX`Pomes: $2{,}30$ €/kg.`] },

  'apl-ud2/U2.32': {
    text: TEX`El Raül va comprar un cotxe que costava $18\,000$ €, i li van fer un descompte del $20$ %. A aquest preu se li va sumar un $21$ % d’IVA. Quin preu va pagar finalment pel cotxe?` },

  'apl-ud2/U2.97': {
    text: TEX`Comprem un televisor que costa $240$ € sense IVA. El dependent ens proposa un descompte del $20$ % d’aquesta quantitat i, després, hi afegeix un $21$ % d’IVA. Quants diners hem de pagar?` },

  'apl-ud2/U2.98': {
    text: TEX`Un minorista compra un lot d’articles a un preu unitari de $15$ €. Si vol obtenir un guany del $20$ %, a quant ha de vendre cada article?` },

  'apl-ud2/U2.104': {
    text: TEX`Compro uns pantalons de $38$ €. Em fan un descompte del $25$ %, però al preu rebaixat cal afegir-hi un $21$ % d’IVA. Quin preu hauré de pagar?` },

  'apl-ud2/U2.105': {
    text: TEX`Un fabricant elabora un producte que ven a un magatzemista per $3\,000$ €. El magatzemista paga un $21$ % d’IVA i el ven a una botiga per $5\,000$ €. La propietària de la botiga paga un $21$ % d’IVA i ven el producte al públic per $6\,000$ €, més el $21$ % d’IVA.`,
    apartats: [TEX`Quant paga d’IVA cada intermediari?`, TEX`Quin és l’IVA que paga, finalment, el consumidor?`, TEX`Quin tant per cent representa l’IVA que paga el consumidor?`],
    col: 1 },

  'apl-ud2/U2.37': {
    text: TEX`Si faig una inversió al $4{,}5$ % durant $2$ anys en un producte a interès simple, quin és el capital que he invertit si el capital que em tornen puja a $2\,346$ €?` },

  'apl-ud2/U2.38': {
    text: TEX`La Laura demana un préstec de $4\,000$ € i torna $5\,080$ € en un pagament únic amb interessos al cap de $3$ anys. Sabent que és un interès simple, calcula el rèdit del préstec.` },

  'apl-ud2/U2.39': {
    titol: TEX`Reflexiona`,
    text: TEX`Quant de temps he de mantenir $3\,000$ € en un dipòsit a interès simple amb un rèdit del $3$ % per obtenir uns interessos de $225$ €?` },

  'apl-ud2/U2.FN': {
    titol: TEX`Fake news: la calefacció està pels núvols!`,
    text: TEX`A l’última reunió, la presidenta de la comunitat ens va avisar que enguany el preu del gasoil per a la caldera de calefacció ha pujat:`,
    punts: [TEX`Un $10$ % al gener.`, TEX`Un $10$ % al febrer.`, TEX`Un $10$ % al març.`],
    despres: TEX`És a dir, en el que portem d’any, el preu del gasoil ha pujat un $30$ %, i si continua així haurà pujat un $120$ % a final d’any. Per tant, a l’octubre pagaríem el doble que al gener i, al desembre, més del doble. A la pròxima junta s’haurà de decidir si continuem encenent la calefacció, perquè és possible que alguns veïns no puguin fer front a aquesta nova despesa. I tu, què en penses?` },
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
