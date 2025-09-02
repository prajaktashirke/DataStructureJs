// Move all the zeros to the end of the array.

// Time Complexity: O(n + n)
const bruteForce = (arr) => {
   let nonZeroArray = arr.filter(res => res>0);
   for(let i=0;i<arr.length;i++) {
    arr[i] = nonZeroArray[i] || 0;
   }
   return arr;
}

// Time Complexity: O(2n)
const betterSolution = (arr) => {
}

// Time Complexity: O(n)
// Space Complexity: O(1)
const optimalSolution = (arr) => {
    let j=-1;
    const swap = (a,b) => [arr[a], arr[b]] = [arr[b], arr[a]];

    for(let i=0; i<arr.length;i++) {
        if(arr[i] == 0) {
            j=i;
            break;
        }
    }
    if(j == -1) return arr;

    for(let i=j+1; i<arr.length;i++) {
        if(arr[i] !== 0) {
            swap(i,j);
            j++;
        }
    }
    return arr;
}
let arr= [1,1,0,2,3,2,0,0,4,5,1];
let arr1= [1,1,0,2,3,2,0,0,4,5,1];

console.log("BruteForce", bruteForce(arr));
console.log("Better Solution", betterSolution(arr));
console.log("Optimal solution", optimalSolution(arr1));