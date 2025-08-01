let arr = [2,4,6,7,8,10,12,14,15];
let target = 13;

const LowerBound = () => {
    let left = 0; 
    let right = arr.length-1;
    let floor = -1;
    while(left<=right) {
        let mid = Math.floor(left +(right-left)/2);

        if(arr[mid] === target) {
            return mid;
        } else if(arr[mid]<target) {
            floor = mid
            left = mid+1;
        } else {
            right = mid-1;
        }
    }
    return floor;
}

console.log(LowerBound())