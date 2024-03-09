function getCommon(nums1: number[], nums2: number[]): number {

    if(nums1[0] > nums2[nums2.length - 1]) {
        return -1;
    }

    if(nums1[0] === nums2[nums2.length - 1]) {
        return nums1[0];
    }

    let smallerCommonValue = -1;
    let first = 0;
    let second = 0;

    while(smallerCommonValue === -1 && first < nums1.length && second < nums2.length) {
        if(nums1[first]===nums2[second]) {
            smallerCommonValue = nums1[first];
            continue;
        }

        if(nums1[first] > nums2[second]) {
            second++;
        }

        if(nums1[first] < nums2[second]) {
            first++;
        }
    }

    return smallerCommonValue;
};