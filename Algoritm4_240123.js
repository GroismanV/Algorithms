// function merge(arr1, arr2) {
//     index1 = 0;
//     index2 = 0;
//     let arr = [];
//     while (index1 < arr1.length && index2 < arr2.length) {
//         if (arr1[index1] < arr2[index2]) {
//             arr.push(arr1[index1++]);
//         } else arr.push(arr2[index2++]);
//     }

//     while (index1 < arr1.length) {
//         arr.push(arr1[index1++]);
//     }

//     while (index2 < arr2.length) {
//         arr.push(arr2[index2++]);
//     }

//     return arr;
// }

// let arr1 = [1, 3, 5];
// let arr2 = [2, 4, 6, 7, 8, 9];
// console.log(merge(arr1, arr2));

function binarySort(arr) {
    let countZeros = 0;
    let countOnes = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) countZeros++;
        else if (arr[i] == 1) countOnes++;
    }
    for (let i = 0; i < countZeros; i++) {
        arr[i] = 0;
    }
    for (let i = countZeros; i < countZeros + countOnes; i++) {
        arr[i] = 1;
    }
    for (let i = countZeros + countOnes; i < arr.length; i++) {
        arr[i] = 2;
    }
    return arr;
}

let array = [0, 1, 1, 1, 2, 2, 0, 1, 0, 1];
console.log(binarySort(array));

//найти лишнее повторяющееся число в упорядоченном возрастающем массиве.
function binarySort(arr) {
    let totalSum = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        totalSum += arr[i];
    }
    for (let i = 1; i < arr.length; i++) {
        sum += i;
    }
    return totalSum - sum;
}

let array = [1, 2, 2, 3, 4];
console.log(binarySort(array));




