let arr =[5,8,10,20]
let N = arr.length;
const peekElement = () => {
    let left = 0;
    let right = arr.length-1;

    while(left <= right) {
        let mid = Math.floor(left + (right-left)/2)
        if(mid !== 0 && mid < N-1) {
            if(arr[mid]>=arr[mid-1] && arr[mid]>= arr[mid+1]) {
                return mid;
            } else if(arr[mid] < arr[mid-1]) right = mid-1;
            else left =mid+1
        } else {
            if(mid === 0){
                return arr[mid] > arr[mid+1]? mid: mid+1;
            } 
            if(mid === N-1) {
                return arr[mid] > arr[mid-1]? mid: mid-1;
            }
        }
    }
}
console.log(peekElement())