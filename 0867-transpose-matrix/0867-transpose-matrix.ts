function transpose(matrix: number[][]): number[][] {
  return Array.from({length: matrix[0].length}, (_, r) => 
    Array.from({length: matrix.length}, (_, c) => matrix[c][r])
  );
};