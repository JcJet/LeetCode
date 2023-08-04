function wordBreak(str: string, wordArr: string[]): boolean {
  const wordsFound: boolean[] = new Array(str.length).fill(false);

  const foundLastWord = (i: number): boolean => i === 0 || wordsFound[i - 1];
  const isInDictionary = (s: string): boolean => wordArr.includes(s)
  for (let rightIdx = 0; rightIdx < str.length; rightIdx++) {
    for (let leftIdx = 0; leftIdx <= rightIdx; leftIdx++) {
      const substring = str.substring(leftIdx, rightIdx + 1);
      if (foundLastWord(leftIdx) && isInDictionary(substring)) {
        wordsFound[rightIdx] = true;
        break;
      }
    }
  }
  return wordsFound[str.length - 1];
};