function buddyStrings(s: string, goal: string): boolean {
    if (s.length !== goal.length) return false

    const m = {}

    for (let i = 0; i < s.length; i++) {
        const c = s[i]

        if (!m[c]) {
            m[c] = 1
        } else {
            m[c]++
        }
    }

    let canSwap = false
    let diffCnt = 0

    for (let i = 0; i < goal.length; i++) {
        if (goal[i] !== s[i]) {
            diffCnt++
            if (diffCnt > 2) return false
        }

        const c = goal[i]   
        const characterCnt = m[c]
        if(!characterCnt) return false

        // 'cc' => 'cc
        if (characterCnt > 1) {
            canSwap = true
        // 'cb' => 'bc'
        } else if (characterCnt === 1 && s[i] !== c) {
            canSwap = true
        }

        m[c]--
        if (m[c] < 0) return false
    }


    return canSwap
};