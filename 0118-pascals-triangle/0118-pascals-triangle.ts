function generate(numRows: number): number[][] {
  if (numRows === 1) return [[1]];

  const res = [[1], [1, 1]];
  for (let i = 1; i < numRows-1; i++) {
    const sums = [];
    for (let j = 1; j < res[i].length; j++) {
      sums.push(res[i][j] + res[i][j - 1]);
    }
    res.push([1, ...sums, 1]);
  }

  return res;
};