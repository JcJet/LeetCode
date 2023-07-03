func buddyStrings(s string, goal string) bool {
    if len(s) != len(goal) {
        return false
    }

    sets := make(map[byte]int, 0)
    diffs := make([]int, 0)
    for i := 0; i < len(s); i++ {
        if s[i] != goal[i] {
            diffs = append(diffs, i)
        }
        sets[s[i]]++
    }

    if len(diffs) == 0 {
        for _, v := range sets {
            if v >= 2 {
                return true
            }
        }
    }

    return len(diffs) == 2 && s[diffs[0]] == goal[diffs[1]] && s[diffs[1]] == goal[diffs[0]]
}