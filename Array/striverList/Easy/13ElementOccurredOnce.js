// Find second largest element;

// Time Complexity: O(nlogn + n)
const bruteForce = (arr) => {
    let hash = new Array(8).fill(0);
    for(let i=0; i<arr.length; i++) {
        hash[arr[i]] = hash[arr[i]]+1;
    }

    for(let i=0; i<hash.length; i++) {
        if(hash[i] === 1) return i;
    }
}

// Time Complexity: O(2n)
const betterSolution = (arr) => {
    let hash = new Map();

    for(let i=0; i<arr.length; i++) {
        hash.set(arr[i], (hash.get(arr[i]) || 0) + 1)
    }
    let once = 0;
    hash.forEach((res,idx) => {
        if(res === 1){ 
            once = idx;
            return idx;
        };
    })
    return once;
}

// Time Complexity: O(n)
const optimalSolution = (arr) => {
    let xor = 0;
    for(let i=0; i<arr.length; i++) {
        xor ^= arr[i];
    }
    return xor;
}
let arr= [1,1,2,2,3,3,4,4,5,5,7,7,6];
console.log("BruteForce", bruteForce(arr));
console.log("Better Solution", betterSolution(arr));
console.log("Optimal solution", optimalSolution(arr));