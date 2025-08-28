// Remove duplicate Element

// Time Complexity: O(nlogn + n)
const bruteForce = (arr) => {
    let setData = [... new Set(arr)];
    console.log("setData", setData);
    for(let i=0; i<setData.length; i++) {
        console.log(setData[i])
        arr[i] = setData[i];
    }
    return arr;
}


// Time Complexity: O(n)
const optimalSolution = (arr) => {
    // 2 pointer;
    let j = 0;
    let i=0;
    while(i>j) {
        if(arr[i] !=arr[j]){
            arr[j] = arr[i];
            j++;
        }
        i++;
    }
    return arr;
}
let arr= [1,2,3,4,5,7,7,6];
console.log("BruteForce", bruteForce(arr));
console.log("Optimal solution", optimalSolution(arr));