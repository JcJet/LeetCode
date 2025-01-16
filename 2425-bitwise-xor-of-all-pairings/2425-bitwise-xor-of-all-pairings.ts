function xorAllNums(nums1: number[], nums2: number[]): number {
    let n = nums1.length;
    let m = nums2.length;

    let freq = new Map<Number,Number>();

    for(let i = 0; i < n; i++){
        freq.set(nums1[i],(Number(freq.get(nums1[i])) || 0) + m);
    }

    for(let i = 0; i < m ; i++){
        freq.set(nums2[i], (Number(freq.get(nums2[i])) || 0) + n);
    }

    let res = 0;

    for(let [num,count] of freq.entries())
        if((Number(count))%2 == 1 )
            res ^= Number(num);
    
    return res;
};