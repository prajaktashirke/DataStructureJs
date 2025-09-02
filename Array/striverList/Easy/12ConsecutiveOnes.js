// Find second largest element;

// Time Complexity: O(nlogn + n)
const bruteForce = (arr) => {
}

// Time Complexity: O(2n)
const betterSolution = (arr) => {
}

// Time Complexity: O(n)
const optimalSolution = (arr) => {
    let max=0;
    let count = 0;
    for(let i=0; i<arr.length; i++) {
        if(arr[i] === 1) count++
        else {
            if(max< count) max = count;
            count = 0;
        }
    }
    return max;
}
let arr= [1,1,0,1,1,1,0,1];
console.log("BruteForce", bruteForce(arr));
console.log("Better Solution", betterSolution(arr));
console.log("Optimal solution", optimalSolution(arr));