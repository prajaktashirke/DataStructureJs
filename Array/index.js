const arr = [1, 2, 3, 4, "praju"];
arr.push(5);
arr.unshift(0);

arr.pop();
arr.shift();

for (let items of arr) {
  console.log(items);
}
