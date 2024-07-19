function luckyNumbers(matrix: number[][]): number[] {
  const ans: number[] = []
  const colMax = new Map<number, number>()

  const findColMax = (col: number): number => {
    if (colMax.has(col)) {
      return colMax.get(col)!
    }
    const column = matrix.map((row) => row[col])
    const max = Math.max(...column)
    colMax.set(col, max)
    return max
  }

  for (const row of matrix) {
    const min = Math.min(...row)
    const minIndex = row.indexOf(min)
    const max = findColMax(minIndex)
    if (min === max) {
      ans.push(min)
    }
  }

  return ans
}