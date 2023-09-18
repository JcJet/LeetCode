
function kWeakestRows(mat: number[][], k: number): number[] {
     return mat
         .map((r,i)=>({solders:r.indexOf(0)===-1?  Number.MAX_SAFE_INTEGER:r.indexOf(0)+1,i}))
         .sort((a,b)=>a.solders-b.solders)
         .map(d=>d.i).slice(0,k)
};