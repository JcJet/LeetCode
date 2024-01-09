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

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  let as = [];
  let bs = [];

  let al = null, bl = null;

  if (root1) {
    as.push(root1);
  }
  if (root2) {
    bs.push(root2);
  } 

  while (as.length || bs.length) {
    al = null;
    while (al === null && as.length > 0) {
      let atop = as.shift();
      if (!atop.left && !atop.right) {
        al = atop.val;
      }  

      if (atop.right) {
        as.unshift(atop.right);
      }
      if (atop.left) {
        as.unshift(atop.left);
      } 
    }

    bl = null;
    while (bl === null && bs.length > 0) {
      let btop = bs.shift();
      if (!btop.left && !btop.right) {
        bl = btop.val;
      }  

      if (btop.right) {
        bs.unshift(btop.right);
      }
      if (btop.left) {
        bs.unshift(btop.left);
      } 
    }

    if (al !== bl) {
      return false;
    }
  }

  return true;
};