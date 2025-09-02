// Sum of 2 numbers

// Time Complexity: O(n^2)
const bruteForce = (arr, k) => {
}

// Time Complexity: O(2n)
const betterSolution = (arr) => {
    // using hash map
}

// Time Complexity: O(n)
const optimalSolution = (nums, target) => {
    // using 2 pointer
    let arr = nums.map((res,idx) => [idx,res]).sort((a,b) => a[1]-b[1]);
    let i=0;
    let j=arr.length-1;
    let ans = [];
    while(i<j) {
        let sum = arr[i][1] + arr[j][1];
        if(sum < target) i++;
        else if(sum > target) j--;
        else {
            ans[0]= arr[i][0];
            ans[1]=arr[j][0];
            return ans
        }
    }
    return ans;
}
let arr= [1,2,3,4,5,7,7,6];
console.log("BruteForce", bruteForce(arr, 14));
console.log("Better Solution", betterSolution(arr, 14));
console.log("Optimal solution", optimalSolution(arr, 14));