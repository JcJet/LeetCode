function isInterleave(s1: string, s2: string, s3: string): boolean {
    let n = s3.length, x = s1.length , y = s2.length;
    if( x + y !== n )return false;
    let dp:(number[][] | boolean[][]) = new Array(x + 1).fill(-1).map(() => Array(y + 1).fill(-1)); 
    const iterate = (dp:(number[][] | boolean[][]), i:number, j:number, s:number):boolean => {
        if(i >= x)return s2.slice(j) === s3.slice(s);
        if(j >= y)return s1.slice(i) === s3.slice(s);
        if( s >= n )return true;
        if(dp[i][j] !== -1)return dp[i][j] as boolean;
        if( s1[i] !== s3[s] && s2[j] !== s3[s] )return false;
        if( s1[i] === s3[s] && s2[j] === s3[s] )return dp[i][j] = iterate(dp, i + 1, j, s + 1) || iterate(dp, i, j + 1, s + 1);
        if( s1[i] === s3[s] )return dp[i][j] = iterate(dp, i + 1, j, s + 1);
        if( s2[j] === s3[s] )return dp[i][j] = iterate(dp, i, j + 1, s + 1);
    }
    return iterate(dp, 0, 0, 0)
};