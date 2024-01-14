function closeStrings(word1: string, word2: string): boolean {
    const l1 = word1.length;
    const l2 = word2.length;

    if (l1 !== l2) return false;

    if (word1 === word2) return true;

    const firstSet: number[] = new Array(26).fill(0);
    const secondSet: number[] = new Array(26).fill(0);

    for (let i = 0; i < l1; i++) {
        const ch1 = word1.charCodeAt(i) - 'a'.charCodeAt(0);
        firstSet[ch1]++;
    }

    for (let i = 0; i < l2; i++) {
        const ch2 = word2.charCodeAt(i) - 'a'.charCodeAt(0);

        if (firstSet[ch2] === 0) return false;

        secondSet[ch2]++;
    }

    firstSet.sort((a, b) => a - b);
    secondSet.sort((a, b) => a - b);

    for (let i = 0; i < 26; i++) {
        if (firstSet[i] !== secondSet[i]) {
            return false;
        }
    }

    return true;
}