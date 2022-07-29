class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length) {
      return this.items.pop();
    }
    return [];
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

const stack = new Stack();
console.log(stack.isEmpty());
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(7);
stack.push(8);
stack.print();
console.log(stack.size());
stack.pop();
stack.pop();
stack.print();
console.log(stack.peek());
