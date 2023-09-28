function sortArrayByParity(nums: number[]): number[] {
    let i = 0
    //navigate to first odd digit
    while(nums[i]%2 == 0){
       i++
    }
    let j = i+1
    while(j < nums.length){
        if(nums[j]%2 == 0){
            let temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp
            j++
            i++
        }else{
            j++
        }
    }
    return nums
};