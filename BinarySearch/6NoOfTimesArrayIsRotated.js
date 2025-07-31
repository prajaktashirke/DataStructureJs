let arr = [11, 13, 14, 15, 2, 4, 6, 8]
let idx = -1;
let N = arr.length;


const findMinIndex = () => {
    let left =0;
    let right = arr.length - 1;
    if(arr[left] < arr[right]) return 0;
    while(left <= right) {
        let mid = Math.floor(left + (right - left)/2);
    
        let next = (mid+1) % N;
        let prev = (mid + N - 1) %N;
        console.log("mid.......", arr[mid])
        if(arr[mid]<arr[prev] && arr[mid]<arr[next]) {
            console.log(mid);
            return mid;
        } else if(arr[mid]<arr[left]) {
            right = mid;
        } else left = mid;
    }
}

findMinIndex()