var checkRecord = function(n) {
    let MOD = 1e9 + 7;
    let memo = [1,1,0,1,0,0];
    for(let i = 1; i < n; i++){
        memo = [
            (memo[0] + memo[1] + memo[2])%MOD,
            memo[0],
            memo[1],
            (memo[0] + memo[1] + memo[2] + memo[3] + memo[4] + memo[5]) % MOD,
            memo[3],
            memo[4]
        ]
    }
    return (memo[0] + memo[1] + memo[2] + memo[3] + memo[4] + memo[5]) % MOD
};