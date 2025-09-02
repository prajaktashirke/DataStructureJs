// Find second largest element;

// Time Complexity: O(nlogn + n)
const bruteForce = (arr, arr1) => {
    return [... new Set([...arr, ...arr1])]
}

// Time Complexity: O(2n)
const betterSolution = (arr) => {
}

// Time Complexity: O(n)
const optimalSolution = (arr, arr1) => {
    let n = arr.length;
    let m = arr1.length;
    const union = [];
    let i=0;
    let j=0;
    while(i<n && j<m) {
        if(arr[i] <= arr1[j]) {
            if(union.length == 0 || (union[union.length - 1] !== arr[i])) {
               union.push(arr[i]);
            } 
            i++; 
        }
        else {
            if(union.length == 0 || (union[union.length - 1] !== arr1[j])) {
                union.push(arr1[j]);
            }
            j++;
        }
    }
    while(i<n) {
        if(union.length == 0 || (union[union.length - 1] !== arr[i])) {
           union.push(arr[i]);
           i++; 
        }
    }
    while(j<m) {
        if(union.length == 0 || (union[union.length - 1] !== arr1[j])) {
           union.push(arr1[j]);
           j++; 
        }
    }
    return union;
}
let arr= [1,2,3,4,5,7,7,8];
let arr1 = [1,2,3,4,5,6,7,7]
console.log("BruteForce", bruteForce(arr, arr1));
console.log("Better Solution", betterSolution(arr));
console.log("Optimal solution", optimalSolution(arr, arr1));