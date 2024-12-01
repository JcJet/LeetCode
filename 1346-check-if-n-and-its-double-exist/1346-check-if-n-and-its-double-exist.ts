function checkIfExist(arr: number[]): boolean {
  const numSet = new Set();
  for (const elem of arr) {
    if (numSet.has(elem / 2) || numSet.has(elem * 2)) return true;
    else numSet.add(elem);
  }
  return false;
}