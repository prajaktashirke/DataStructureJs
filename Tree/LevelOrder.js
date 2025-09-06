/**
 * Definition for a binary tree node.
 * class TreeNode {
 *      constructor(val = 0, left = null, right = null) {
 *          this.data = val;
 *          this.left = left;
 *          this.right = right;
 *      }
 * }
 **/

class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.data = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    // Function to perform level-order traversal of a binary tree
    levelOrder(root) {
        // Create an array to store levels
        const ans = [];
        if (!root) {
            // If the tree is empty, return an empty array
            return ans;
        }
        
        // Create a queue to store nodes for level-order traversal
        const q = [];
        // Add the root node to the queue
        q.push(root);
        
        while (q.length > 0) {
            // Get the size of the current level
            const size = q.length;
            // Create an array to store nodes at the current level
            const level = [];
            
            for (let i = 0; i < size; i++) {
                // Get the front node from the queue
                const node = q.shift();
                // Add the node value to the current level array
                level.push(node.data);
                
                // Enqueue the child nodes if they exist
                if (node.left !== null) {
                    q.push(node.left);
                }
                if (node.right !== null) {
                    q.push(node.right);
                }
            }
            // Add the current level to the answer array
            ans.push(level);
        }
        // Return the level-order traversal of the tree
        return ans;
    }
}

// Function to print the elements of an array
function printArray(arr) {
    // Iterate through the array and print each element
    console.log(arr.join(' '));
}

// Main function to test the level-order traversal
(function() {
    // Creating a sample binary tree
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    
    // Create an instance of the Solution class
    const solution = new Solution();
    // Perform level-order traversal
    const result = solution.levelOrder(root);
    
    console.log("Level Order Traversal of Tree:");
    // Printing the level order traversal result
    result.forEach(level => printArray(level));
})();
