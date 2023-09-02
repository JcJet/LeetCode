function minExtraChar(s: string, dictionary: string[]): number {
    const dict: Map<string, boolean> = new Map;

    dictionary.forEach(x => dict.set(x, true));

    const n: number = s.length;
    const cache: number[] = Array(n).fill(-1);

    function go(i: number) {
        if (i == n) return 0;
        if (cache[i] != -1) return cache[i];
        let res: number = 1 + go(i + 1);
        for (let j = i; j < n; ++j) {
            if (dict.has(s.substr(i, j - i + 1))) {
                res = Math.min(res, go(j + 1));
            }
        }
        return cache[i] = res;
    }

    return go(0);
};