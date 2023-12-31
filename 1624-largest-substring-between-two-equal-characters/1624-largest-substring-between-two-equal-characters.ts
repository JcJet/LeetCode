const maxLengthBetweenEqualCharacters = (s: string): number => {
    let longestSubstrLen = -1;
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) !== s.lastIndexOf(s[i])) {
            let temp = s.substring(s.indexOf(s[i]), s.lastIndexOf(s[i])).length - 1;
            longestSubstrLen = longestSubstrLen < temp ? temp : longestSubstrLen;
        }

    }
    return longestSubstrLen;
};