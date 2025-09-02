// Find longest subarray with sum k

// Time Complexity: O(n^3)
const bruteForce = (arr, k) => {
    let N = arr.length;
    let count = 0;

    for(let i=0; i<N; i++) {
        for(let j=i; j<N;j++) {
            let sum=0;
            for(let l=i; l<=j;l++) {
                sum += arr[l];
            }
            if(k === sum) {
                count = Math.max(count, j-i+1)
            }
        }
    }

    return count;

}

// Time Complexity: O(2n)
const betterSolution = (arr) => {
}

// Time Complexity: O(n)
const optimalSolution = (nums, k) => {
    let n = nums.length;
        let maxLen = 0;
        let left = 0, right = 0;
        let sum = nums[0];

        while (right < n) {
            while (left <= right && sum > k) {
                sum -= nums[left];
                left++;
            }
            if (sum === k) {
                maxLen = Math.max(maxLen, right - left + 1);
            }
            right++;
            if (right < n) sum += nums[right];
        }
        return maxLen;
}
let arr= [1,2,2,1,4,5,7,7,6];
console.log("BruteForce", bruteForce(arr, 6));
console.log("Better Solution", betterSolution(arr, 6));
console.log("Optimal solution", optimalSolution(arr, 6));