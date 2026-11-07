/* ═══════════════════════════════════════════════════════════════════════
   LES PISTES
   ───────────────────────────────────────────────────────────────────────
   Una línia per pista. La clau és   'unitat/exercici'   i el valor, el text
   que veurà l'alumne quan premi el botó 💡.

     'apl-u4/24': 'Substitueix <i>x</i> = 2 i <i>y</i> = −1 a cada equació...',
     'apl-u4/SA1': 'Fixa\'t en quantes nits dormiràs a l\'hotel...',

   Un exercici sense línia aquí simplement no mostra cap botó de pista: no
   cal escriure-hi res ni deixar-la buida.

   L'apòstrof s'ha d'escapar amb barra invertida:  d\'una  ,  fixa\'t
   (o fes servir l'apòstrof tipogràfic ’, que no cal escapar).

   Format: només <i>, <b> i <br>. L'estil de les pistes és a CLAUDE.md.

   Es pot editar des del mòbil: GitHub → hints.js → llapis → Commit changes.
   ═══════════════════════════════════════════════════════════════════════ */

const PISTES = {

  /* ── 4t ESO Aplicades · Unitat 4 · Sistemes d'equacions i inequacions ── */

};

function pistaDe(u, n){
  const t = PISTES[u + '/' + n];
  return t ? t : null;
}
