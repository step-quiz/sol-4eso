# Les errades del solucionari: com funcionen

> **Per a qui és aquest document.** Per a una IA (Claude) o per al professor, quan calgui posar
> errades del solucionari al web. Abans llegeix `CLAUDE.md` i el `README.md`.
>
> **Estat (7 de novembre de 2026):** el sistema és el de `sol` (Matemàtiques II), copiat sencer i provat
> amb els identificadors d'aquest repositori (`apl-u4`). **Encara no hi ha cap errada**: `ERRADES` i
> `OBSERVACIONS` són buits. Els exemples d'aquest document (`u7/92`, `u9/42`…) són de `sol`; aquí la clau
> s'escriu `'apl-u4/24'`, i les imatges, `'sistemes/data/full-1.png'` (sense la carpeta de la unitat).

---

## 1. El que has de saber en un minut

- El web ensenya, per a cada exercici programat, la **imatge de la pàgina del solucionari** amb
  l'enunciat i la solució. El solucionari té errades.
- El sistema té **tres fases**, i cada una s'afegeix a l'anterior:

  | Fase | Què hi afegeix | Camp a `errades.js` |
  |---|---|---|
  | 1 | Un avís a la llista de la tasca i una targeta «On diu / Ha de dir» dins de l'exercici | `ondiu`, `hadedir`, `motiu`, `lloc`, `enunciat` |
  | 2 | Un requadre vermell numerat sobre la imatge, al lloc exacte de l'errada | `marca` |
  | 3 | Un «pegat»: la imatge es veu **ja corregida**, sense cap senyal, i l'errada deixa d'anunciar-se | `pegat` |

- **Les imatges de les pàgines no es toquen mai.** Tot el que es veu a sobre (requadres i pegats) ho
  posa el navegador.
- **Diferència amb `sol`:** allà `errades.js` es genera (`eines/conversor/genera.py`, a partir de `tex/`,
  `marques.json` i `pegats.json`). Aquí, de moment, **s'escriu a mà**, directament a `errades.js`.
  Vegeu l'apartat 6.

| Fitxer o carpeta | Paper |
|---|---|
| `errades.js` | Les dades (errades i observacions) **i** les funcions que les pinten. És l'únic que llegeix el web |
| `tasca.html` | On es veu tot: llista de la tasca, exercici, imatge ampliada |
| `errades.html` | Totes les errades, per setmanes |
| `assets/style.css` | Estils (classes `err-*`, `ex-err`, `marca*`, `pegat`, `lb-*`) |
| `assets/katex/` | KaTeX 0.16.47 en local: pinta les fórmules |
| `marca.js` | Eina del professor per marcar on és una errada (`tasca.html?tot=1&marca=1`) |
| `pegats/<unitat>/` | Els pegats: PNG petits amb el tros de pàgina ja corregit |

## 2. Fase 1 — L'avís i la targeta

### Les dades

