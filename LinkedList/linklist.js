class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// define LL class

class LinkList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  //O(1)
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  print() {
    if (this.isEmpty()) {
      console.log("list is empty");
    } else {
      let curr = this.head;
      let list = "";
      while (curr) {
        list = list + curr.value + " ";
        curr = curr.next;
      }
      console.log(list);
    }
  }

  //   o(n)
  append(value) {
    let newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = newNode;
      //   this.head = curr;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      console.log("Invalid index");
    } else if (index === 0) {
      this.prepend(value);
    } else if (index === this.size) {
      this.append(value);
    } else {
      const newNode = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      newNode.next = prev.next;
      prev.next = newNode;
      this.size++;
    }
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      console.log("Invalid index");
    } else if (index === 0) {
      let deleteNode = this.head;
      this.head = this.head.next;
      this.size--;
      console.log(deleteNode.value);
    } else if (index > 0) {
      let deleteNode;
      let curr = this.head;
      for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
      }
      deleteNode = curr.next;
      curr.next = deleteNode.next;
      this.size--;
      console.log(deleteNode.value);
    }
  }
}

const list = new LinkList();
console.log("list is empty", list.isEmpty());
console.log("list size", list.getSize());
// list.print();
list.prepend(10);
// list.print();
list.prepend(20);
list.prepend(30);
list.print();
list.append(10);
// list.print();
list.append(20);
list.append(30);
list.print();

// insert
list.insert(40, 0);
list.print();

list.insert(40, 7);
list.print();

list.insert(0, 4);
list.print();

list.insert(0, -10);
console.log("list size", list.getSize());

list.removeFrom(0);
list.print();
console.log("list size", list.getSize());
list.removeFrom(3);
list.print();
console.log("list size", list.getSize());
