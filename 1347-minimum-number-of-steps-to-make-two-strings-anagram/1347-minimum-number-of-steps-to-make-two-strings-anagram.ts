function minSteps(s: string, t: string): number {
    const sHash: number[] = new Array(26).fill(0);
    const tHash: number[] = new Array(26).fill(0);

    for (const sChar of s) {
        sHash[sChar.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    for (const tChar of t) {
        tHash[tChar.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    let count: number = 0;

    for (let i = 0; i < 26; i++) {
        count += Math.abs(sHash[i] - tHash[i]);
    }

    return Math.floor(count / 2);
}