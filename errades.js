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

  /* ── 4t ESO Aplicades · UD6 · La paràbola (Santillana U7, U6 i U3) ────── */

  'apl-ud6/U7.45': [
    { lloc:    TEX`la taula`,
      ondiu:   TEX`$x$: \quad $-2$ \quad $-1$ \quad $0$ \quad $-1$ \quad $-2$`,
      hadedir: TEX`$x$: \quad $-2$ \quad $-1$ \quad $0$ \quad $1$ \quad $2$`,
      motiu:   TEX`Els dos últims valors de $x$ són positius; els valors de $y$ de la taula són correctes.`,
      marca:   ['u7-paraboles/data/full-1.png', 81.6, 65.4, 10.2, 2.9] },
  ],

  'apl-ud6/U7.46': [
    { lloc:    TEX`c)`,
      ondiu:   TEX`el vèrtex és $(-1, -1)$`,
      hadedir: TEX`el vèrtex és $(-1, -2)$`,
      motiu:   TEX`$y = 2(x + 1)^2 - 2$ té el vèrtex a $(-1, -2)$; la gràfica rosa ho mostra bé.`,
      marca:   ['u7-paraboles/data/full-2.png', 38.0, 57.4, 8.9, 2.9] },
  ],

  'apl-ud6/U7.47': [
    { lloc:    TEX`d)`,
      ondiu:   TEX`Tall amb l’eix $X$: $\left(\dfrac{1}{2}, 0\right)$ … $y = -\dfrac{8}{9}x^2 - \dfrac{32}{9}x + 2$ … i $\left(-\dfrac{9}{2}, 0\right)$`,
      hadedir: TEX`$y = -(x + 2)^2 + 6 = -x^2 - 4x + 2$, que talla l’eix $X$ a $x = -2 \pm \sqrt{6}$, és a dir, a $x \approx 0{,}45$ i $x \approx -4{,}45$`,
      motiu:   TEX`Amb el vèrtex $(-2, 6)$ i el tall $(0, 2)$, $a = -1$. L’equació del llibre surt de llegir $\tfrac{1}{2}$ a la gràfica en lloc de $0{,}45$, i no passa pel vèrtex: hi dona $\tfrac{50}{9} \approx 5{,}6$, no $6$.`,
      marca:   ['u7-paraboles/data/full-3.png', 10.8, 20.6, 33.6, 19.2] },
  ],

  'apl-ud6/U7.49': [
    { lloc:    TEX`f)`,
      ondiu:   TEX`Vèrtex: $\left(-\dfrac{9}{2}, \dfrac{9}{4}\right)$`,
      hadedir: TEX`Vèrtex: $\left(-\dfrac{9}{2}, -\dfrac{9}{4}\right)$`,
      motiu:   TEX`$\left(-\tfrac{9}{2}\right)^2 + 9\cdot\left(-\tfrac{9}{2}\right) + 18 = \tfrac{81}{4} - \tfrac{162}{4} + \tfrac{72}{4} = -\tfrac{9}{4}$. La taula i la gràfica ja ho mostren.`,
      marca:   ['u7-paraboles/data/full-4.png', 66.0, 0.5, 9.8, 4.6] },
  ],

  'apl-ud6/U7.51': [
    { lloc:    TEX`d), la taula`,
      ondiu:   TEX`$y$: \quad $-16$ \quad $-9$ \quad $0$ \quad $-1$ \quad $0$ \quad $5$`,
      hadedir: TEX`$y$: \quad $-\dfrac{56}{3}$ \quad $-11$ \quad $0$ \quad $-\dfrac{1}{3}$ \quad $0$ \quad $-\dfrac{8}{3}$`,
      motiu:   TEX`Són els valors de $y = -x^2 + \tfrac{2}{3}x$ per a $x = -4, -3, 0, 1, \tfrac{2}{3}, 2$. Per exemple, per a $x = 2$: $-4 + \tfrac{4}{3} = -\tfrac{8}{3}$. La gràfica és correcta.`,
      marca:   ['u7-paraboles/data/full-6.png', 22.2, 31.2, 24.0, 3.2] },
  ],

  'apl-ud6/U7.95': [
    { ondiu:   TEX`Una paràbola d’equació $y = x^2 + bx + c$ … $y = x^2 - 4{,}6x + 8{,}79$`,
      hadedir: TEX`Una paràbola $y = a(x - 2{,}3)^2 + 3{,}5$ amb $a < 0$`,
      motiu:   TEX`Amb el coeficient de $x^2$ igual a $1$, el vèrtex $(2{,}3;\ 3{,}5)$ és el punt més baix de la paràbola, no el més alt. Per trobar $a$ cal una altra dada: per exemple, que la pilota entra a la cistella, a $3{,}05$ m d’alçada.`,
      marca:   [['u7-problemes/data/full-2.png', 56.8, 25.6, 26.5, 4.6],
                ['u7-problemes/data/full-2.png', 59.4, 46.0, 33.5, 2.9]] },
  ],

  'apl-ud6/U7.100': [
    { ondiu:   TEX`La taula i la gràfica de $v = \sqrt{20h}$: la velocitat en funció de l’altura`,
      hadedir: TEX`L’altura en funció de la velocitat: $h = \dfrac{v^2}{20}$, una paràbola`,
      motiu:   TEX`L’enunciat demana l’altura des de la qual s’ha de llançar l’objecte perquè arribi amb una velocitat donada: la variable independent és $v$. Per exemple, per arribar a $10$ m/s cal llançar-lo des de $5$ m.`,
      marca:   [['u7-problemes/data/full-3.png', 55.2, 89.6, 34.8, 9.6],
                ['u7-problemes/data/full-4.png', 11.4, 0.4, 30.4, 19.4]] },
  ],

  /* ── 4t ESO Aplicades · UD7 · Funcions: llegim gràfics (Santillana U6, U7 i U2) ─ */

  'apl-ud7/U6.7': [
    { lloc:    TEX`c)`,
      ondiu:   TEX`Una recta contínua, i no es respon si es poden unir els punts`,
      hadedir: TEX`Punts aïllats, un per a cada nombre enter: $(-12, 2)$, $(-8, 3)$, … No es poden unir.`,
      motiu:   TEX`L’enunciat diu que la funció associa un valor a cada nombre enter: entre dos enters no hi ha cap valor de la funció.`,
      marca:   ['u6-activitats/data/full-3.png', 11.0, 59.4, 31.5, 15.0] },
  ],

  'apl-ud7/U6.52': [
    { lloc:    TEX`f)`,
      ondiu:   TEX`$f(3) = \dfrac{-12}{15}$`,
      hadedir: TEX`$f(3) = \dfrac{-12}{5}$`,
      motiu:   TEX`$f(3) = \dfrac{9}{3} - 6 + \dfrac{3}{5} = -3 + \dfrac{3}{5} = -\dfrac{12}{5}$.`,
      marca:   ['u6-funcions/data/full-3.png', 12.0, 24.6, 12.0, 5.0] },
  ],

  'apl-ud7/U6.82': [
    { lloc:    TEX`a)`,
      ondiu:   TEX`Creixent a $(-\infty, 0)$ i a $(0, 3)$. Constant a $(3, 5)$ i decreixent a $(5, +\infty)$.`,
      hadedir: TEX`Creixent a $(-3, 0)$ i a $(0, 3)$, i decreixent a partir de $x = 3$.`,
      motiu:   TEX`A la gràfica, la funció comença a $x = -3$ i, després de $x = 3$, baixa en línia recta: no hi ha cap tram constant. A $x = 3$ passa de créixer a decréixer, i hi té un màxim de valor $3$.`,
      marca:   ['u6-creixement/data/full-3.png', 13.8, 37.4, 32.5, 7.2] },
  ],

  'apl-ud7/U6.89': [
    { ondiu:   TEX`$TVR = \dfrac{f(2) - f(-1)}{2 - (-1)}\cdot 100$: \; a) $300\,\%$; \; b) $-300\,\%$; \; c) $-400\,\%$`,
      hadedir: TEX`$TVR = \dfrac{f(2) - f(-1)}{f(-1)}\cdot 100$: \; a) $\dfrac{9}{-4}\cdot 100 = -225\,\%$; \; b) $\dfrac{-9}{4}\cdot 100 = -225\,\%$; \; c) $\dfrac{-12}{8}\cdot 100 = -150\,\%$`,
      motiu:   TEX`La taxa de variació relativa, tal com la defineix el llibre a l’exercici 88, divideix per $f(a)$, no per $b - a$. El solucionari calcula la taxa de variació mitjana multiplicada per $100$.`,
      marca:   ['u6-creixement/data/full-4.png', 55.5, 71.8, 33.0, 27.8] },
  ],

  'apl-ud7/U6.106': [
    { lloc:    TEX`a) i b)`,
      ondiu:   TEX`a) $f(t) = \dfrac{340}{t}$ \quad b) $g(t) = \dfrac{340t}{t} = 340$`,
      hadedir: TEX`a) $v(t) = 340$ (funció constant) \quad b) $d(t) = 340t$ (proporcionalitat directa)`,
      motiu:   TEX`La velocitat del so no depèn del temps, i la distància recorreguda és velocitat per temps. La corba $\dfrac{340}{t}$ de la gràfica no representa cap de les dues relacions.`,
      marca:   ['u6-a-trossos/data/full-3.png', 11.5, 0.0, 20.5, 9.2] },
    { lloc:    TEX`c)`,
      ondiu:   TEX`$f(t) = \dfrac{22{,}22}{t}$ \quad i \quad $g(t) = \dfrac{22{,}22t}{t} = 22{,}22$`,
      hadedir: TEX`$v(t) = 22{,}22$ \quad i \quad $d(t) = 22{,}22t$`,
      motiu:   TEX`La mateixa errada que als apartats a) i b).`,
      marca:   ['u6-a-trossos/data/full-3.png', 11.5, 33.4, 24.5, 9.0] },
  ],

  'apl-ud7/U6.112': [
    { ondiu:   TEX`$0{,}10x$ \quad si $400 \le x < 900$`,
      hadedir: TEX`$0{,}10x$ \quad si $400 \le x < 990$`,
      motiu:   TEX`El cartell diu «$400$ € – $990$ €». Amb $900$, els pedidos d’entre $900$ i $990$ € quedarien sense preu.`,
      marca:   ['u6-a-trossos/data/full-5.png', 25.0, 37.9, 16.5, 2.8] },
  ],

  'apl-ud7/U7.90': [
    { ondiu:   TEX`a) $y = 32 + \dfrac{180}{100}x$ \quad b) $y = 273{,}15 + x$`,
      hadedir: TEX`a) $y = 273{,}15 + x$ \quad b) $y = 32 + \dfrac{180}{100}x$`,
      motiu:   TEX`L’apartat a) demana passar de Celsius a Kelvin, i el b), de Celsius a Fahrenheit: les dues funcions estan intercanviades.`,
      marca:   ['u7-situacions/data/full-3.png', 56.5, 39.6, 30.5, 7.4] },
    { ondiu:   TEX`$x = 301{,}39375$ °C $\to$ $y = 574{,}54375$`,
      hadedir: TEX`$x = 301{,}4375$ °C $\to$ $y = 574{,}5875$`,
      motiu:   TEX`$0{,}8x = 241{,}15 \to x = \dfrac{241{,}15}{0{,}8} = 301{,}4375$, i $273{,}15 + 301{,}4375 = 574{,}5875$.`,
      marca:   ['u7-situacions/data/full-3.png', 56.5, 91.2, 37.0, 8.4] },
  ],

  'apl-ud7/U2.42': [
    { ondiu:   TEX`$1{,}05^3 = 1{,}158 \to C_f = 3\,531{,}90$ €, \; $I = 481{,}90$ €`,
      hadedir: TEX`$1{,}05^3 = 1{,}157625 \to C_f = 3\,530{,}76$ €, \; $I = 480{,}76$ €`,
      motiu:   TEX`Arrodonir $1{,}05^3$ a tres decimals fa una diferència d’$1{,}14$ €.`,
      marca:   ['u2-activitats/data/full-1.png', 53.5, 8.8, 26.0, 8.0] },
  ],

  'apl-ud7/U2.43': [
    { enunciat: 1,
      lloc:    TEX`b)`,
      ondiu:   TEX`«Quants diners obtindrem al cap d’uns altres 5 anys?» $\to$ $1\,126{,}23\cdot 1{,}2167 = 1\,370{,}28$ €`,
      hadedir: TEX`Si són 5 anys més (10 en total): $1\,126{,}23\cdot 1{,}04^{10} \approx 1\,667{,}09$ €. Si són els mateixos 5 anys: $1\,126{,}23 + 244 = 1\,370{,}23$ €.`,
      motiu:   TEX`«Uns altres 5 anys» fa pensar en 10 anys en total, però la solució calcula els 5 primers. A més, $1\,370{,}28$ surt d’arrodonir $1{,}04^5$ a $1{,}2167$.`,
      marca:   [['u2-activitats/data/full-1.png', 54.0, 28.4, 18.0, 4.2],
                ['u2-activitats/data/full-1.png', 56.0, 57.4, 28.5, 3.2]] },
  ],

  'apl-ud7/U2.110': [
    { ondiu:   TEX`$10\,000\cdot 1{,}06^{\frac{1}{12}} = 10\,048$ € \; i, al final, $10\,461{,}70$ €`,
      hadedir: TEX`$10\,000\cdot 1{,}06^{\frac{1}{12}} = 10\,048{,}68$ € \; i, al final, $10\,048{,}68\cdot 1{,}045^{\frac{11}{12}} = 10\,462{,}42$ €`,
      motiu:   TEX`El capital del primer mes s’ha truncat a $10\,048$ €: la diferència final és de $0{,}72$ €.`,
      marca:   [['u2-interes/data/full-1.png', 11.5, 91.6, 26.5, 3.4],
                ['u2-interes/data/full-1.png', 56.5, 15.6, 31.0, 3.8]] },
  ],

  /* ── 4t ESO Aplicades · UD8 · Estadística (Santillana U8) ─────────────── */

  'apl-ud8/U8.7': [
    { ondiu:   TEX`$\bar{x} = \dfrac{10\cdot 2{,}5 + 12\cdot 7{,}5 + 37\cdot 12{,}5 + 21\cdot 12{,}5}{80}$`,
      hadedir: TEX`$\bar{x} = \dfrac{10\cdot 2{,}5 + 12\cdot 7{,}5 + 37\cdot 12{,}5 + 21\cdot 17{,}5}{80} = \dfrac{945}{80} = 11{,}81$`,
      motiu:   TEX`La marca de classe de $[15, 20)$ és $17{,}5$. El resultat, $11{,}81$, és correcte: l’errada és només a la fórmula.`,
      marca:   ['u8-activitats/data/full-3.png', 60.4, 84.2, 26.5, 3.4] },
  ],

  'apl-ud8/U8.9': [
    { lloc:    TEX`a)`,
      ondiu:   TEX`$Me = 6$`,
      hadedir: TEX`$Me = \dfrac{6 + 8}{2} = 7$`,
      motiu:   TEX`Hi ha $18$ dades: la mediana és la mitjana de la $9$a i la $10$a. La $9$a val $6$ ($F = 9$) i la $10$a, $8$.`,
      marca:   ['u8-activitats/data/full-4.png', 58.2, 3.2, 8.0, 2.8] },
    { lloc:    TEX`b)`,
      ondiu:   TEX`$f_i = 6,\ 9,\ 14,\ 20$; \ $N = 49$; \ $\bar{x} = 37{,}19$; \ interval modal $[45, 60)$`,
      hadedir: TEX`$f_i = 6,\ 3,\ 5,\ 6$; \ $N = 20$; \ $\bar{x} = \dfrac{615}{20} = 30{,}75$; \ dos intervals modals, $[0, 15)$ i $[45, 60)$; \ interval medià $[30, 45)$`,
      motiu:   TEX`La taula de l’enunciat dona les freqüències acumulades $F_i$, no les absolutes: $f_i = F_i - F_{i-1}$.`,
      marca:   ['u8-activitats/data/full-4.png', 55.8, 7.4, 38.0, 31.4] },
  ],

  'apl-ud8/U8.10': [
    { lloc:    TEX`b)`,
      ondiu:   TEX`$F_i$: \quad $2$ \quad $10$ \quad $22$ \quad $32$`,
      hadedir: TEX`$F_i$: \quad $4$ \quad $12$ \quad $24$ \quad $34$`,
      motiu:   TEX`Amb $f_i = 4, 8, 12, 10$ (el gràfic i la mateixa taula), les acumulades són $4, 12, 24, 34$. La mitjana, $\dfrac{294}{34} = 8{,}65$, és correcta.`,
      marca:   ['u8-activitats/data/full-5.png', 41.0, 14.6, 6.0, 11.6] },
  ],

  'apl-ud8/U8.35': [
    { ondiu:   TEX`$H_i$: $0{,}334$; $0{,}401$; $0{,}501$… \quad c) $43{,}2\,\%$ \quad d) $49{,}9\,\%$`,
      hadedir: TEX`$H_i$: $0{,}333$; $0{,}4$; $0{,}5$… \quad c) $\dfrac{13}{30} = 43{,}3\,\%$ \quad d) $\dfrac{15}{30} = 50\,\%$`,
      motiu:   TEX`Les $H_i$ s’han fet sumant les $h_i$ arrodonides, i l’error s’acumula. Cal calcular $H_i = \dfrac{F_i}{N}$.`,
      marca:   [['u8-taules/data/full-2.png', 83.2, 7.5, 5.4, 8.0],
                ['u8-taules/data/full-2.png', 61.8, 37.2, 33.0, 7.6]] },
  ],

  'apl-ud8/U8.48': [
    { ondiu:   TEX`$h_i$: $0{,}1$; $0{,}06$; $0{,}06$; $0{,}08$; $0{,}06$… \quad i \quad $H_i$: $0{,}1$; $0{,}16$; $0{,}222$…`,
      hadedir: TEX`$h_i = \dfrac{f_i}{1\,030}$: $0{,}097$; $0{,}058$; $0{,}068$; $0{,}078$; $0{,}068$; $0{,}097$; $0{,}117$; $0{,}107$; $0{,}078$; $0{,}068$; $0{,}087$; $0{,}078$`,
      motiu:   TEX`El total és $N = 1\,030$ cotxes. Les $h_i$ del solucionari no són $\dfrac{f_i}{1\,030}$ ni $\dfrac{f_i}{1\,000}$ (al març i al maig, amb $f = 70$, hi posa $0{,}06$), i les $H_i$ tampoc no quadren.`,
      marca:   ['u8-taules/data/full-5.png', 81.6, 63.0, 12.8, 35.6] },
  ],

  'apl-ud8/U8.51': [
    { lloc:    TEX`l’histograma de freqüències acumulades`,
      ondiu:   TEX`Barres d’altura $6$, $16$, $28$, $36$ i $40$`,
      hadedir: TEX`Barres d’altura $3$, $8$, $14$, $18$ i $20$`,
      motiu:   TEX`Són les $F_i$ de la taula. Les barres del gràfic fan el doble.`,
      marca:   ['u8-taules/data/full-6.png', 56.5, 16.2, 34.0, 18.0] },
  ],

  'apl-ud8/U8.59': [
    { lloc:    TEX`b)`,
      ondiu:   TEX`$\bar{x} = \dfrac{10 + 6 + 24 + x_4\cdot 3}{28}$`,
      hadedir: TEX`$\bar{x} = \dfrac{10 + 6 + 24 + x_4\cdot 3}{14}$`,
      motiu:   TEX`$N = 5 + 2 + 4 + 3 = 14$. A la línia següent ja hi ha $14$, i el resultat, $x_4 = 10$, és correcte.`,
      marca:   ['u8-parametres/data/full-1.png', 72.0, 33.2, 3.8, 2.8] },
  ],

  'apl-ud8/U8.60': [
    { lloc:    TEX`b)`,
      ondiu:   TEX`$5, 5, 6, 6, 6, 7, 7, 8, 8$`,
      hadedir: TEX`$10$ dades, per exemple: $5, 5, 6, 6, 6, 6, 7, 7, 8, 8$`,
      motiu:   TEX`L’enunciat demana $10$ dades, i l’exemple en té $9$.`,
      marca:   ['u8-parametres/data/full-1.png', 56.5, 62.0, 25.0, 2.8] },
  ],

  'apl-ud8/U8.81': [
    { lloc:    TEX`a) i b)`,
      ondiu:   TEX`$1\cdot 1{,}20 + 6\cdot 1{,}50 + 19\cdot 1{,}80 + 7\cdot 2{,}10 = 59{,}10$ € \quad b) $\dfrac{59{,}10}{40{,}75} = 1{,}45$ €/kg`,
      hadedir: TEX`$0{,}25\cdot 1{,}20 + 4{,}5\cdot 1{,}50 + 23{,}75\cdot 1{,}80 + 12{,}25\cdot 2{,}10 = 75{,}53$ € \quad b) $\dfrac{75{,}53}{40{,}75} = 1{,}85$ €/kg`,
      motiu:   TEX`El preu és per quilo: cal multiplicar-lo pels quilos de cada classe ($f_i\cdot x_i$), no pel nombre de coliflors. (Amb els pesos exactes, $75{,}08$ € i $1{,}84$ €/kg.)`,
      marca:   ['u8-informacio/data/full-2.png', 11.5, 19.6, 30.0, 11.6] },
    { lloc:    TEX`e)`,
      ondiu:   TEX`$1\cdot 1{,}50 + 10\cdot 1{,}80 + 17\cdot 2{,}10 + 5\cdot 2{,}40 = 67{,}20$ €; \ $1{,}24$ €/kg. «No s’incrementa el preu mitjà per quilo.»`,
      hadedir: TEX`$0{,}75\cdot 1{,}50 + 12{,}5\cdot 1{,}80 + 29{,}75\cdot 2{,}10 + 11{,}25\cdot 2{,}40 = 113{,}10$ €; \ $\dfrac{113{,}10}{54{,}25} = 2{,}08$ €/kg. El preu mitjà per quilo sí que augmenta.`,
      motiu:   TEX`La mateixa errada que a l’apartat a): el preu és per quilo. Ara les coliflors pesen més i passen a classes més cares.`,
      marca:   ['u8-informacio/data/full-2.png', 11.5, 66.0, 30.0, 13.0] },
  ],

  'apl-ud8/U8.83': [
    { lloc:    TEX`l’eix de l’histograma`,
      ondiu:   TEX`$\ldots\ 15 \quad 17 \quad 21 \quad 19 \quad 23$`,
      hadedir: TEX`$\ldots\ 15 \quad 17 \quad 19 \quad 21 \quad 23$`,
      motiu:   TEX`Les etiquetes $19$ i $21$ estan intercanviades.`,
      marca:   ['u8-informacio/data/full-3.png', 37.8, 45.2, 6.0, 2.4] },
  ],

  'apl-ud8/U8.84': [
    { enunciat: 1,
      lloc:    TEX`l’enunciat`,
      ondiu:   TEX`«$30$ marques d’aigua embotellada», i hi ha $33$ dades`,
      hadedir: TEX`«$33$ marques d’aigua embotellada»`,
      motiu:   TEX`La llista té tres files d’$11$ dades, i la solució treballa amb $N = 33$.`,
      marca:   ['u8-informacio/data/full-3.png', 11.4, 74.6, 10.6, 2.6] },
    { ondiu:   TEX`$F_1 = 10$`,
      hadedir: TEX`$F_1 = 9$`,
      motiu:   TEX`La primera classe té $f_1 = 9$ dades; la resta de la columna ($24$, $32$, $33$) és correcta.`,
      marca:   ['u8-informacio/data/full-3.png', 78.4, 35.2, 3.4, 2.6] },
  ],

  'apl-ud8/U8.85': [
    { enunciat: 1,
      lloc:    TEX`les taules de l’enunciat`,
      ondiu:   TEX`$14$ parelles de notes`,
      hadedir: TEX`$15$ parelles: hi falta la parella A $= 6$, B $= 6$`,
      motiu:   TEX`L’enunciat parla de $15$ persones. El diagrama de dispersió de la solució té el punt $(6, 6)$, i els apartats c) i e) el fan servir.`,
      marca:   ['u8-informacio/data/full-4.png', 10.0, 20.4, 23.5, 12.4] },
  ],

  /* ── 4t ESO Aplicades · UD9 · Atzar i decisions (Santillana U9) ───────── */

  'apl-ud9/U9.42': [
    { lloc:    TEX`«únicament 3 cavalls»`,
      ondiu:   TEX`$\dfrac{4}{40}\cdot\dfrac{4}{40}\cdot\dfrac{4}{40} = 0{,}001$ \quad i \quad $\dfrac{4}{40}\cdot\dfrac{3}{39}\cdot\dfrac{2}{38} = 0{,}0004$`,
      hadedir: TEX`Amb reemplaçament: $4\cdot\left(\dfrac{1}{10}\right)^3\cdot\dfrac{9}{10} = 0{,}0036$. \ Sense: $4\cdot\dfrac{4}{40}\cdot\dfrac{3}{39}\cdot\dfrac{2}{38}\cdot\dfrac{36}{37} \approx 0{,}0016$`,
      motiu:   TEX`Es treuen $4$ cartes i han de ser cavalls exactament $3$: la quarta no ho ha de ser, i aquesta carta pot sortir en $4$ posicions. La solució calcula la probabilitat que $3$ cartes seguides siguin cavalls.`,
      marca:   ['u9-activitats/data/full-9.png', 10.0, 2.4, 37.5, 12.4] },
  ],

  'apl-ud9/U9.76': [
    { lloc:    TEX`b)`,
      ondiu:   TEX`«Pelo rubio»: $P = 0{,}46$`,
      hadedir: TEX`«Pelo moreno»: $P = 0{,}46$`,
      motiu:   TEX`L’enunciat parla dels joves amb els cabells morens.`,
      marca:   ['u9-probabilitat/data/full-1.png', 57.5, 48.2, 21.5, 2.8] },
  ],

  'apl-ud9/U9.88': [
    { lloc:    TEX`c)`,
      ondiu:   TEX`$P(C) = \dfrac{6}{8} = 0{,}75$`,
      hadedir: TEX`$P(C) = \dfrac{7}{8} = 0{,}875$`,
      motiu:   TEX`«Com a màxim dues creus» és tot menys «tres creus»: $1 - \dfrac{1}{8} = \dfrac{7}{8}$.`,
      marca:   ['u9-probabilitat/data/full-5.png', 10.0, 10.6, 18.5, 4.4] },
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
