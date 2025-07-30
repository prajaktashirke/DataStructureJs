let arr = [2, 4,10,10,10, 18, 20];
let target = 10;
let count = 0;
const firstOcurrance = (nums, tar) => {
    let left = 0;
    let right = nums.length - 1;
    let firstOcc = -1;
    while(left<=right) {
        let mid = Math.floor(left + ((right-left)/2))
        if(nums[mid] === tar) {
            firstOcc = mid;
            right = mid -1;
        }
        else if(nums[mid] < tar) left = mid + 1;
        else if(nums[mid] > tar) right = mid - 1;
    }
    return firstOcc;
}

let lastOccurance = (nums, tar) => {
    let left = 0; 
    let right = nums.length - 1;
    let lastOccurance = -1;
    while(left <= right) {
        let mid = Math.floor(left +((right - left)/2));
        if(nums[mid] == tar) {
            lastOccurance = mid;
            left = mid + 1;
        } else if(nums[mid] < tar) left = mid+1;
        else if(nums[mid] > tar) right = mid - 1;
    }
    return lastOccurance;
}

console.log(lastOccurance(arr, target) - firstOcurrance(arr, target) + 1);