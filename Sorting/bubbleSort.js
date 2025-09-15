const bubbleSort = (arr) => {

    for(let i =arr.length-1; i>=0; i--) {
        let isSwap = false;
        for(let j=0; j<i; j++) {
            if(arr[j+1] < arr[j]) {
                [arr[j+1], arr[j]] = [arr[j], arr[j+1]];
                isSwap = true;
            }
        }
        if(!isSwap) break;
    }
    return arr;
}

console.log(bubbleSort([13,46,52,24]))