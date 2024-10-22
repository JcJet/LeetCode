// TypeScript

// Define the TreeNode interface
interface TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
}

function kthLargestLevelSum(root: TreeNode | null, k: number): number {
    // Initialize an array to store the sum of node values at each level
    const result: number[] = [];

    // Define a helper function to traverse the tree
    const traverse = (node: TreeNode | null, level: number = 0): void => {
        // Base case: if the node is null, return
        if (!node) return;

        // If the level already exists in the result array, add the current node's value to it
        if (result[level] !== undefined) result[level] += node.val;
        // If the level doesn't exist, initialize it with the current node's value
        else result[level] = node.val;

        // Recursively traverse the left subtree, incrementing the level
        traverse(node.left, level + 1);
        // Recursively traverse the right subtree, incrementing the level
        traverse(node.right, level + 1);
    }

    // Start the traversal from the root
    traverse(root);

    // If the kth largest level sum doesn't exist (k is greater than the number of levels), return -1
    if (!result[k - 1]) return -1;

    // Sort the result array in descending order and return the kth largest sum
    return result.sort((a, b) => b - a)[k - 1];
}