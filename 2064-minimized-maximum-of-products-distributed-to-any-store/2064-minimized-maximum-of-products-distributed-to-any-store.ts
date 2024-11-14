function minimizedMaximum(n, quants) {
    let left = 1, // 0 will never work
        right = quants.reduce((prev, curr) => Math.max(prev, curr)), // max number in array
        x = 0;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (quants.reduce((prev, curr) => prev + Math.ceil(curr / mid), 0) <= n) {
            x = mid;
            right = mid - 1; // we try to find a lower x in the left window
        } else {
            left = mid + 1;
        }
    }
    return x;
}