function kthDistinct(arr: string[], k: number): string {
    const hash = new Map<string, number>()

    // count 
    for(const word of arr) {
        hash.set(word, (hash.get(word) ?? 0) + 1)
    }

    // find kth unique word
    for(const [word, count] of hash.entries()) {
        if (count === 1) k--
        if (k <= 0) return word
    }
    return ''
};