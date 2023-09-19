function findDuplicate(nums: number[]): number {
    let [fast,slow] = [nums[nums[nums[0]]],nums[nums[0]]];
    while(fast !== slow) {
        fast = nums[nums[fast]];
        slow = nums[slow];
    } 
    fast = nums[0];
    while(fast !== slow) {
        fast = nums[fast];
        slow = nums[slow];
    }
    return fast;
};