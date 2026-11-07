#!/usr/bin/env python3
"""figura.py — retalla una figura (gràfica, taula, dibuix) del PDF per posar-la dins d'un enunciat.

   Ús:  python3 eines/figura.py apl-u4 34-1 109 40 120 230 300
                                 │      │   │   └──────────── rectangle en punts del PDF: x0 y0 x1 y1
                                 │      │   └──────────────── pàgina del PDF (no del llibre)
                                 │      └──────────────────── nom: 34-1 → apl-u4/enunciats/34-1.png
                                 └─────────────────────────── unitat (retalls.json diu quin PDF)
        ... --escriu     l'escriu al repo (sense, va a eines/sortida/apl-u4/enunciats/)

   Després, a enunciats.js:  fig: ['enunciats/34-1.png']

   Les coordenades són les de la capa de text del PDF (pdfplumber): x cap a la dreta i y cap avall,
   en punts (1/72 de polzada), i la pàgina fa uns 468 × 680 punts. Una manera de trobar-les: el
   rectangle de les paraules que hi ha al voltant de la figura (pdfplumber, extract_words).
   La figura surt a la mateixa escala que les imatges de les pàgines (1208 px d'amplada per a tota
   la caixa del retall), perquè es vegi igual de gran.

   Cal: pdftoppm (poppler-utils) i  pip install pillow"""
import json, os, subprocess, sys, tempfile
from PIL import Image

ARREL = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
AMPLADA = 1208

def main():
    args = [a for a in sys.argv[1:] if not a.startswith('--')]
    if len(args) != 7:
        print(__doc__); sys.exit(1)
    u, nom, pag = args[0], args[1], int(args[2])
    x0, y0, x1, y1 = map(float, args[3:7])
    conf = json.load(open(os.path.join(ARREL, 'eines', 'retalls.json'), encoding='utf-8'))[u]
    caixa = conf['caixa']                                  # a 300 ppp
    ppp = 300 * AMPLADA / (caixa[2] - caixa[0])            # la mateixa escala que les pàgines
    with tempfile.TemporaryDirectory() as tmp:
        subprocess.run(['pdftoppm', '-f', str(pag), '-l', str(pag), '-r', f'{ppp:.4f}', '-png',
                        os.path.join(ARREL, conf['pdf']), os.path.join(tmp, 'p')],
                       check=True, stderr=subprocess.DEVNULL)
        f = os.path.join(tmp, os.listdir(tmp)[0])
        im = Image.open(f).convert('RGB')
        s = ppp / 72
        tros = im.crop((round(x0 * s), round(y0 * s), round(x1 * s), round(y1 * s)))
    desti = ARREL if '--escriu' in sys.argv else os.path.join(ARREL, 'eines', 'sortida')
    carpeta = os.path.join(desti, u, 'enunciats'); os.makedirs(carpeta, exist_ok=True)
    sortida = os.path.join(carpeta, nom + '.png')
    tros.save(sortida, optimize=True)
    print(f'{os.path.relpath(sortida, ARREL)}  {tros.width}x{tros.height} px  (pàgina {pag} del PDF)')
    print("A enunciats.js:  fig: ['enunciats/" + nom + ".png']" if '--escriu' in sys.argv
          else 'Mira-la. Si és bona, torna-ho a fer amb --escriu.')

if __name__ == '__main__':
    main()
