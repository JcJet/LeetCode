function minimumSteps(s: string): number {
    let l = 0
    let r = 0
    const sArr: Array<string> = s.split("") 
    let ans = 0

    while (r < s.length) { 
        if (sArr[r] == "0" && sArr[l] == "1") { 
            sArr[r] = "1"
            sArr[l] = "0"
            ans += (r - l)
            l += 1
        }
        r += 1
        if (sArr[l] == "0") l += 1
    }
    return ans
};