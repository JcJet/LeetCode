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

function countPairs(root: TreeNode | null, distance: number): number {
    let goodPairs = 0;

    function dfs(node: TreeNode | null): number[] {
        if (!node) return [];

        if (!node.left && !node.right) {
            return [1];
        }

        const leftDistances = dfs(node.left);
        const rightDistances = dfs(node.right);

        for (const left of leftDistances) {
            for (const right of rightDistances) {
                if (left + right <= distance) {
                    goodPairs++;
                }
            }
        }

        const newDistances: number[] = [];
        for (const dist of leftDistances.concat(rightDistances)) {
            if (dist + 1 < distance) {
                newDistances.push(dist + 1);
            }
        }

        return newDistances;
    }

    dfs(root);
    return goodPairs;
};