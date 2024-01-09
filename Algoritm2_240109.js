// математическая прогрессия рекурсия
function S(n) {
  if (n <= 0) throw new Error("the number should be positive");
  if (n == 1) return n;
  return S(n - 1) + n;
}

console.log(S(5));

// математическая прогрессия
function progression(num) {
  let algProg = 0;
  for (let i = 0; i <= num; i++) {
    algProg = i + algProg;
  }
  return algProg;
}

// число фибоначчи (рекурсия)
function fibo(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibo(n - 1) + fibo(n - 2);
  }
}

// Поиск индекса в строго упорядоченном массиве (GPT Chat)
arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];

function binary(arr, num) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === num) {
      return mid; // Найден элемент, возвращаем его индекс
    } else if (arr[mid] < num) {
      left = mid + 1; // Искомый элемент находится в правой половине
    } else {
      right = mid - 1; // Искомый элемент находится в левой половине
    }
  }

  return console.log(`Элемент не найден в массиве`);

  // Поиск индекса в строго упорядоченном массиве (решение преподавателя)
  function binarySearch(arr, num) {
    let start = 0;
    let end = arr.length - 1;
    while (end >= start) {
      let mid = Math.floor((start + end) / 2);
      if (num > arr[mid]) {
        start = mid + 1;
      } else if (num < arr[mid]) {
        end = mid - 1;
      } else return mid;
    }
    return "The number you're looking for is not here";
  }

  console.log(binarySearch([10, 20, 30, 40, 50, 60, 70, 80, 90], 80));
}

// Поиск индекса в строго упорядоченном массиве методом рекурсии (GPT Chat)
function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
  if (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Найден элемент, возвращаем его индекс
    } else if (arr[mid] < target) {
      return binarySearchRecursive(arr, target, mid + 1, right); // Искомый элемент в правой половине
    } else {
      return binarySearchRecursive(arr, target, left, mid - 1); // Искомый элемент в левой половине
    }
  }

  return -1; // Элемент не найден в массиве
}
binarySearchRecursive(
  [10, 20, 30, 40, 50, 60, 70, 80, 90],
  60,
  (left = 0),
  (right = 8)
);
