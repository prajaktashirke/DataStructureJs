// TreeNode structure for the binary tree
class TreeNode {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    // Function to perform inorder traversal
    // of the tree and store values in 'arr'
    recursiveInorder(root, arr) {
        // If the current Tree is NULL (base case for recursion), return
        if (root === null) {
            return;
        }
        // Recursively traverse the left subtree
        this.recursiveInorder(root.left, arr);
        // Push the current TreeNode's value into the vector
        arr.push(root.data);
        // Recursively traverse the right subtree
        this.recursiveInorder(root.right, arr);
    }

    // Function to initiate inorder traversal and return the resulting vector
    inorder(root) {
        // Create an empty vector to store inorder traversal values
        const arr = [];
        // Call the inorder traversal function
        this.recursiveInorder(root, arr);
        // Return the resulting vector containing inorder traversal values
        return arr;
    }
}

// Main function
function main() {
    // Creating a sample binary tree
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);

    const sol = new Solution();
    // Getting inorder traversal
    const result = sol.inorder(root);

    // Displaying the inorder traversal result
    console.log("Inorder Traversal: ", result.join(" "));
}

main();
