var minBitFlips = function (start, goal) {
    let count = 0
    let s1
    let s2
    if (start > goal) {
        s1 = start.toString(2)
        s2 = goal.toString(2).padStart(s1.length, 0)
    }
    else {
        s1 = goal.toString(2)
        s2 = start.toString(2).padStart(s1.length, 0)
    }
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) count++
    }
    return count
};