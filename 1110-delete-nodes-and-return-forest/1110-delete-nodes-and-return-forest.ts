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

function delNodes(root: TreeNode | null, to_delete: number[]): Array<TreeNode | null> {
    let res: TreeNode[] | null = [];


    const traverse = (r: TreeNode | null, isNew: boolean, parent?: TreeNode | null, childType?: string) => {
        if (!r) return;

        const curVal = r.val;
        if (to_delete.includes(curVal)) {
            if (r.left) {
                traverse(r.left, true, r, "left");
            }
            if (r.right) {
                traverse(r.right, true, r, "right");
            }
            if (parent) {
                if (childType === 'left') {
                    parent.left = null;

                } else {
                    parent.right = null;
                }
            }
            return;
        }
        if (isNew) {
            res.push(r);
        }
        traverse(r.right, false, r, "right");
        traverse(r.left, false, r, "left");
    }

    traverse(root, true);

    return res;
};