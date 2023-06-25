function countRoutes(locations: number[], start: number, finish: number, fuel: number): number {
    let n = locations.length;
    let pathMemo = new Array(n).fill([]).map(() => new Array(fuel+1).fill(0));
    pathMemo[finish].fill(1);
    
    //Loop till fuel lasts
    for (let j = 0; j <= fuel; j++) {
        //Loop through each path and skipping the current. 
        for (let i = 0; i < n; i++) {
            for (let k = 0; k < n; k++) {
                if (k == i) {
                    continue;
                }
                if (Math.abs(locations[i] - locations[k]) <= j) {
                    pathMemo[i][j] = (pathMemo[i][j] + pathMemo[k][j - Math.abs(locations[i] - locations[k])]) %
                        1000000007;
                }
            }
        }
    }
    return pathMemo[start][fuel];

};