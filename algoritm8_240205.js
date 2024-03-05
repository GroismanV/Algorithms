function greedyCoins(arr, num) {
    let remaining = num;
    let count = 0;
    for (let x of arr) {
        while (remaining >= x) {
            remaining = remaining - x;
            count++;
        }
    }
    if (remaining > 0) return "we couldn't get anything";
    return count;
}

let array = [25, 10, 5, 1];
let number = 63;
console.log(greedyCoins(array, number));


// == вариаант цикла для массивов
// let array = [25, 10, 5, 1];

// for (let x of array) {
//     console.log(x);
// }

let array = [
    [0, 5],
    [1, 2],
    [3, 4],
];

array.sort((a, b) => a[1] - b[1]);
console.log(array);
function activities(arr) {
    let picked = [];
    arr.sort((a, b) => a[1] - b[1]);
    picked.push(arr[0]);
    let end = arr[0][1];
    for (let i = 1; i < array.length; i++) {
        if (end <= array[i][0]) {
            picked.push(array[i]);
            end = array[i][1];
        }
    }
    return picked;
}

let array = [
    [1, 2],
    [0, 2],
    [0, 5],
    [3, 6],
    [3, 7],
    [4, 8],
    [9, 10],
    [12, 14],
];

console.log(activities(array));

function maxMult(arr) {
    let mult = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 0) mult = mult * arr[i];
    }
    if (mult > 0) return mult;

    let minimum = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0 && arr[i] > minimum) minimum = arr[i];
    }
    return mult / minimum;
}

let array3 = [20, 1, 3, -5, 0, 14, -2, -6, 8];
console.log(maxMult(array3));