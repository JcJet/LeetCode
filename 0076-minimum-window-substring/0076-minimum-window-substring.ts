function minWindow(s: string, t: string): string {
    let dict_t: Record<string, number> = {};
    for (let jak of t) {
        if (jak in dict_t)
            dict_t[jak]++;
        else
            dict_t[jak] = 1;
    }

    let l = 0, r = 0;
    let formed = 0;
    let window_counts: Record<string, number> = {};
    let ans: [number, number | null, number | null] = [Number.MAX_SAFE_INTEGER, null, null];

    while (r < s.length) {
        let jak = s[r];
        if (!(jak in window_counts))
            window_counts[jak] = 0;
        window_counts[jak]++;

        if (jak in dict_t && window_counts[jak] === dict_t[jak])
            formed++;

        while (l <= r && formed === Object.keys(dict_t).length) {
            jak = s[l];
            if (r - l + 1 < ans[0]) {
                ans[0] = r - l + 1;
                ans[1] = l;
                ans[2] = r;
            }

            window_counts[jak]--;
            if (jak in dict_t && window_counts[jak] < dict_t[jak])
                formed--;

            l++;
        }

        r++;
    }

    return ans[0] === Number.MAX_SAFE_INTEGER ? "" : s.substring(ans[1]!, ans[2]! + 1);
};