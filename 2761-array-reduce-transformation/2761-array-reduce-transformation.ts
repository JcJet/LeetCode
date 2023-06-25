type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    const n = nums.length; 
    let val = 0;
    if(n == 0){
        return init;
    }
    if(n == 1){
        val = fn(init, nums[0]);
        return val;
    }
    if(n > 1){
        val = fn(init, nums[0]);
        for(var i = 1; i < n; i++){
            val = fn(val, nums[i]);
        }
    }
    return val;
};