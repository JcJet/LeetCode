function shortestPathAllKeys(grid: string[]): number {
    const N = grid.length;
    const M = grid[0].length;

    const directions = [[0,1], [0,-1], [-1, 0], [1, 0]];
    const check = (x: number, y: number): boolean => x >= 0 && y >= 0 && x < N && y < M;

    const getKeyOffset = (c: string): number => c.charCodeAt(0) - 'a'.charCodeAt(0);
    const isKey = (c: string): boolean => 'a'.charCodeAt(0) <= c.charCodeAt(0)  && c.charCodeAt(0) <= 'f'.charCodeAt(0);
    const isLock = (c: string): boolean => 'A'.charCodeAt(0) <= c.charCodeAt(0)  && c.charCodeAt(0) <= 'F'.charCodeAt(0);
    const getLockOffset = (c: string): number => c.charCodeAt(0) - 'A'.charCodeAt(0);

    // Cache key based on position and binary keys set
    const getCacheKey  = (x: number, y: number, state: number): number => (x * M + y << 6) | state;

    // Find the start human posititon and create final state (total key count)
    let human: [number, number] = [0,0];
    let keysCount = 0;
    let finalState = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (grid[i][j] === '@') {
                human = [i, j];
            } else if (isKey(grid[i][j])) {
                finalState = finalState | 1 << keysCount;
                keysCount++;
            }
        }
    }

    const visited = new Set<number>();
    visited.add(getCacheKey(human[0], human[1], 0));
    let q: [number, number, number, number][] = [[human[0], human[1], 0, 0]];

    while (q.length) {
        const [x, y, d, state] = q.shift();
        let newState = state;

        if (isKey(grid[x][y])) {
            const offset = getKeyOffset(grid[x][y]);
            if (!(state & (1 << offset))) {
                newState = state | (1 << offset)
                if (newState === finalState) {
                    return d;
                }
            }
        }
        
        for (const [diffX, diffY] of directions) {
            const newX = x + diffX;
            const newY = y + diffY;

            if (!check(newX, newY)) {
                continue;
            }

            if (grid[newX][newY] === '#') {
                continue;
            }

            if (isLock(grid[newX][newY])) {
                const offset = getLockOffset(grid[newX][newY]);
                if (!(newState & 1 << offset)) {
                    continue;
                }
            }

            const cacheKey = getCacheKey(newX, newY, newState);
            if (!visited.has(cacheKey)) {
                visited.add(cacheKey);
                q.push([newX, newY, d + 1, newState]);
            }
        }
    }

    return -1;
};