function countConsistentStrings(allowed: string, words: string[]): number {
  let counter = words.length;
  const allowedSet = new Set(allowed);

  for (const word of words) {
    for (const char of word) {
      if (!allowedSet.has(char)) {
        counter--;
        break;
      }
    }
  }

  return counter;
}