function putMarbles(weights: number[], k: number): number {
    const pairs: number[] = [];
    const n = weights.length;

    for(let i=0; i<n-1; i++){
        const pair = weights[i] + weights[i+1];
        pairs.push(pair);
    }

    pairs.sort((x,y)=>x-y); // sort asc. 

    let minScore = weights[0] + weights[n-1]; 
    for(let i=0; i<k-1; i++){
        minScore += pairs[i];
    }

    let maxScore = weights[0] + weights[n-1]; 
    for(let i=0; i<k-1; i++){
        maxScore += pairs[n-2-i];
    }

    return maxScore - minScore

};