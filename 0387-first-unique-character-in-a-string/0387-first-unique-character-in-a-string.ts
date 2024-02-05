function firstUniqChar(s: string): number {
    const arr = s.split('')
    const result = arr.findIndex((ele, i,arr) => arr.indexOf(ele) === arr.lastIndexOf(ele))
    return result
    
};