let arr = [1,2,3,4,5,6,7,8,9,10] // Assume this as infinite array
let target = 8;

const binarySearch = (start, end) => {
    while (start <= end) {
        let mid = Math.floor(start +(end-start)/2);

        if(arr[mid] === target) return mid;
        else if(arr[mid] < target) start = mid+1;
        else end = mid - 1;
    }
    return -1;
}

let left = 0;
let right = 1;
while(arr[right] < target) {
    left = right;
    right = right * 2;
}

console.log(binarySearch(left, right));