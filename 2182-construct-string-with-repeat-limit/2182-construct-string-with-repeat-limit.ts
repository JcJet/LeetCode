function repeatLimitedString(s: string, repeatLimit: number): string {
    const freq: number[] = new Array(26).fill(0);
    for (const char of s) {
        freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    let result: string[] = [];
    let i: number = 25;
    let j: number = 24;

    while (i >= 0) {
        if (freq[i] === 0) {
            i--;
            continue;
        }

        let count: number = Math.min(repeatLimit, freq[i]);
        result.push(String.fromCharCode(97 + i).repeat(count));
        freq[i] -= count;

        if (freq[i] > 0) {
            while (j >= 0 && (freq[j] === 0 || j === i)) {
                j--;
            }

            if (j < 0) break;

            result.push(String.fromCharCode(97 + j));
            freq[j]--;
        } else {
            i--;
        }
    }

    return result.join('');
}