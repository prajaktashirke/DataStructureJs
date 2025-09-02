// Left rotate array by d element

// Time Complexity: O(d + n)
// space complexity: O(d)
const bruteForce = (arr, d) => {
    let N = arr.length;
    d = d%N;

    let temp = arr.slice(0,d);
    console.log(temp, arr);
    for(let i = d; i<N; i++) {
        arr[i-d] = arr[i];
    }

    for(let i=N-d; i<N; i++) {
        console.log(i,"...........", i-(N-d))
        arr[i] = temp[i-(N-d)];

    }
    return arr;
}

// Time Complexity: O(2n)
const betterSolution = (arr) => {
}

// Time Complexity: O(n)
const optimalSolution = (arr, d) => {
    const reverse = (k, j) => {
        while (k < j) {
            [arr[k], arr[j]] = [arr[j], arr[k]];
            k++;
            j--;
        }
         return arr;
    }
    let n = arr.length-1;
    console.log("data", reverse(0, d-1));
    console.log(reverse(d, arr.length-1));
    return arr.reverse();

}
let arr= [1,2,3,4,5,7,7,6];
let arr1= [1,2,3,4,5,7,7,6];

console.log("BruteForce", bruteForce(arr, 5));
console.log("Better Solution", betterSolution(arr));
console.log("Optimal solution", optimalSolution(arr1, 5));