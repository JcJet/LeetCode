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

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
    if (root === null) {
        return 0;
    }
    const {val, left, right} = root;
    let res = 0;
    if (val >= low && val <= high) {
        res += val;
    }
    return res 
         + rangeSumBST(left, low, high)
         + rangeSumBST(right, low, high);
};