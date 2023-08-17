function updateMatrix(mat: number[][]): number[][] {
    const m = mat.length - 1, n = mat[0].length - 1,
        result = Array.from({ length: m + 1 }, () => Array(n + 1)),
        queue: [number, number, number][] = [];
    for (let i = 0; i <= m; i++) for (let j = 0; j <= n; j++) {
        result[i][j] = n + m;
        if (mat[i][j] === 0) queue.push([i, j, 0])
    }
    let i = 0;
    while (i < queue.length) {
        const [x, y, dist] = queue[i];
        if (result[x][y] > dist) {
            result[x][y] = dist;
            if (x > 0) queue.push([x - 1, y, dist + 1]);
            if (y > 0) queue.push([x, y - 1, dist + 1]);
            if (x < m) queue.push([x + 1, y, dist + 1]);
            if (y < n) queue.push([x, y + 1, dist + 1]);
        }
        i++;
    }
    return result;
};