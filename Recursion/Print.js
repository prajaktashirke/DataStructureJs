let n = 5;


const print1toN = (n) => {
    if(n === 0) return 0;
    console.log(n);
    print1toN(n-1);
}

print1toN(n);
console.log("////////////////////////////////////")

const printNto1 = (n) => {
    if(n === 0) return 0;
    let v = print1toN(n-1);
    console.log(v);
}
printNto1(n)
console.log("////////////////////////////////////")

const factorial = (n) => {
    if(n<=1) return 1;
  return factorial(n-1) * n;
}

console.log(factorial(n));
console.log("////////////////////////////////////")
