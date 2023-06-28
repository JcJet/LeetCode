function maxProbability(n: number, edges: number[][], succProb: number[], start: number, end: number): number {
const maxProb: number[] = []
    for(let i=0; i<n; i++){
        maxProb[i] = 0;
    }
    maxProb[start] = 1;

    let hasUpdate = true; 
    while(hasUpdate){
        hasUpdate = false;
        for(let j=0; j<edges.length; j++){
            const edge = edges[j];
            const a = edge[0];
            const b = edge[1];
            const prob = succProb[j];

            if(maxProb[a] * prob > maxProb[b]){
                maxProb[b] = maxProb[a] * prob;
                hasUpdate = true;
            }
            if(maxProb[b] * prob > maxProb[a]){
                maxProb[a] = maxProb[b] * prob;
                hasUpdate = true;
            }
        }
    }

    return maxProb[end]
};