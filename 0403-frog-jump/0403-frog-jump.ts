function canCross(stones: number[]): boolean {

    let res = false;
    const n = stones.length;
    const tryJumpHist = new Set<string>();

    function canCrossNext(diff: number, lastJump: number): boolean{
        return diff >= lastJump-1 && diff <= lastJump+1;
    }
    function tryJump(currentIndex: number, jump: number){
        if(currentIndex===n-1){
            res = true;
        }
        if(res===true){
            return;
        }

        for(let i=currentIndex+1; i<n; i++){
            const diff = stones[i] - stones[currentIndex];

            if(canCrossNext(diff, jump)){
                const key = `${i}_${diff}`;
                if(!tryJumpHist.has(key)){
                    tryJumpHist.add(key);
                    tryJump(i, diff);
                }
            }

            if(diff > jump+1){
                break;
            }
        }
    }
    

    const firstJump =  stones[1] - stones[0];

    // firstJump must be 1
    if(firstJump!==1){
        return false;
    }

    tryJump(1, firstJump); 

    return res;    

};