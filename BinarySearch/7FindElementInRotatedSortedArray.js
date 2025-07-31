let arr = [11, 13, 14, 15, 2, 4, 6, 8]
let target = 4;
let idx = -1;
let N = arr.length;

const findMinIndex = () => {
    let left = 0;
    let right = N;
    if(arr[left] < arr[right]) return 0;

    while(left <= right) {
        let mid = Math.floor(left + (right - left)/2);
        let next = (mid + 1) %N;
        let prev = (mid + N - 1)%N

        if(arr[mid]<arr[prev] && arr[mid]<arr[next]) {
            return mid;
        } else if(arr[mid] < arr[left]) {
            right =mid;
        } else left = mid;
    }
}

const binarySearch = (nums, left, right) => {
    while(left <=right) {
        let mid = Math.floor(left + (right - left)/2);
        if(nums[mid] === target) {
            return mid;
        } else if(nums[mid] < target) {
            left = mid+1;
        } else right = mid - 1;
    }
    return -1;
}

let mixInd = findMinIndex();
let firstSearch = binarySearch(arr, 0, mixInd-1);
let secondSearch = binarySearch(arr, mixInd, N-1);

console.log(mixInd,".........", firstSearch,"......", secondSearch)
if(firstSearch>=0) console.log(firstSearch);
else if(secondSearch >= 0) console.log(secondSearch);
else -1;