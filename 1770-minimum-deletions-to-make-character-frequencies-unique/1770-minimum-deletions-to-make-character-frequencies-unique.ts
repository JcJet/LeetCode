function minDeletions(s) {
    const map = {};

    // Step 1: Calculate character frequencies
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (map[c] === undefined) {
            map[c] = 1;
        } else {
            map[c]++;
        }
    }

    const countMap = {};
    let res = 0;

    // Step 2: Calculate the minimum deletions required
    for (const key in map) {
        let count = map[key];

        while (count > 0 && countMap[count]) {
            // If the current frequency is already used, decrement it
            count--;
            res++;
        }

        // Mark the current frequency as used
        countMap[count] = true;
    }

    return res;
}