
/* ═══════════════════════════════════════════════════════════════════════
   EL PROGRÉS DE L'ALUMNE  —  no cal tocar res d'aquest fitxer
   ───────────────────────────────────────────────────────────────────────
   Les creuetes de "fet" es guarden al navegador de l'alumne, UNA CLAU PER
   UNITAT ('apl-u4-fet'), amb la llista de claus d'exercici (24, 'SA1'…).

   Es guarda per unitat i no per tasca a posta: així, si reorganitzes la
   programació a mig curs (mous un exercici d'una setmana a una altra, el
   repeteixes en una setmana de repàs...), la creueta va enganxada a
   l'exercici i l'alumne no perd res.

   Les claus es desen com a text ('24', 'SA1'): així hi caben els exercicis
   que no tenen número al llibre.
   ═══════════════════════════════════════════════════════════════════════ */

function _clau(u){ return u + '-fet'; }

function _llegeix(u){
  try{
    const raw = localStorage.getItem(_clau(u));
    return raw ? new Set(JSON.parse(raw).map(String)) : new Set();
  }catch(e){ return new Set(); }
}

function _desa(u, set){
  try{
    const llista = [...set].sort((a, b) => a.localeCompare(b, 'ca', {numeric: true}));
    localStorage.setItem(_clau(u), JSON.stringify(llista));
  }catch(e){}
}

/* ── API ──────────────────────────────────────────────────────────────── */

function esFet(u, n){ return _llegeix(u).has(String(n)); }

function marcaFet(u, n, fet){
  const set = _llegeix(u);
  if(fet) set.add(String(n)); else set.delete(String(n));
  _desa(u, set);
}

/* Quants exercicis d'una llista de refs {u,n} estan fets. */
function comptaFets(refs){
  let k = 0;
  refs.forEach(r => { if(esFet(r.u, r.n)) k++; });
  return k;
}
