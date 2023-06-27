function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {
    const res : number[][] = [];
        let i1 = 0;
        let i2 = 0;
        const memo: number[][] = [[i1, i2]]; // [[sum, i1, i2], ...]
        const visited = new Set<string>();

        function findIndex(target: number): number{
            let left = 0;
            let right = memo.length-1;
        
            while(left<=right){
                const mid = Math.floor((left+right)/2);
                const sum = nums1[memo[mid][0]] + nums2[memo[mid][1]];
        
                if(sum>target){
                    right = mid-1;
                }else{
                    left = mid+1;
                }
            }
            return left
        }

        while(res.length<k && memo.length>0){
            const min = memo.shift() as number[];
            i1 = min[0];
            i2 = min[1];
            res.push([nums1[i1], nums2[i2]])

            if(i1+1<nums1.length && !visited.has(`${i1+1}_${i2}`)){
                memo.splice(findIndex(nums1[i1+1] + nums2[i2]), 0, [i1+1, i2])
                visited.add(`${i1+1}_${i2}`);
            }
            if(i2+1<nums2.length && !visited.has(`${i1}_${i2+1}`)){
                memo.splice(findIndex(nums1[i1] + nums2[i2+1]), 0, [i1, i2+1])
                visited.add(`${i1}_${i2+1}`);
            }
        }

        return res;
};