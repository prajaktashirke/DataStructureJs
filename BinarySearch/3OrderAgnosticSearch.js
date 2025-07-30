// Find if the arr is ascending or desceding and then get the target index

let arr = [1,2,3,4,5,6,7,8,9,10];
let target = 4;

let ascendingBinarysearch = (nums, tar) => {
    let left = 0;
    let right = nums.length - 1;

    while(left <= right) {
        let mid = Math.floor(left + ((right - left)/2));

        if(nums[mid] === tar) return mid;
        else if (nums[mid] > target) right = mid -1;
        else if (nums[mid] < target) left = mid + 1;
    }
    return -1;
}

let descedingBinarySearch = (nums, tar) => {
    let left = 0; 
    let right = nums.length - 1;

    while(left <= right) {
        let mid = Math.floor(left+((right-left)/2));

        if(nums[mid] == target) return mid;
        else if(nums[mid] < target) right = mid - 1;
        else if(nums[mid] > target) left = mid + 1;
    }
    return -1;
}

let binarySearch = (arr, tar) => {
    if(arr[0]<arr[1]) return ascendingBinarysearch(arr, tar)
        return descedingBinarySearch(arr,tar);
}

console.log(binarySearch(arr, target));
console.log(binarySearch(arr.reverse(), target));