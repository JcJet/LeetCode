const minimumReplacement = (nums: number[]): number => {
  let replacements = 0;
  let bigger = nums[nums.length - 1];
  for (let i = nums.length - 2; i >= 0; i--) {
    const splitNums = Math.ceil(nums[i] / bigger); // how many numbers we need to split the current number into to make it less than or equal to the number to the right
    replacements += splitNums - 1;
    bigger = Math.floor(nums[i] / splitNums); // lower bound of the average of all the split numbers
  }
  return replacements;
};