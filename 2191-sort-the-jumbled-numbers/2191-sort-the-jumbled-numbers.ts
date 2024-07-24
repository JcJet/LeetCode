function sortJumbled(mapping: number[], nums: number[]): number[] {
    let transformed = nums.map((ele)=>{
        return Number(ele.toString().split("").map((num)=>{
            return mapping[num]
        }).join("").replace(/^0+/, ""))
       
    })
    let pair =[]
    for (let i = 0  ; i < nums.length ; i++) {
        pair.push([nums[i],transformed[i]])
    }

    return pair.sort((a,b)=>{ return a[1]-b[1] })
            .map((arr)=>arr[0])
};