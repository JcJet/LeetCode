/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let res = [];
    let c = []
    candidates.sort((a,b) => b-a)
    let dfs = function(t, j) {
        if (t < 0) return;
        if (t == 0) {
            res.push([...c]);
            return;
        }
        for(let i = j; i < candidates.length; i++) {
            if (candidates[i] > target) continue;
            c.push(candidates[i]);
            dfs(t-candidates[i], i+1);
            c.pop();
            while (candidates[i+1] == candidates[i]) i++;
        }
    }
    dfs(target, 0);
    return res;
};