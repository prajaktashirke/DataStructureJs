let arr = [7, 5,9,2,8];

const selectionSort = (nums) => {
    for(let i=0; i< nums.length; i++) {
        let min = i;

        for(let j=i; j<nums.length; j++) {
            if(nums[j] < nums[min]) {
                min = j;
            }
        }
        [nums[i], nums[min]] = [nums[min], nums[i]];
    }
    return nums;
}

console.log(selectionSort(arr));