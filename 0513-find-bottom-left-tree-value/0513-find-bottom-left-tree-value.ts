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

var findBottomLeftValue = function(root) {
            const queue=[root]
            let node
            while (queue.length){
                const leftmost=queue.shift();
                node = leftmost.val;
                if (leftmost.right){
                    queue.push(leftmost.right);
                }                    
                if (leftmost.left){
                    queue.push(leftmost.left);
                }                      
            }
                   
            return node
};