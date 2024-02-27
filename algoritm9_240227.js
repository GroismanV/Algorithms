//push method
//adds an element in the end
//returns the new length of the array

class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items = [...this.items, value];
    return this.items.length;
  }
}

let stack = new Stack();
stack.push(10);
stack.push(20);

console.log(stack.push(30));

// function Func(...args) {
//   console.log(args);
// }

// Func(1, 2, 3, 4, 60, 40);

class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items = [...this.items, value];
    return this.items.length;
  }
  push(...values) {
  this.items = [...this.items, ...values];
  return this.items.length;
}


// Переделайте метод push таким образом чтобы можно было сразу добавлять больше одного элемента



// Создайте метод pop() который удаляет последний элемент и возвращает последний элемент.

pop() {
  let lastElement = this.items[this.items.length - 1];
  this.items.length = this.items.length - 1;
  return lastElement;
  }
  
  // возвращает длину массива
itemsLength() {
  return this.items.length;
}
//  проверка на пустой массив
isEmpty() {
  if (this.items.length == 0) return true;
  else return false;
  }
}

