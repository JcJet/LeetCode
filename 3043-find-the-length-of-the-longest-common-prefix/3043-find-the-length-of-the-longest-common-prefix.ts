var longestCommonPrefix = function (arr1, arr2) {
    arr1 = arr1.map(x => x.toString())
    arr2 = arr2.map(x => x.toString())
    arr1.sort()
    arr2.sort()
    let max = 0
    let y = 0
    for (let i = 0; i < arr1.length; i++) {
        let e1 = arr1[i]
        let e2 = arr2[y]
        if (!e1 || !e2) break
        let se = e1[0]
        if (e2[0] < se) {
            y++
            i--
            continue
        }
        else if (e2[0] > se) continue
        else {
            let ci = 0
            while (e1[ci] === e2[ci] && ci < e1.length) {
                ci++
            }
            max = Math.max(max, ci)
            if (e1 > e2) {
                y++
                i--
            }
            else if (e1 == e2) y++

        }

    }
    return max
};