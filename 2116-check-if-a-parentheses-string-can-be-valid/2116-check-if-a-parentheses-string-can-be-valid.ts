function canBeValid(s: string, locked: string): boolean {
  const n = s.length
  if (n % 2 !== 0) return false

  let minOpen = 0
  let maxOpen = 0

  for (let i = 0; i < n; i++) {
    const c = s[i]
    const l = locked[i]

    if (l === '1') {
      if (c === '(') {
        minOpen++
        maxOpen++
      } else {
        minOpen--
        maxOpen--
      }
    } else {
      minOpen--
      maxOpen++
    }

    if (maxOpen < 0) return false

    if (minOpen < 0) minOpen = 0
  }

  return minOpen === 0
};