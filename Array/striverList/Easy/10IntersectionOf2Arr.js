// Find second largest element;

// Time Complexity: O(nlogn + n)
const bruteForce = (arr, arr1) => {
    let visited = new Array(arr1.length).fill(0);
    const intersect = [];
    console.log(visited)
    for(let i=0;i<arr.length;i++) {
        for(let j=0; j<arr1.length; j++) {
            if(arr[i] == arr1[j] && visited[j] == 0) {
                intersect.push(arr1[j]);
                visited[j] = 1;
            }
            if(arr[j]>arr[i]) break;
        }
    }
    return intersect;

}

// Time Complexity: O(2n)
const betterSolution = (arr) => {
}

// Time Complexity: O(n+m)
const optimalSolution = (arr, arr1) => {
    let intersect = [];
    let n = arr.length;
    let m = arr1.length;
    let i=0;
    let j = 0;

    while(i<n && j<m) {
        if(arr[i]< arr1[j]) i++;
        else if(arr1[j]< arr[i]) j++;
        else {
            intersect.push(arr1[j]);
            i++; j++;
        }
    }
    return intersect;
}
let arr= [1,2,3,5,6,7,7];
let arr1= [1,3,4,6,7];

console.log("BruteForce", bruteForce(arr, arr1));
console.log("Better Solution", betterSolution(arr));
console.log("Optimal solution", optimalSolution(arr, arr1));