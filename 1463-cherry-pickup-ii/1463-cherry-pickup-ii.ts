let memo: number[][][];
function dfs(grid: number[][], currRow: number, roboAcol: number, roboBcol: number): number{
    if(roboAcol < 0 || roboBcol < 0 || roboAcol >= grid[0].length || roboBcol >= grid[0].length){
        return 0;
    }
    if(currRow === grid.length) return 0;

    if(memo[currRow][roboAcol][roboBcol] !== undefined){
        return memo[currRow][roboAcol][roboBcol];
    }

    let result = 0;
    result += grid[currRow][roboAcol];
    result += grid[currRow][roboBcol];

    let max = 0;
     for(let i = roboAcol - 1; i <= roboAcol + 1; i++){
         for(let j = roboBcol - 1; j <= roboBcol + 1; j++){
             if(i < j){
                 max = Math.max(max, dfs(grid, currRow + 1, i, j));
             }
         }
     }
     result += max;
     return memo[currRow][roboAcol][roboBcol] = result;
}


function cherryPickup(grid: number[][]): number {
    let rows = grid.length;
    let cols = grid[0].length;
    memo = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () =>
        new Array(cols).fill(undefined)
    )
);
    return dfs(grid, 0, 0, cols - 1);
};