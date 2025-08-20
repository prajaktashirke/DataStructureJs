const nearestGreaterToLeft = (arr) => {
    let stack = [];
    let ans = [];
    for(let i=0; i<arr.length;i++) {
        if(stack.length === 0) ans.push(-1)
        else if(stack[stack.length-1] < arr[i]) {
            while(stack[stack.length-1] < arr[i]) 
                stack.pop();
            ans.push(stack.length === 0? -1:stack[stack.length-1])
        } else {
            ans.push(stack[stack.length-1])
        }
        stack.push(arr[i])
    }
    return ans;
}

const result = nearestGreaterToLeft([3,8,5,4,6])
console.log(result);