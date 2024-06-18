function maxProfitAssignment(difficulty: number[], profit: number[], worker: number[]): number {
    const arr = [];
    for (let i = 0; i < profit.length; i++) {
        arr.push([profit[i], difficulty[i]]);
    }
    arr.sort((a, b) => b[0] - a[0]);
    worker.sort((a, b) => b - a);

    let iw = 0; //current index of worker array
    let ip = 0; //current index of new array from profit and difficult
    let res = 0;
    while (iw < worker.length && ip < profit.length) {
        if (worker[iw] >= arr[ip][1]) {
            res = res + arr[ip][0];
            iw++;
        } else {
            ip++;
        }
    }

    return res;
};