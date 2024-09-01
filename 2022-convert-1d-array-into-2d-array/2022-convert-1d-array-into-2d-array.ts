
function construct2DArray(original: number[], m: number, n: number): number[][] {
    const result: number[][] = new Array(m);
    
    switch (m * n === original.length) {
        case true:
            let i = 0;
            while (i < m) {
                result[i] = original.slice(i * n, i * n + n);
                i++;
            }
            break;
        default:
            return [];
    }

    return result;
}