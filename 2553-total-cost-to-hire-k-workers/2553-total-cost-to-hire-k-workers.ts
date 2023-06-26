function findIndex(nums: number[], target: number): number{
    let left = 0;
    let right = nums.length-1;

    while(left<=right){
        const mid = Math.floor((left+right)/2);

        if(nums[mid]>target){
            right = mid-1;
        }else{
            left = mid+1;
        }
    }
    return left
}

function totalCost(costs: number[], k: number, candidates: number): number {
    const n = costs.length;

    const left = costs.slice(0, candidates);
    const middle = costs.slice(candidates, Math.max(candidates, n-candidates));
    const right = costs.slice(Math.max(candidates, n-candidates), n);

    left.sort((x,y)=>x-y);
    right.sort((x,y)=>x-y);

    const selected: number[] = [];

    while(selected.length<k){
        if(left[0]<=right[0] || right.length===0){
            const hired = left.shift() as number;
            selected.push(hired);
            if(middle.length!==0){
                const n = middle.shift() as number;
                left.splice(findIndex(left, n), 0, n);
            }
        }else{
            const hired = right.shift() as number;
            selected.push(hired);
            if(middle.length!==0){
                const n = middle.pop() as number;
                right.splice(findIndex(right, n), 0, n);
            }
        }
    }

    let res = 0;
    for(let i=0; i<selected.length; i++){
        res+=selected[i];
    }

    return res;
};