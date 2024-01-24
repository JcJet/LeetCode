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

interface TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
}

function pseudoPalindromicPaths (root: TreeNode | null): number {
    let amount = 0;
    
    const map = new Map<number, number>();
    
    for(let i = 1; i <= 9; i++) {
        map.set(i, 0);
    }
    
    function dfs(currentNode: TreeNode) {
        map.set(currentNode.val, map.get(currentNode.val) + 1);
        
        if(currentNode.left) {
            dfs(currentNode.left);
        }
        
        if(currentNode.right) {
            dfs(currentNode.right);
        }
        
        if(!currentNode.left && !currentNode.right) {
            let odd = 0;
            for(let i = 1; i <= 9; i++) {
                if(map.get(i) % 2 === 1) {
                    odd++;
                }
            }   
            
            if(odd < 2) {
                amount++;
            }
        }
        
        map.set(currentNode.val, map.get(currentNode.val) - 1);
    }
    
    dfs(root);
    
    return amount;
};