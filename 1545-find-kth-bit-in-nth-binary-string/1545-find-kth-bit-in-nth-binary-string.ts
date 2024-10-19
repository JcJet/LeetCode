function findKthBit(n: number, k: number): string {
    let s: number[] = [0]
    let len: number = s.length

    let invert: (len) => number[] = (len): number[] => {
        let res: number[] = new Array()
        while (len--)
            res.push(s[len] == 1 ? 0 : 1)
        return res
    }

    n--

    while (n-- || len < k) {
        s = [...s].concat(1).concat(invert(len))
        len = s.length
    }

    return s[k - 1].toString()
};