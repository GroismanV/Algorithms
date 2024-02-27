class Stack {
  constructor() {
    this.items = [];
  }

  push(...values) {
    this.items = [...this.items, ...values];
    return this.items.length;
  }
  pop() {
    if (this.isEmpty())
      throw new Error("You can't remove anything from an empty array");
    let lastElement = this.items[this.items.length - 1];
    this.items.length = this.items.length - 1;
    return lastElement;
  }

  itemsLength() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length == 0;
  }

  hasElement(value) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] == value) return true;
    }
    return false;
  }

  findMax() {
    let max = this.items[0];
    for (let i = 1; i < this.items.length; i++) {
      if (this.items[i] > max) max = this.items[i];
    }
    return max;
  }

  findMin() {
    let min = this.items[0];
    for (let i = 1; i < this.items.length; i++) {
      if (this.items[i] < min) min = this.items[i];
    }
    return min;
  }

  unshift(...values) {
    this.items = [...values, ...this.items];
    return this.items.length;
  }

  shift() {
    if (this.isEmpty())
      throw new Error("You can't remove anything from an empty array");
    let firstElement = this.items[0];
    this.items = this.items.slice(1);
    return firstElement;
  }
}

let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30, 40, 50);

console.log(stack.findMin());
