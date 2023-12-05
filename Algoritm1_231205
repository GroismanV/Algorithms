for (let i = 0; i <= 5; i++) {
  if (i % 2 == 0) console.log(i + " is an even number");
  else console.log(i + " is an odd number");
}

// Максимальный элемент
function findMax(arr) {
  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
}
// Минимальный элемент
function findMin(arr) {
  let minElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minElement) {
      minElement = arr[i];
    }
  }
  return minElement;
}

let array = [0, 10, 20, 30, 40, 50];

for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    console.log("i=" + array[i], "j=" + array[j]);
  }
}

// Переделайте присланный вам код таким образом, чтобы на экран выводились только те пары, которые дают в сумму 50.
let array = [0, 10, 20, 30, 40, 50];

for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (arrау[i] + arrау[j] === 50) {
      console.log(arrау[i] + " " + arrау[j] + "в сумме50");
    }
  }
}

// Создать функцию, которая принимает два аргумента: массив и число, которому должна равняться сумма пар нашего массива.

function sum(array, num) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] == num)
        console.log("i=" + array[i], "j=" + array[j]);
    }
  }
}

let arr = [0, 10, 20, 30, 40, 50];
sum(arr, 40);

let a = 5;
let b = 6;
// 1 вариант 
// let temp = a;
// a = b;
// b = temp;
// 2 вариант
// [a,b]=[b,a]
let array = [50, 40, 30, 20, 10];

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length - 1 - i; j++) {
    if (array[j] > array[j + 1]) {
      let temp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = temp;
    }
  }
}

console.log(array);
/* Внешний цикл for с переменной i выполняется для каждого элемента массива. Он используется для прохода по массиву и сравнения каждого элемента с последующими.

Внутренний цикл for с переменной j также выполняется для каждого элемента, но в пределах массива, который уменьшается на i элементов с конца. Это сделано потому, что после каждой итерации внешнего цикла наименьший элемент уже находится на своем месте, и его необходимо исключить из рассмотрения.

Внутри второго цикла происходит сравнение элементов. Если элемент array[j] больше элемента array[j + 1], то они меняются местами. Этот шаг выполняется для сортировки элементов в порядке возрастания.

После завершения обоих циклов и выполнения всех сравнений и обменов, массив будет отсортирован в порядке возрастания.

Наконец, сортированный массив выводится в консоль с помощью console.log(array);.

В результате выполнения этого кода в консоли будет выведен отсортированный массив чисел, который был изначально передан в переменную array. */
