# Exercicis propis — 4t d'ESO

Web estàtica, publicada amb Cloudflare Pages des de GitHub. No hi ha servidor ni base de dades:
HTML, CSS i JavaScript sense compilació.

És el germà de `sol` (Matemàtiques II, 2n de Batxillerat): funciona igual, amb una diferència, que
aquí hi ha **dues matèries** de 4t d'ESO:

| Matèria | Prefix | Exemple d'unitat |
|---|---|---|
| Matemàtiques Aplicades | `apl` | `apl-u4` (unitat 4) |
| Matemàtiques Acadèmiques | `aca` | `aca-u2` (unitat 2) |

L'alumne navega **matèria → unitat → tasca → exercici**. Una *tasca* és una setmana de feina: una
llista ordenada d'exercicis amb una data límit. Si només hi ha una matèria (o una unitat) amb tasques
visibles, la portada hi entra directament.

**Estat (novembre de 2026):** Aplicades, unitat 4 (*Sistemes d'equacions i inequacions*): imatges i
catàleg sencers. Falten les setmanes (`tasques.js`) i les pistes. Vegeu `TODO.md`.

## Com programo la feina

Edita **`tasques.js`**.

```js
const TASQUES = [
  { unitat:'apl-u4', setmana:1, limit:'2026-11-29', exercicis:[24, 25, 26, 32, 39] },
  { unitat:'apl-u4', setmana:2, limit:'2026-12-06', exercicis:[62, 63, 64, 70, 'SA1'] },
];
```

**L'ordre mana.** Els exercicis es mostren tal com els escrius, encara que no estiguin ordenats per
número i encara que siguin de parts diferents del llibre.

Afegir una setmana és **una línia**. No cal crear cap carpeta ni cap fitxer.

Es pot fer des del mòbil: GitHub → `tasques.js` → llapis → *Commit changes*.

### Els exercicis que no tenen número

Al llibre hi ha coses que no tenen número d'exercici, o en tenen un que es repeteix (1, 2, 3…). Al
catàleg porten una clau de text, i a `tasques.js` s'escriuen **entre cometes**:

| Clau | Què és | L'alumne veu |
|---|---|---|
| `'R1'`, `'R2'` | Reptes de l'inici de la unitat | Repte 1 |
| `'FN'` | Fake news | Fake news |
| `'SA1'`, `'SA2'`… | Situació d'aprenentatge | Situació 1 |
| `'AV1'`, `'AV2'`… | Autoavaluació | Autoav. 1 |

```js
exercicis:[80, 81, 'FN', 'SA1', 'AV3']
```

### Barrejar unitats

Per a una setmana de repàs, un exercici d'una altra unitat porta el prefix i dos punts:

```js
exercicis:[112, 113, 'apl-u3:44', 120]
```

### Quan es fa visible una tasca

Per defecte s'obre **uns dies abans** de la data límit (`DIES_ABANS`, a dalt de `tasques.js`). Un cop
oberta ja no es tanca: passada la data segueix consultable i surt marcada com a vençuda. Per tasca:

```js
obre:'2026-11-20'     // s'obre aquest dia concret
visible:'sempre'      // visible ja, passi el que passi
visible:'mai'         // amagada, per preparar-la amb antelació
```

**Vista prèvia:** obre `index.html?tot=1` per veure totes les tasques, també les que encara no toquen.
L'`?tot=1` es manté en passar a les tasques i tornar. Els alumnes no ho saben.

## Estructura

```
index.html      ← portada: matèries → unitats → tasques
tasca.html      ← visor genèric d'una tasca. Es governa per l'adreça: #apl-u4/s1
errades.html    ← totes les errades del solucionari, per setmanes (les publicades; amb ?tot=1, totes)
tasques.js      ← LA PROGRAMACIÓ
cataleg.js      ← matèries, unitats i fitxa de cada exercici (títol, dificultat, imatges). Es manté a mà
hints.js        ← LES PISTES (una línia per pista; s'edita a mà)
errades.js      ← LES ERRADES DEL SOLUCIONARI (ara buit; el sistema és el de sol). Vegeu ERRADES.md
marca.js        ← eina del professor per marcar on és una errada (tasca.html?tot=1&marca=1)
pegats/         ← trossos de pàgina ja corregits que es posen a sobre de les imatges (ara buit)
progres.js      ← les creuetes de "fet" de l'alumne (al seu navegador)
README.md       ← aquest fitxer
CLAUDE.md       ← instruccions per a Claude (flux per afegir una unitat, estil de les pistes)
ERRADES.md      ← com funcionen les errades del solucionari
TODO.md         ← feina pendent
LLICENCIA.md, LICENSE
assets/
  style.css     ← compartit per totes les pàgines (el mateix de sol, amb el bloc final de clicables)
  icon.png
  katex/        ← KaTeX: pinta les fórmules de les errades (no s'hi toca res)
apl-u4/                      ← Aplicades, unitat 4
  activitats/data/full-1.png … full-15.png       activitats del tema (1–23) i reptes
  sistemes/data/…            activitats finals, apartat 1 (24–49)
  inequacions/data/…         apartat 2 (50–61)
  problemes/data/…           apartat 3 (62–79)
  fake-news/data/…           fake news
  problemes-diferents/data/… problemes aparentment diferents (80–85)
  situacio/data/…            situació d'aprenentatge (SA1–SA3)
  autoavaluacio/data/…       autoavaluació (AV1–AV6)
eines/
  retalla.py, retalls.json   ← fan les imatges d'una unitat a partir del PDF de source/
  comprova.js                ← les proves (també les passa GitHub a cada canvi)
  optimitza_png.py           ← comprimeix les imatges sense cap pèrdua
source/         ← el PDF del solucionari (Santillana, Matemáticas 4 ESO Opción A)
_uploads/       ← on es pugen els ZIP (el workflow els descomprimeix)
.github/workflows/unzip-upload.yml ← descomprimeix els ZIP de _uploads/ i en fa commit
.github/workflows/comprova.yml     ← passa eines/comprova.js a cada canvi
```

`cataleg.js` és el que permet que una tasca agafi exercicis d'on sigui: hi ha el títol, la dificultat
i les imatges de cada exercici, un sol cop. Les tasques només guarden les claus.

## Les pistes dels exercicis

Cada exercici pot tenir, opcionalment, una pista curta: un cop de mà cap al mètode, no la solució
feta. Totes viuen a **`hints.js`**, una línia per pista, amb la clau `'unitat/exercici'`:

```js
const PISTES = {
  'apl-u4/24': 'Substitueix <i>x</i> = 2 i <i>y</i> = −1 a cada equació i mira si es compleix la igualtat.',
  'apl-u4/SA1': 'Compta primer quantes nits dormiràs a l\'hotel.',
};
```

- **Afegir una pista és afegir una línia.** Esborrar-la és esborrar la línia.
- **Exercici sense línia = sense botó.**
- **Compte amb els apòstrofs:** dins d'un text entre cometes simples s'han d'escapar (`d\'una`), o
  escriu l'apòstrof tipogràfic (’), que no cal escapar.
- Només es poden fer servir `<i>`, `<b>` i `<br>`. `eines/comprova.js` ho comprova.
- La pista surt a la **llista d'exercicis de la tasca**, amb un botó 💡 *Veure pista*, abans que
  l'alumne obri la solució.
- L'estil (què diu i què no diu una pista) és a `CLAUDE.md`.

## Les errades del solucionari

El solucionari té errades. Les dels exercicis programats van a **`errades.js`**, amb la mateixa clau
que les pistes. El sistema és el de `sol`, sencer: avís a la llista de la tasca, targeta «On diu /
Ha de dir» dins de l'exercici, requadre vermell sobre la imatge (`marca`) i, si es fa, la imatge ja
corregida (`pegat`). Ara és buit. Com s'escriuen: `ERRADES.md`.

## Les proves

```bash
node eines/comprova.js
```

Comprova que cada unitat i matèria existeixen, que cada fitxa té imatges i que les imatges hi són,
que les tasques només fan servir exercicis del catàleg i tenen dates vàlides, que les pistes tenen
el format bo i que les errades apunten a exercicis i imatges que existeixen. GitHub la passa sola a
cada canvi (Actions → *Comprova el web*): si surt en vermell, alguna dada no quadra.

<!-- atribucio-centre:inici -->

---

Material desenvolupat per **David Arso Civil** per al Departament de Matemàtiques de l'INS Miquel Tarradell.
Contingut sota CC BY-NC-ND 4.0, codi sota llicència MIT. Vegeu [`LLICENCIA.md`](LLICENCIA.md).

<!-- atribucio-centre:final -->
