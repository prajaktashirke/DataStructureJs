// TreeNode structure for the binary tree
class TreeNode {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    // Function to perform Preorder traversal
    // of the tree and store values in 'arr'
    recursivePreorder(root, arr) {
        // If the current Tree is NULL (base case for recursion), return
        if (root === null) {
            return;
        }
        // Push the current TreeNode's value into the vector
        arr.push(root.data);
        // Recursively traverse the left subtree
        this.recursivePreorder(root.left, arr);
        // Recursively traverse the right subtree
        this.recursivePreorder(root.right, arr);
    }

    // Function to initiate Preorder traversal and return the resulting vector
    Preorder(root) {
        // Create an empty vector to store Preorder traversal values
        const arr = [];
        // Call the Preorder traversal function
        this.recursivePreorder(root, arr);
        // Return the resulting vector containing Preorder traversal values
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
    // Getting Preorder traversal
    const result = sol.Preorder(root);

    // Displaying the Preorder traversal result
    console.log("Preorder Traversal: ", result.join(" "));
}

main();
