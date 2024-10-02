function arrayRankTransform(arr: number[]): number[] {
    const n = arr.length;

    // Create a copy of the original array
    const tempArr = [...arr];

    // Sort the original array
    arr.sort((a, b) => a - b);

    // Create a map to store ranks
    const map = new Map<number, number>();
    let index = 1;
    for (const num of arr) {
        if (!map.has(num)) {
            map.set(num, index++);
        }
    }

    // Replace elements in the copied array with their rank
    const result = tempArr.map(num => map.get(num) as number);
    return result;
}