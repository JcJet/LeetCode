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

function maxAncestorDiff(
  root: TreeNode | null,
  maxAncestor = 0,
  minAncestor = Infinity
): number {
  if (root == null) {
    return 0;
  }

  maxAncestor = Math.max(maxAncestor, root.val);
  minAncestor = Math.min(minAncestor, root.val);

  if (!root.left && !root.right) {
    return Math.abs(maxAncestor - minAncestor);
  }

  return Math.max(
    maxAncestorDiff(root.left, maxAncestor, minAncestor),
    maxAncestorDiff(root.right, maxAncestor, minAncestor)
  );
}