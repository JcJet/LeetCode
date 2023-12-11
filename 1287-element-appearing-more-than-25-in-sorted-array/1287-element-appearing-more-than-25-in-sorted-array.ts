function findSpecialInteger(arr: number[]): number {
    const target = Math.floor(arr.length / 4);
    const map = new Map<number, number>()
    for (let i = 0; i < arr.length; i++) {
        const count = map.get(arr[i]) || 0
        map.set(arr[i], count + 1)
        if (count + 1 > target) return arr[i]
    }
};