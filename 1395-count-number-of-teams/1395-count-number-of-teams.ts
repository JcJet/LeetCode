function numTeams(rating: number[]): number {
    const n: number = rating.length;
    if (n < 3) return 0;
    
    const soldiers: [number, number][] = rating.map((r, i): [number, number] => [r, i]).sort((a, b) => a[0] - b[0]);
    const indexMap: number[] = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        indexMap[soldiers[i][1]] = i;
    }
    
    const countTeams = (ascending: boolean): number => {
        const bit: number[] = new Array(n + 1).fill(0);
        let teams: number = 0;
        
        for (let i = 0; i < n; i++) {
            const rank: number = indexMap[i] + 1;
            const left: number = ascending ? getSum(bit, rank - 1) : getSum(bit, n) - getSum(bit, rank);
            const right: number = ascending ? n - rank - (getSum(bit, n) - getSum(bit, rank)) : rank - 1 - getSum(bit, rank - 1);
            teams += left * right;
            update(bit, rank, 1);
        }
        
        return teams;
    };
    
    const update = (bit: number[], index: number, val: number): void => {
        while (index < bit.length) {
            bit[index] += val;
            index += index & (-index);
        }
    };
    
    const getSum = (bit: number[], index: number): number => {
        let sum: number = 0;
        while (index > 0) {
            sum += bit[index];
            index -= index & (-index);
        }
        return sum;
    };
    
    return countTeams(true) + countTeams(false);
}