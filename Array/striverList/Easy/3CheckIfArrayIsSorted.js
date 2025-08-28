// Check if array is sorted.

// Time Complexity: O(n)
const optimalSolution = (arr) => {
    let n = arr.length;
    for(let i=1;i<n;i++) {
        if(arr[i-1]> arr[i]) return false;
    }
    return true;
}
let arr= [1,2,3,4,5,7,7,6];
let arr2= [1,2,3,4,5,7,7,8];

console.log("Optimal solution", optimalSolution(arr));
console.log("Optimal solution", optimalSolution(arr2));
