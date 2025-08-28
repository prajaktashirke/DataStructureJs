// Find second largest element;

// O(nlogn + n)
const bruteForce = (arr) => {
    let n = arr.length-1;
    let sortedArr = arr.sort((a,b) => a-b);
    const largest = sortedArr[n];
    for(let i =n-1; i>=0;i--) {
        if(largest > sortedArr[i]) return sortedArr[i];
    }
    return -1;
}

// O(2n)
const betterSolution = (arr) => {
     let largest = arr[0];
     let n = arr.length-1;
     for(let i=1;i<n;i++) {
        if(largest< arr[i]) largest = arr[i];
     }
     let secondLargest = arr[0];

     for(let i=0;i<n;i++) {
        if(arr[i] > secondLargest && arr[i] != largest) secondLargest=arr[i];
     }
     return secondLargest;
}

// O(n)
const optimalSolution = (arr) => {
    let largest = arr[0];
    let secondLargest = -1;
    let n = arr.length-1;

    for(let i=0;i<n;i++) {
        if(arr[i]> largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if(secondLargest< arr[i]) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}
let arr= [1,2,3,4,5,7,7,6];
console.log("BruteForce", bruteForce(arr));
console.log("Better Solution", betterSolution(arr));
console.log("Optimal solution", optimalSolution(arr));