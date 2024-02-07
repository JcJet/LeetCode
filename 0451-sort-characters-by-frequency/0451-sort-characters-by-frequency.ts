function frequencySort(s: string): string {
    const fr = new Map<string, string>();

    for (let i = 0; i < s.length; i++) {
        fr.set(s[i], (fr.get(s[i])||'') + s[i]);
    }

    const arr = [];
    fr.forEach((val) => {
        const len = val.length;
        if (arr[len]) {
            arr[len] = arr[len] + val
        } else {
            arr[len] = val;
        }
    })

    let res = '';
    for (let j = arr.length - 1; j >= 0; j--) {
        if (arr[j]) {
            res += arr[j];
        }
    }

    return res;
};