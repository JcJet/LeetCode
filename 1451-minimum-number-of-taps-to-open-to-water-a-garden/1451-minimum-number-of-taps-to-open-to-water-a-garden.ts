function minTaps(n: number, ranges: number[]): number {
    const maxReach: number[] = Array(n + 1).fill(0);

    for (let i: number = 0; i < ranges.length; i++) {
        const start: number = Math.max(0, i - ranges[i]);
        const end: number = Math.min(n, i + ranges[i]);

        maxReach[start] = Math.max(maxReach[start], end);
    }

    let taps: number = 0;
    let currentEnd: number = 0;
    let nextEnd: number = 0;

    for (let i: number = 0; i <= n; i++) {
        if (i > nextEnd) {
            return -1;
        }

        if (i > currentEnd) {
            taps++;
            currentEnd = nextEnd;
        }

        nextEnd = Math.max(nextEnd, maxReach[i]);
    }

    return taps;
};