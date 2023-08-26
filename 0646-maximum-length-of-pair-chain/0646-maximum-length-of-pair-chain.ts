function findLongestChain(pairs: number[][]): number {
  pairs.sort((a, b) => a[0] - b[0]);
  let result = [];
  for (let i = 0; i < pairs.length; i++) {
    let [curr, last] = [null, result[result.length - 1] || null];
    for (let j = i; j < pairs.length; j++) {
      if ((!last || pairs[j][0] > last[1]) && (!curr || pairs[j][1] < curr[1])) curr = pairs[j]
    }
    if (curr) result.push(curr)
  }
  return result.length;
};