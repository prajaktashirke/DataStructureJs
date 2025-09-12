// TreeNode structure for the binary tree
class TreeNode {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    // Function to perform Postorder traversal
    // of the tree and store values in 'arr'
    recursivePostorder(root, arr) {
        // If the current Tree is NULL (base case for recursion), return
        if (root === null) {
            return;
        }
        // Recursively traverse the left subtree
        this.recursivePostorder(root.left, arr);
        // Recursively traverse the right subtree
        this.recursivePostorder(root.right, arr);
        // Push the current TreeNode's value into the vector
        arr.push(root.data);
    }

    // Function to initiate Postorder traversal and return the resulting vector
    Postorder(root) {
        // Create an empty vector to store Postorder traversal values
        const arr = [];
        // Call the Postorder traversal function
        this.recursivePostorder(root, arr);
        // Return the resulting vector containing Postorder traversal values
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
    // Getting Postorder traversal
    const result = sol.Postorder(root);

    // Displaying the Postorder traversal result
    console.log("Postorder Traversal: ", result.join(" "));
}

main();
