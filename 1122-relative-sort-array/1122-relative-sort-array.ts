function relativeSortArray(arr1: number[], arr2: number[]): number[] {
    const map:Record<number, number> = Object.fromEntries(Array.from(arr2, (val, i) => [val, i]))
    return arr1.sort((a:number, b:number) => (map[a] ?? 1001 + a) - (map[b] ?? 1001 + b))
};