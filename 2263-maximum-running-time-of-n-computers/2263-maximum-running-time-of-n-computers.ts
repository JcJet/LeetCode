function maxRunTime(n: number, batteries: number[]): number {
    let res = 0;
    const computers: number[] = [];
    const m = batteries.length;

    // init

    batteries.sort((x, y)=>(y-x)); //sort desc. 
    for(let i=0; i<n; i++){
        computers[i] = batteries[i];
    }

    let remaining = 0;
    for(let i=n; i<m; i++){
        remaining += batteries[i];
    }

    let i = n-1;
    while(remaining>0){
        const count = n-i;
        if(i===0){
            computers[i] += Math.floor(remaining/count);
            remaining = 0;
        }else{
            const diff = computers[i-1] - computers[i];
            const need = diff * count;
            if(need<=remaining){
                remaining -= need;
                computers[i] += diff;
                i-=1;
            }else{
                computers[i] += Math.floor(remaining/count);
                remaining = 0;
            }
        }

    }
    
    return computers[i];
};