// Missing numbers

// Time Complexity: O(n * n)
const bruteForce = (arr) => {
    for(let i=1; i <=arr.length; i++) {
        let flag = 0;
        for(let j=0; j<arr.length; j++) {
            if(arr[j] === i) {
                flag = 1;
                break;
            }
        }
        if(flag == 0){
            return i;
        }
    }
}

// Time Complexity: O(2n)
// Space complexity: O(n)
const betterSolution = (arr) => {
    let hash = new Map();

    for(let i=0; i<arr.length; i++) {
        hash.set(arr[i], 1);
    }
    
    for (let i=1; i<=arr.length;i++) {
        if(!hash.has(i)) return i;
    }
}

// Time Complexity: O(n)
// Space complexity: O(1)
const optimalSolution = (arr) => {
    let n = arr.length+1;
    let count = arr.reduce((acc, curr) => acc+=curr)
    let sum = (n *(n+1))/2;
    return sum-count;
}

const XORSolution = (arr) => {
    let xor1= 0; let xor2=0;
    let N =arr.length;
    for(let i=0; i<N-1;i++) {
        xor2 = xor2 ^ arr[i];
        xor1 = xor1 ^ i+1
    }
    xor1 ^= N; 
    return xor1^xor2;
}
let arr= [1,2,3,4,5,7];
console.log("BruteForce", bruteForce(arr));
console.log("Better Solution", betterSolution(arr));
console.log("Optimal solution", optimalSolution(arr));
console.log("Xor solution", XORSolution(arr));