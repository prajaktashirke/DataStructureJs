let arr = [2,4,6,7,8,10,12,14,15];
let target = 13;

const UpperBound = () => {
    let left = 0; 
    let right = arr.length-1;
    let floor = -1;
    while(left<=right) {
        let mid = Math.floor(left +(right-left)/2);

        if(arr[mid] === target) {
            return mid;
        } else if(arr[mid]<target) {
            left = mid+1;
        } else {
            floor = mid
            right = mid-1;
        }
    }
    return floor;
}

console.log(UpperBound())