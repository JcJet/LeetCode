function frequencySort(nums: number[]): number[] {
  let frequencyMap = new Map();
  let output = []
  for ( let i = 0; i < nums.length; i++ ) {
    if ( frequencyMap.has(nums[i]) ) {
      frequencyMap.set(nums[i], frequencyMap.get(nums[i]) + 1)
    }
    if ( !frequencyMap.has(nums[i]) ) {
      frequencyMap.set(nums[i], 1)
    }
  }
  let sorted = [...frequencyMap.entries()].sort((a, b) => {
    if ( a[1] < b[1] ) {
      return -1
    } else if ( a[1] > b[1] ) {
      return 1
    } else {
      if ( a[0] > b[0] ) {
        return -1
      }
      else {
        return 1
      }
    }
  })
  for ( let i = 0; i < sorted.length; i++ ) {
    for ( let j = 0; j < sorted[i][1]; j++) {
      output.push(sorted[i][0])
    }
  }
  return output
};