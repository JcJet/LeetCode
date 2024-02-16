function findLeastNumOfUniqueInts(arr: number[], k: number): number {
    let map = new Map<number, number>();
    for (const num of arr) {
        let val = (map.get(num) || 0) + 1;
        map.set(num, val);
    }
    
    let freqArr=new Array(arr.length+1).fill(0);
    let res=map.size; 

    for(const freq of map.values()) freqArr[freq]+=1;

    for(let i=1;i<freqArr.length;i++){
        if(k>=(freqArr[i]*i)){
            k-=(freqArr[i]*i);
            res-=freqArr[i];
        }else{
            res-=Math.floor(k/i);
            break;
        }
    }
    return res;
};