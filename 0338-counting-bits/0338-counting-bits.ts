function countBits(n: number): number[] {
        const bitCounts = new Uint8Array(n + 1);

    for (let i = 0; i < n + 1; i++) {
        bitCounts[i] = bitCounts[i >> 1] + (i & 1);
    }

    return [...bitCounts];

};