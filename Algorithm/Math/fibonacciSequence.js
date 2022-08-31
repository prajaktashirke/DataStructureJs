const fibonacciSeq = (n, arr = []) => {
  if (n === 0) {
    arr = [];
  } else if (n === 1) {
    arr = [0];
  } else {
    arr = [0, 1];
    for (let i = 2; i < n; i++) {
      arr[i] = arr[i - 1] + arr[i - 2];
    }
  }
  console.log(arr);
  return arr;
};
fibonacciSeq(19);
fibonacciSeq(1);
fibonacciSeq(2);
fibonacciSeq(3);
fibonacciSeq(6);
