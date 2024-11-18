function decrypt(code: number[], k: number): number[] {
    const totalSum = code.reduce((res, cur) => res + cur, 0), absK = Math.abs(k)
    if (k == 0) {
        return new Array(code.length).fill(0)
    }

    const surplus = absK % code.length

    let sum = Math.floor(absK / code.length) * totalSum + code.reduce((res, cur, idx) => {
        if (k > 0) {
            if (idx > 0 && idx < surplus + 1) {
                res += cur
            }
        } else {
            if (idx > code.length - absK - 1 && idx < code.length) {
                res += cur
            }
        }
        return res
    }, 0)
    return code.reduce((res, cur, idx) => {
        if (idx !== 0) {
            if (k > 0) {
                const next = (idx + surplus) % code.length
                sum = sum - code[idx] + code[next]
            } else {
                const prev = (code.length - absK + idx - 1) % code.length
                sum = sum - code[prev] + code[idx-1]
            }
        }
        res.push(sum)
        return res
    }, [])
};