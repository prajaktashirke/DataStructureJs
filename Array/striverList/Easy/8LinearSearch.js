// Find second largest element;

// Time Complexity: O(nlogn + n)
const bruteForce = (arr) => {
}

// Time Complexity: O(2n)
const betterSolution = (arr) => {
}

// Time Complexity: O(n)
const optimalSolution = (arr, k) => {
    for(let i=0; i<arr.length; i++)
        if(arr[i] === k) return i
    return -1
}
let arr= [1,2,3,4,5,7,7,6];
console.log("BruteForce", bruteForce(arr));
console.log("Better Solution", betterSolution(arr));
console.log("Optimal solution", optimalSolution(arr,5));