const uniqueOccurrences = (arr: number[]): boolean => {
    let map = new Map<number, number>();

    for (let num of arr) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    return map.size === new Set(map.values()).size;
};