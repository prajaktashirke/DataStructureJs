let arr = [10, 20, 30, 50, 40, 60];
let target = 40;
let left=0;
let right=arr.length-1;
while(left<=right){
    let mid = Math.floor(left+(right-left)/2);

    if(arr[mid] === target) {console.log(mid); return;}
    else if(mid-1>= left && arr[mid-1]===target) {console.log(mid-1);return mid-1}
    else if(mid+1<= right && arr[mid+1]===target) {console.log(mid+1);return mid+1}
    else if(arr[mid+1]>target) left=mid+2;
    else right=mid-2;
}