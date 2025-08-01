let arr = "a b c d e f g h".split(" ");
let target = "f";

let UpperBound = () => {
    let left = 0;
    let right = arr.length-1;
    let idx = -1;
    while(left <= right) {
        let mid = Math.floor(left + (right-left)/2);

        if(arr[mid] === target) left = mid+1;
        else if(arr[mid] < target) {
            
            left = mid + 1;
        } else {
            idx = mid;
            right=mid-1;
        }
    }
    return idx;
}

console.log(UpperBound());