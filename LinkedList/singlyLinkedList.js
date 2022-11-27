class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Add element at the end of the list
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = this.tail.next;
    }
    this.length += 1;
    return this.head;
  }

  // Remove element from the end of the list
  pop() {
    if (!this.head) return undefined;
    let cur = this.head;
    let temp = cur;
    while (temp.next) {
      cur = temp;
      temp = temp.next;
    }
    this.tail = cur;
    this.tail.next = null;
    this.length -= 1;
    if (this.length <= 0) {
      this.head = null;
      this.tail = null;
    }
  }

  // Shift remove from the front of the list
  shift() {
    if (!this.head) return undefined;
    const removeValue = this.head;
    this.head = removeValue.next;
    this.length -= 1;
    if (this.length <= 0) {
      this.tail = null;
    }
    // console.log("removedvalue", removeValue);
    return removeValue;
  }

  // unshift add element at the begining
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // get => retrieve node by its position
  get(index) {
    if (index > this.length || index < 0) {
      console.log(undefined);
      return undefined;
    }
    let counter = 0;
    let tempData = this.head;
    while (index != counter) {
      tempData = tempData.next;
      counter++;
    }
    console.log("get", tempData);
    return tempData;
  }

  // set => change value of node on specific position
  set(index, value) {
    const getValue = this.get(index);
    if (!getValue) {
      console.log("Not found");
      return "Not found";
    } else {
      getValue.val = value;
      return true;
    }
  }

  // insert => insert node at specific index.
  insert(index, value) {
    if (index == 0) {
      this.unshift(value);
      return true;
    } else if (index === this.length) {
      this.push(value);
      return true;
    } else {
      // const getValue = this.get(index);
      // if (!getValue) return false;
      const newNode = new Node(value);
      const pre = this.get(index - 1);
      const temp = pre.next;
      newNode.next = temp;
      pre.next = newNode;
      return true;
    }
  }
  //remove node from the specific position
  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index == 0) {
      this.shift();
      return true;
    }
    if (index === this.length - 1) {
      this.pop();
      return true;
    }
    let temp = this.head;
    let counter = 0;
    while (counter != index) {
      temp = temp.next;
      counter++;
    }
    const removedValue = temp.next;
    temp.next = removedValue.next;
    return removedValue;
  }

  // Reverse the linked list
  reverse() {
    let prev = null;
    let cur = this.head;
    while (cur) {
      let next = cur.next;
      prev = cur;
      cur = next;
    }
    this.head = prev;
  }

  // go through all the element.
  traversal() {
    let temp = this.head;
    while (temp) {
      console.log(temp.val);
      temp = temp.next;
    }
    console.log(this);
  }
}

const linkList = new SinglyLinkedList();
// Push
console.log("//////////////// PUSH /////////////////");
linkList.push("hello");
linkList.push("world");
linkList.push("Happy");
linkList.push("Birthday");
linkList.push("To");
linkList.push("You");
linkList.traversal();
// console.log("//////////////// END PUSH /////////////////");

// pop
console.log("//////////////// POP /////////////////");
linkList.pop();
linkList.pop();
linkList.pop();
linkList.traversal();
// console.log("//////////////// END POP /////////////////");

// shift
console.log("//////////////// SHIFT /////////////////");
linkList.shift();
linkList.shift();
linkList.shift();
linkList.traversal();
// console.log("//////////////// END SHIFT /////////////////");

// undefined
console.log(linkList.pop());
console.log(linkList.shift());

// unshift()
console.log("//////////////// UNSHIFT /////////////////");
linkList.unshift("world");
linkList.unshift("hello");
linkList.unshift("Birthday");
linkList.unshift("happy");
linkList.traversal();

// get();
console.log("//////////////// GET /////////////////");
linkList.get(1);
linkList.get(3);
linkList.get(6);
linkList.get(-1);

console.log("//////////////// SET /////////////////");
linkList.set(1, "Number at index 1");
linkList.set(-1, "Number at index 1");
linkList.set(10, "Number at index 1");
linkList.traversal();

console.log("//////////////// Insert At /////////////////");
linkList.insert(0, "first");
linkList.insert(1, "Third");
linkList.insert(10, 10);
linkList.traversal();

console.log("//////////////// Remove /////////////////");
linkList.remove(0);
linkList.remove(1);
linkList.remove(10);
linkList.traversal();

console.log("//////////////// reverse /////////////////");
linkList.reverse();
linkList.traversal();
