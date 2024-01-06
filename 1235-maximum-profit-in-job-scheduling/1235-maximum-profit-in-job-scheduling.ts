function jobScheduling(startTime: number[], endTime: number[], profit: number[]): number {
    const n: number = startTime.length;
    const jobEvents: [number, number, number][] = [];

    for (let i = 0; i < n; i++) {
        jobEvents.push([startTime[i], endTime[i], profit[i]]);
    }

    jobEvents.sort((a, b) => a[0] - b[0]);

    for (let i = 0; i < n; i++) {
        startTime[i] = jobEvents[i][0];
    }


    // from constraints
    const memo = new Array(5 * 10 ** 4 + 1).fill(-1);

    const findNextJob = (start: number[], lastEnd: number): number => {
        let left: number = 0;
        let right: number = start.length - 1;

        while (left <= right) {
            const mid: number = Math.floor((left + right) / 2);
            if (start[mid] >= lastEnd) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return right + 1;
    };

    const findMaxProfit = (jobEvents: [number, number, number][]): number => {
        for (let j = n - 1; j >= 0; j--) {
            const [_, end, profit] = jobEvents[j];
            const nextIdx: number = findNextJob(startTime, end);
            
            let tmpProfit = nextIdx == n ? profit : profit + memo[nextIdx];
            memo[j] = j == n - 1 ? tmpProfit : Math.max(tmpProfit, memo[j + 1]);
        }

        return memo[0];
    };
    

    return findMaxProfit(jobEvents);
}

function jobSchedulingHeap(startTime: number[], endTime: number[], profit: number[]): number {
    const n: number = startTime.length;
    const jobEvents: [number, number, number][] = [];
    let maxProfit: number = 0;
 
    for (let i = 0; i < startTime.length; i++) {
        jobEvents.push([startTime[i], endTime[i], profit[i]]);
    }

    jobEvents.sort(([startTimeA, endTimeA], [startTimeB, endTimeB]) => {
        if (startTimeA == startTimeB) {
            return endTimeA - endTimeB;
        }

        return startTimeA - startTimeB;
    });

    const minHeap: number[][] = [];

    for (let i = 0; i < n; i++) {
        const [start, end, profit] = jobEvents[i];

        while (minHeap.length > 0 && start >= minHeap[0][0]) {
            maxProfit = Math.max(maxProfit, minHeap[0][1]);
            minHeap.shift();
        }

        minHeap.push([end, profit + maxProfit]);
        minHeap.sort((a, b) => a[0] - b[0]);
    }

    while (minHeap.length > 0) {
        maxProfit = Math.max(maxProfit, minHeap[0][1]);
        minHeap.shift();
    }

    return maxProfit;
};