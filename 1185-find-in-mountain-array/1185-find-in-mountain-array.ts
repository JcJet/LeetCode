/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * class Master {
 *      get(index: number): number {}
 *
 *      length(): number {}
 * }
 */

function findInMountainArray(target: number, mountainArr: MountainArray) {
    return binSearch(0, mountainArr.length() - 1)

    function binSearch(l: number, r: number): number {
        let innerFound = -1
        while (l <= r) {
            const med = Math.floor(l + (r - l) / 2)
            const median = mountainArr.get(med)
            const minus1 = mountainArr.get(med - 1) ?? -1
            const plus1 = mountainArr.get(med + 1) ?? Infinity
            if (median === target) {
                innerFound = med
                if ((minus1 < median && median < plus1) || (minus1 < median && median > plus1)) {
                    // We are on the uphill side or at the top so we can just return this index
                    return med
                } else {
                    //We need to check lower half for a lower index
                    r = med - 1
                }
            }
            else if (median < target) {
                if ((minus1 < median && median > plus1)) {
                    // The top of the mountain is less than target, target does not exist
                    return -1
                } else if (minus1 < median && median < plus1) {
                    // We are on the uphill side and less than target, need to check right side
                    l = med + 1
                } else {
                    // We are on the downhill side and less than target, need to check left side
                    r = med - 1
                }
            }
            else {
                const leftSide = binSearch(l, med - 1)
                if (leftSide !== -1) {
                    return leftSide
                }
                const rightSide = binSearch(med + 1, r)
                if (rightSide !== -1) {
                    return rightSide
                }
                return innerFound
            }
        }
        return innerFound
    }
};