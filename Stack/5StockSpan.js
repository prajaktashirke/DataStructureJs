// consecutive smaller and equal to before element
const stockSpanProblem = (arr) => {
    let ans = [];
    let stack = []; // [value, index]

    for(let i=0; i<arr.length; i++) {
        if(stack.length === 0) ans.push(-1)
        else if(stack[stack.length-1][0]<=arr[i]) {
            while(stack?.[stack.length-1]?.[0] <= arr[i]) stack.pop();
            ans.push(stack.length === 0? -1 : stack?.[stack.length-1]?.[1]);
        } else {
            ans.push(stack?.[stack.length-1]?.[1]);
        }
        stack.push([arr[i], i])
    }
    console.log(ans);
    return ans.map((res, ind) => ind-res);
}

let result = stockSpanProblem([100, 80, 60, 70, 60, 75, 80]); // [1,1,1,2,1,4,6]
console.log(result)