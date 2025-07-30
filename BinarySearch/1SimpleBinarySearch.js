// binary search main logic

let arr = [1,2,3,4,5,6,7,8];
let target = 4;

let binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length-1;
    while(left<=right) {
        let mid = Math.floor(left +((right - left)/2));
        if(arr[mid] === target) return mid;
        if(arr[mid] > target) right = mid -1;
        if(arr[mid] < target) left = mid + 1;
    }
    return -1;
}

console.log(binarySearch(arr, target));