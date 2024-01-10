/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

let maxDis = 0
const dfs = (root:TreeNode |null, start:number):number=>{
    if(!root){
        return 0
    }

    const left = dfs(root.left,start)
    const right = dfs(root.right,start)

    if(root.val == start){
        maxDis = Math.max(left,right)
        return -1
    }else if(left>=0 && right>=0){
        return Math.max(left,right)+1
    }else {
        const dis = Math.abs(left) + Math.abs(right)
        maxDis = Math.max(dis,maxDis)
        return Math.min(left,right)-1
    }

}

function amountOfTime(root: TreeNode | null, start: number): number {
    dfs(root,start)
    return maxDis
};