```js
const ERRADES_MOTIU  = false;  // true: cada targeta ensenya també el «Motiu»
const ERRADES_OBS    = false;  // true: es veuen també les observacions
const ERRADES_PEGATS = true;   // fase 3 (apartat 6)
const TEX = String.raw;        // no es toca

const ERRADES = {
  'u9/42': [
    { lloc:    TEX`d), valor de $y'(2)$`,
      ondiu:   TEX`$y'(2)=80-60-20>0$`,
      hadedir: TEX`$y'(2)=80-60=20>0$`,
      motiu:   TEX`$y'(2)=5\cdot 2^4-15\cdot 2^2=80-60=20$. ...`,
      pegat:   ['creixement/data/full-3.png', 26.532, 21.037, 8.468, 1.524, '42-1a.png'],
      marca:   ['creixement/data/full-3.png', 12.3, 20.9, 22.8, 2.1] },
    { ... la segona errada del mateix exercici ... },
  ],
};
const OBSERVACIONS = { 'u1/42': [ { text: TEX`...` } ], ... };
```

| Camp | Obligatori | Què és |
|---|---|---|
| `ondiu` | sí | El que hi ha imprès |
| `hadedir` | sí | El que hi hauria de dir |
| `lloc` | no | L'apartat i, si cal, un detall: `f)`, `e), punt $x=1$` |
| `motiu` | no | L'explicació. Només es veu amb `ERRADES_MOTIU = true` |
| `enunciat: 1` | no | L'errada és a l'**enunciat**, no a la solució (n'hi ha 2: `u10/38` i `u2/95`) |
| `marca` | no | Fase 2 |
| `pegat` | no | Fase 3 |

### Com s'escriu el text

- Sempre `TEX` i accents greus. Així el LaTeX es copia tal qual, sense doblar cap barra.
- Les fórmules, entre `$...$`. Hi ha definides `\dlim` i `\R`, com a `defs.tex`.
- Fora dels dòlars és text normal i només s'hi entenen `\quad`, `\;` i `\,`.
- Dins del text no hi pot haver **cap accent greu** ni la parella `${`.
- KaTeX pinta **en vermell** el que no entén: després de tocar res, mira que no n'hi hagi.

### KaTeX

És en local (`assets/katex/`, versió **0.16.47**) perquè el web no depèn de cap servidor de
fora. **No l'actualitzis:** `errades.js` enganxa la puntuació que toca una fórmula (coma,
punt, cometes) dins del codi que genera KaTeX, perquè al mòbil no quedi sola a la línia
següent. Això depèn de com és per dins aquesta versió (constants `_KATEX_FI` i
`_KATEX_TROS`); la 0.17 i les següents canvien l'estructura.

### On es veu

- **A la llista de la tasca:** una etiqueta vermella al costat del botó «Veure solució»
  («2 errades al solucionari»). Les errades d'enunciat hi surten senceres, en un bloc
  «L'enunciat té una errada», perquè l'alumne les ha de saber abans de començar.
- **Dins de l'exercici:** just abans de la imatge (`#err-wrap`), una targeta «On diu / Ha de
  dir» per errada. En obrir l'exercici la pàgina puja a dalt de tot perquè es vegin.

### Les funcions d'`errades.js`

| Funció | Què torna |
|---|---|
| `erradesDe(u, n)` | La llista d'errades de l'exercici |
| `observacionsDe(u, n)` | Les observacions (buit si l'interruptor és apagat) |
| `avisErrades(u, n)`, `htmlAvisErrades(u, n)` | El text i l'HTML de l'etiqueta de la llista |
| `htmlErradesEnunciat(u, n)` | El bloc de les errades d'enunciat, per a la llista |
| `htmlErrades(u, n)` | Les targetes de dins de l'exercici (i les observacions) |
| `htmlErradaSola(u, n, k)` | La targeta d'una sola errada (per al peu de la imatge ampliada) |
| `marquesDe(e)`, `htmlMarques(u, n, img)` | Fase 2 |
| `pegatsDe(e)`, `htmlPegats(u, img)` | Fase 3 |
| `texAHtml(s)`, `preparaFormules()` | Text amb fórmules → HTML |

`tasca.html` comprova que existeixin (`AMB_ERRADES`, `AMB_MARQUES`, `AMB_PEGATS`): si
`errades.js` o KaTeX no carreguen, el web funciona igual, sense errades.

---

## 3. Fase 2 — El requadre sobre la imatge

```js
marca: ['limits-punt/data/full-4.png', 58.9, 64.5, 34.7, 4.3],        // un lloc
marca: [['continuitat/data/full-2.png', 61.9, 7.1, 23.6, 2.8],        // dos llocs
        ['continuitat/data/full-2.png', 61.9, 16.2, 9.1, 2.2]],
```

La imatge (escrita igual que a `cataleg.js`, sense la unitat) i un rectangle en **tant per
cent de la imatge**: `x`, `y` (cantó de dalt a l'esquerra), amplada i alçada. En tant per
cent perquè la imatge es veu a mides diferents segons la pantalla.

**Què es veu.** Sobre la imatge, un requadre vermell amb un número (el de la targeta). En
tocar-lo, o en prémer «Mostra-ho a la imatge» a la targeta, la imatge s'amplia centrada en
aquell punt i la correcció surt a sota (`#lb-peu`). Escape tanca.

**Com es troben les posicions.** A `sol`, amb la capa de text del PDF (on és cada lletra),
amb l'eina `eines/localitzador/proposa.py`, i revisant-les totes a ull. Aquí, de moment, amb l'eina
del professor. Una marca mal posada és pitjor que cap marca.

**Per marcar-ne una de nova** hi ha l'eina del professor: `tasca.html?tot=1&marca=1`. S'entra
a l'exercici, es tria l'errada, s'arrossega un rectangle sobre la imatge i l'eina dona la
línia `marca: [...]` per enganxar a `errades.js`. No desa res enlloc. (Si un dia `errades.js`
es genera, com a `sol`, la marca s'haurà de copiar també a `marques.json`.)

---

## 4. Fase 3 — El pegat

**La decisió és del professor (4 d'octubre de 2026):** vol que la pàgina *sembli corregida,
sense cap senyal*. Per això un pegat no porta vora ni número, i l'errada que en té deixa
d'anunciar-se.

```js
pegat: ['continuitat/data/full-2.png', 66.142, 78.632, 21.689, 1.755, '92-2a.png'],
pegat: [[...], [...], [...]],      // una errada pot necessitar més d'un pegat
```

Com `marca`, més el nom del fitxer, que és a `pegats/<unitat>/`.

- **El nom:** `92-2a.png` = exercici 92, **segona** errada de la seva llista, tros `a`.
- **El fitxer:** un retall de la pàgina, a la mateixa resolució que la imatge (un píxel del
  pegat és un píxel de la pàgina), amb 3 píxels de pàgina sense tocar al voltant.
- **Com es pinta:** `htmlPegats(u, img)` torna
  `<img class="pegat" src="pegats/u7/92-2a.png" style="left:..%;top:..%;width:..%;height:..%">`
  i `tasca.html` el posa dins de la figura, sobre la imatge, i també a la imatge ampliada
  (`#lb-pegats`). No atura els clics (`pointer-events:none`).
- **Quins pegats surten sobre una imatge:** **tots** els d'aquella imatge, siguin de
  l'exercici que siguin. La pàgina s'ha de veure corregida es miri des d'on es miri.

### Una errada amb pegat és una errada «callada»

Amb `ERRADES_PEGATS = true`, si una errada té `pegat` (`_callada(e)`):

- no compta a l'etiqueta de la llista,
- no té targeta,
- no té requadre vermell,
- i les errades que queden es tornen a numerar (`_numero`).

Dues excepcions pensades:

1. **Les errades d'enunciat s'anuncien igualment a la llista**, encara que tinguin pegat: el
   llibre de l'alumne continua tenint l'errada.
2. **A una imatge amb pegats no s'ofereix «Obre la imatge en nova pestanya»**, perquè
   s'obriria la imatge original, sense corregir.

Amb `ERRADES_PEGATS = false` no surt cap pegat i tot torna a ser com a la fase 2.

### Què hi ha dins d'un pegat

**Només canvien els signes equivocats.** Estan fets amb signes copiats de la mateixa pàgina
(la lletra del llibre de veritat, no una d'imitada), i la resta de la línia són els seus
píxels originals, desplaçats si el text nou fa una altra amplada. No es fa servir LaTeX. Com es fan, a `sol` (`ERRADES.md`, apartat 9, i `eines/pegats/`).

---

## 5. Què veu l'alumne, cas per cas

| L'errada… | Llista de la tasca | Dins de l'exercici | Imatge |
|---|---|---|---|
| té pegat | res | res | corregida, sense senyal |
| no té pegat | etiqueta vermella | targeta «On diu / Ha de dir» | requadre vermell numerat |
| és d'enunciat i té pegat | bloc «L'enunciat té una errada» | res | corregida, sense senyal |
| és d'enunciat i no té pegat | bloc «L'enunciat té una errada» | targeta | requadre vermell |
| qualsevol, amb `ERRADES_PEGATS = false` | com «no té pegat» | com «no té pegat» | original amb requadre |

Un exercici pot barrejar casos. Per exemple, `u9/67` té quatre errades: tres amb pegat i una
sense. Anuncia «1 errada al solucionari» i ensenya una sola targeta, amb el número 1.

---


## 6. Com s'hi afegeixen errades

**Ara (a mà).** A `errades.js`, dins de `const ERRADES = { … }`, a la llista del seu exercici i en l'ordre
en què surten a la solució:

```js
  'apl-u4/25': [
    { lloc:    TEX`a)`,
      ondiu:   TEX`$x+y=1$`,
      hadedir: TEX`$x+y=5$`,
      motiu:   TEX`...`,
      marca:   ['sistemes/data/full-1.png', 55.0, 18.0, 30.0, 4.0] },
  ],
```

La `marca` es fa amb l'eina `tasca.html?tot=1&marca=1` (arrossegant un rectangle sobre la imatge) i es mira
a la imatge ampliada. Després: `node eines/comprova.js`, obrir la tasca amb `?tot=1` i mirar que cap
fórmula surti en vermell, i pujar el número de `errades.js?v=` a `tasca.html` i `errades.html`.

**Quan n'hi hagi moltes, o es vulguin pegats.** Es copien de `sol` les eines (`eines/conversor/`,
`eines/localitzador/`, `eines/pegats/`, `eines/dades.py`, `eines/camins.py`) i la carpeta `tex/`, i
s'adapten:

- els identificadors: `genera.py` i `dades.py` busquen unitats amb l'expressió `u\d+` (`u7`); aquí són
  `apl-u4`, `aca-u2`;
- la relació setmana → unitat (`tex/errors-setmanaN.tex`), que aquí pot ser de dues matèries;
- el PDF de `source/` i la casació imatge ↔ pàgina (`localitzador/casa.json`): aquí la relació és a
  `eines/retalls.json`, i les imatges es fan amb una caixa fixa i la resolució triada perquè facin 1208 px
  d'amplada, cosa que la fa directa.

El llibre fa servir les mateixes lletres que el de `sol` (VectoraLTStd, MMa…), així que el motor de
pegats hauria de funcionar amb pocs canvis. **Un pegat mal fet és pitjor que cap pegat**: s'ha de mirar
ampliat, abans i després.

## 7. Regles

- No toquis les imatges `apl-uN/<tema>/data/full-K.png`.
- No actualitzis KaTeX (`errades.js` depèn de com és per dins la 0.16.47).
- No inventis posicions: una `marca` es fa amb l'eina i es mira ampliada.
- Si canvies el text d'una errada que té `pegat` i canvia el que ha de dir la pàgina, treu-li el pegat.
- Si canvies una imatge de pàgina (un altre retall o una altra mida), totes les marques i els pegats
  d'aquella imatge deixen de valer.
- Cap missatge de commit no pot portar `[skip ci]`, `[ci skip]` ni `[cf-pages-skip]`.
