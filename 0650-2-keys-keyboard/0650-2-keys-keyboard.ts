function minSteps(n: number): number {
    const sqrtN = Math.sqrt(n);
    const exp2 = Math.log2(n & (n - 1) ^ n);

    n >>= exp2;
    let moves = exp2 << 1;
    for (let prime = 3; n > 1 && prime <= sqrtN; prime += 2) {
        while ((n % prime) == 0) {
            n /= prime;
            moves += prime;
        }
    }
    
    return (n > 1) ? n + moves : moves;
};