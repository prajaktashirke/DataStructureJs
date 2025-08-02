const arr = [1,3,8,12,4,2]
const target = 4;

// peek element
const findPeekElement = () => {
    let left=0;
    let right = arr.length -1;

    while(left <= right) {
        let mid = Math.floor(left + (right-left)/2);
        if(mid !== 0 || mid!==arr.length-1) {
            if(arr[mid]>arr[mid-1] && arr[mid]>arr[mid+1]) {
                return mid;
            } else if(arr[mid]<arr[mid-1]) right = mid-1;
            else left=mid+1
        } else {
            if(mid===0) {
                return arr[mid]<arr[mid+1]?  mid+1:mid
            } else{
                return arr[mid] < arr[mid-1]? mid-1:mid
            }
        }
    }
}

//binary search ascending
const binarySearchAsc=(left, right) => {
    while(left<=right) {
        let mid = Math.floor(left + (right-left)/2);
        if(arr[mid] === target) return mid;
        else if(arr[mid] < target) left = mid+1;
        else right = mid-1;
    }
    return -1;
}

// binary search descending
const binarySearchDeasc=(left, right) => {
    while(left<=right) {
        let mid = Math.floor(left + (right-left)/2);
        if(arr[mid] === target) return mid;
        else if(arr[mid] > target) left = mid+1;
        else right = mid-1;
    }
    return -1
}

let peekEle = findPeekElement();

let arr1= binarySearchAsc(0, peekEle-1);
let arr2 = binarySearchDeasc(peekEle+1, arr.length-1);

console.log(arr1===-1?arr2:arr1);


