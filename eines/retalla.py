#!/usr/bin/env python3
"""retalla.py — fa les imatges de les pàgines d'una unitat a partir del PDF del solucionari.

   Ús:  python3 eines/retalla.py apl-ud4              escriu a eines/sortida/apl-ud4/... (no toca el repo)
        python3 eines/retalla.py apl-ud4 --escriu     escriu a apl-ud4/<tema>/data/full-K.png

   Llegeix eines/retalls.json: quin PDF, quines pàgines van a cada tema i la caixa del retall.
   Cada pàgina es passa a 300 ppp, es retalla amb la caixa (sense la capçalera «SOLUCIONARIO»
   ni el número de pàgina), es treu el blanc sobrant de sota. La resolució es tria perquè el retall faci just
   1208 px d'amplada: la imatge no es redimensiona.

   Cal: pdftoppm (paquet poppler-utils) i  pip install pillow numpy
   Després, passa  python3 eines/optimitza_png.py  per comprimir-les sense pèrdua."""
import json, os, subprocess, sys, tempfile
import numpy as np
from PIL import Image

ARREL = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
AMPLADA = 1208
MARGE = 24          # píxels (a 300 ppp) de blanc que es deixen sota l'última línia

def pagina(pdf, n, carpeta, ppp=300):
    base = os.path.join(carpeta, 'p')
    subprocess.run(['pdftoppm', '-f', str(n), '-l', str(n), '-r', f'{ppp:.4f}', '-png', pdf, base],
                   check=True, stderr=subprocess.DEVNULL)
    f = [x for x in os.listdir(carpeta) if x.startswith('p-')][0]
    im = Image.open(os.path.join(carpeta, f)).convert('RGB')
    os.remove(os.path.join(carpeta, f))
    return im

def retalla(im, caixa, s):
    """`im` s'ha fet a 300·s ppp: la caixa (a 300 ppp) s'escala per s i fa just AMPLADA px d'ample.
    Així la imatge no es redimensiona: és el PDF fet directament a la mida final."""
    x0, y0 = round(caixa[0] * s), round(caixa[1] * s)
    x1, y1 = x0 + AMPLADA, round(caixa[3] * s)
    tros = im.crop((x0, y0, x1, y1))
    a = np.asarray(tros.convert('L')) < 240
    files = np.nonzero(a.sum(1))[0]
    if len(files):                                  # treu el blanc sobrant de sota
        tros = tros.crop((0, 0, tros.width, min(tros.height, files[-1] + round(MARGE * s))))
    # comprova que no quedi tinta tallada a les vores de la caixa
    vora = np.asarray(im.convert('L'))
    avis = []
    if (vora[y0:y1, max(0, x0 - 2):x0] < 200).any(): avis.append('esquerra')
    if (vora[y0:y1, x1:x1 + 2] < 200).any(): avis.append('dreta')
    return tros, avis

def main():
    if len(sys.argv) < 2:
        print(__doc__); sys.exit(1)
    u = sys.argv[1]; escriu = '--escriu' in sys.argv
    conf = json.load(open(os.path.join(ARREL, 'eines', 'retalls.json'), encoding='utf-8'))[u]
    pdf = os.path.join(ARREL, conf['pdf'])
    desti = ARREL if escriu else os.path.join(ARREL, 'eines', 'sortida')
    fetes = {}
    with tempfile.TemporaryDirectory() as tmp:
        for tema, pags in conf['temes'].items():
            dir_ = os.path.join(desti, u, tema, 'data'); os.makedirs(dir_, exist_ok=True)
            for k, n in enumerate(pags, 1):
                if n not in fetes:
                    s = AMPLADA / (conf['caixa'][2] - conf['caixa'][0])
                    fetes[n] = retalla(pagina(pdf, n, tmp, 300 * s), conf['caixa'], s)
                img, avis = fetes[n]
                img.save(os.path.join(dir_, f'full-{k}.png'), optimize=True)
                print(f'{u}/{tema}/data/full-{k}.png  ← pàgina {n} del PDF  {img.width}x{img.height}'
                      + (f'  ATENCIÓ: tinta tallada a la vora {", ".join(avis)}' if avis else ''))
    print('Escrit al repo.' if escriu else 'Escrit a eines/sortida/. Amb --escriu va al repo.')

if __name__ == '__main__':
    main()
