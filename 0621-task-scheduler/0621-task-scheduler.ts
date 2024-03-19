function leastInterval(tasks: string[], n: number): number {
    
    let freqMap:{[key:string]:number} = {};
    let maxFreq:number = 0;
    let totalCount:number =0;

    for (let task of tasks){
        if(freqMap.hasOwnProperty(task)){
            freqMap[task] +=1;
        }else{
             freqMap[task] =1;
        }
        maxFreq = Math.max(freqMap[task],maxFreq);
        totalCount++;
    }

    let ans:number = (n+1)* (maxFreq-1);
    for(let key in freqMap){
        if(freqMap[key] === maxFreq){
            ans++;
        }
    }

    return Math.max(ans,totalCount);
};