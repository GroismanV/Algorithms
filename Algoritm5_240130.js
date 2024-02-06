// быстрая сортировка с использованием опорного элемента
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

let arr = [11, 4, 3, 0, 10, 6, 7, 8, 2, 5];
console.log(quickSort(array));


let array = [4, 3, 6, 7, 0, 1, 8, 9, 5];
let index = 0;
let pivot = array[array.length - 1];
for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
        let temp = array[i];
        array[i] = array[index];
        array[index] = temp;
        index++;
    }
}
let temp = array[array.length - 1];
array[array.length - 1] = array[index];
array[index] = temp;

console.log(array);
