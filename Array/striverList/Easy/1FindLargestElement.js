// Find largest element in array

//O(n log n)
const bruteForce = (arr) => {
    let nums = arr.sort((a,b) => a-b);

    return nums[nums.length-1];
}

// O(n)
const optimalSolution = (arr) => {
    let maxNum = arr[0];
    for(let i=1; i<arr.length; i++) {
        if(maxNum < arr[i]) maxNum = arr[i];
    }
    return maxNum;
}

const arr = [2,6,3,5,7,9,0,10];
console.log("Brute Force", bruteForce(arr));
console.log("optimal solution", optimalSolution(arr));