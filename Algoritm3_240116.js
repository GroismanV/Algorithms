//Ханойская башня

function H(n, A, C, B) {
    if (n == 1) return A + C + " ";
    return H(n - 1, A, B, C) + A + C + " " + H(n - 1, B, C, A);
}

console.log(H(10, "A", "C", "B"));



arr1 = [1, 3, 5, 8, 10]
arr2 = [2, 4, 7, 8, 11, 13, 14]
function merge(arr1, arr2) {
    let i = 0;
    let j = 0;
    let arr = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            arr.push(arr1[i++]);
        } else {
            arr.push(arr2[j++]);
        }
    }
    while (i < arr1.length) {
        arr.push(arr1[i++]);
    }
    while (j < arr2.length) {
        arr.push(arr2[j++]);
    }

    return arr;
}

let array1 = [1, 2, 5, 8, 10];
let array2 = [3, 4, 7, 8, 11, 13, 14];

console.log(merge(array1, array2));