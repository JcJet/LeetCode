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

function isEvenOddTree(root: TreeNode | null): boolean {
    let queue = [root!], isOdd = 1, prev = -Infinity;
    while (queue.length > 0) {
        const next: TreeNode[] = [];
        for (const node of queue) {
            if (node.val % 2 !== isOdd || (2 * isOdd - 1) * node.val <= (2 * isOdd - 1) * prev)
                return false;
            if (node.left) next.push(node.left);
            if (node.right) next.push(node.right);
            prev = node.val;
        }
        isOdd = 1 - isOdd;
        prev = isOdd ? -Infinity : Infinity;
        queue = next;
    }
    return true;
};