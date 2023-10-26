function numFactoredBinaryTrees(arr: number[]): number {
arr.sort((a, b) => a - b);
        const dp: Map<number, number> = new Map();

        for (let i = 0; i < arr.length; i++) {
            dp.set(arr[i], 1);

            for (let j = 0; j < i; j++) {
                if (arr[i] % arr[j] === 0 && dp.has(arr[i] / arr[j])) {
                    dp.set(arr[i], dp.get(arr[i])! + dp.get(arr[j])! * dp.get(arr[i] / arr[j])!);
                }
            }
        }

        let result = 0;
        for (const val of dp.values()) {
            result += val;
        }

        return result % (Math.pow(10, 9) + 7);
};