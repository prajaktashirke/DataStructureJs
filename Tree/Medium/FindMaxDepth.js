// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var maxDepth = function(root) {
    // Base case: if the node is null, return 0
    if (root === null) {
        return 0;
    }
    // Recursively find the depth of the left and right subtrees
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);
    // The depth of the tree is 1 current node + the maximum depth of the subtrees
    return 1 + Math.max(left, right);
};

// Main method to test the function
function main() {
    // Example usage:
    let root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    
    console.log("Maximum Depth:", maxDepth(root));
}

main();
