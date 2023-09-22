function isSubsequence(s: string, t: string): boolean {
    
    var j = 0
    var i = 0
    while (i < s.length && j < t.length){
        if(s[i] === t[j]){
            j++;
            i++;
        }else{
            j++;
        }
    }
    return i === s.length
};