let arr = [2, 7, 8, 13, 16, 18 ];
let target = 12;
let left = 0;
let right = arr.length-1;
const binarySearch = () => {

    while(left <= right) {
        let mid = Math.floor(left + (right - left)/2);

        if(arr[mid] === target) return arr[mid];
        else if(arr[mid] < target) left = mid+1;
        else right = mid - 1;
    }
}

let binarySearchValue = binarySearch();

if(binarySearchValue) {
    console.log(binarySearchValue);
} else if (Math.min(Math.abs(arr[left] - target)< Math.abs(arr[right] - target))) {
    console.log(arr[left])
} else {
    console.log(arr[right])
}