// Left Rotate array by one place

// Time Complexity: O(n)
// Space complexity : O(1)
const optimalSolution = (arr) => {
    let temp = arr[0];
    for(let i=1; i<arr.length; i++) {
        arr[i-1] = arr[i];
    }
    arr[arr.length-1] = temp;
    return arr;
}
let arr= [1,2,3,4,5,7,7,6];
console.log("Optimal solution", optimalSolution(arr));