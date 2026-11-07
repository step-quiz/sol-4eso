# Les eines

Totes s'executen des de l'arrel del repo. **Cap eina toca el repo si no li ho dius:** sense
`--escriu`, el que fan va a `eines/sortida/` (que no es puja a GitHub).

| Eina | Què fa |
|---|---|
| `comprova.js` | Les proves: catàleg, imatges, tasques, pistes i errades. GitHub la passa a cada canvi |
| `retalla.py` + `retalls.json` | Fa les imatges de les pàgines d'una unitat a partir del PDF de `source/` |
| `optimitza_png.py` | Comprimeix les imatges sense cap pèrdua (només si el resultat és idèntic píxel a píxel) |

## Què cal

- Node (per a `comprova.js`). No cal instal·lar res més.
- Python 3.10 o més nou i `pip install -r eines/requisits.txt` (per a `retalla.py` i `optimitza_png.py`).
- `pdftoppm` (paquet `poppler-utils`) per a `retalla.py`.

## Les ordres

```
node eines/comprova.js                       # passa les proves

python3 eines/retalla.py apl-u4              # fa les imatges a eines/sortida/apl-u4/ (per mirar-les)
python3 eines/retalla.py apl-u4 --escriu     # ... i les escriu a apl-u4/<tema>/data/full-K.png

python3 eines/optimitza_png.py               # comprimeix totes les imatges del web
```

## Com es fan les imatges (`retalls.json`)

Per a cada unitat: el PDF, la **caixa** del retall i, per a cada tema (carpeta), les **pàgines del PDF**
(no del llibre: a aquest PDF, pàgina del PDF = pàgina del llibre + 1) que hi van, en ordre. La primera
pàgina de la llista és `full-1.png`, la segona `full-2.png`… Una pàgina amb exercicis de dos temes va a
les dues llistes.

La caixa `[40, 270, 1930, 2680]` (en píxels a 300 ppp) treu la capçalera «SOLUCIONARIO» i el número de
pàgina, i deixa tot el text, tant a les pàgines parells com a les senars. L'eina tria la resolució perquè el
retall faci just **1208 px** d'amplada (unes 192 ppp): així la imatge no es redimensiona i pesa la meitat.
També treu el blanc sobrant de sota i avisa si hi ha tinta tallada a les vores.

**Atenció:** si es tornen a fer les imatges d'una unitat amb una altra caixa, les marques i els pegats
d'errades d'aquella unitat deixen de valer.

## Les errades

Les eines de `sol` per a les errades (conversor, localitzador i pegats) no hi són encara. Vegeu
`ERRADES.md`, apartat 6.
