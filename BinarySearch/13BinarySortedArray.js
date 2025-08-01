let arr =[0,0,0,0,0,0,1,1,1,1,1,1,1]
let target =1;
const firstOcurrance = (left, right) => {
    let idx = -1;
    while(left<=right) {
        let mid = Math.floor(left + (right-left)/2);
        if(arr[mid] === target) {
            idx = mid;
            right = mid-1;
        } else if(arr[mid] < target) left = mid+1;
        else {
            right = mid -1;
        }
    }
    return idx;
}

let left = 0;
let right = 1;
while(arr[right] < target) {
    left = right;
    right = right *2;
}
console.log(left,"..........", right)
console.log(firstOcurrance(left, right))