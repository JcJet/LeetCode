function wonderfulSubstrings(word: string): number {
    let count = 0;
    const freq: number[] = new Array(1024).fill(0);
    freq[0] = 1;
    let mask = 0;
    for (let i = 0; i < word.length; i++) {
        const charIndex = word.charCodeAt(i) - 97;
        mask ^= (1 << charIndex);
        count += freq[mask];
        for (let j = 0; j < 10; j++) {
            count += freq[mask ^ (1 << j)];
        }
        freq[mask]++;
    }
    return count;
};