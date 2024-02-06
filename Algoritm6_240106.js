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

// let array = [6, 7, 1, 2, 9, 8, 3, 0, 10, 5];
console.log(quickSort(array));


function arrange(arr, start, end) {
    let pivot = arr[end];
    let index = start;
    for (let i = start; i < end; i++) {
        if (arr[i] < pivot) {
            let temp = arr[index];
            arr[index] = arr[i];
            arr[i] = temp;
            index++;
        }
    }
    let temp = arr[index];
    arr[index] = arr[end];
    arr[end] = temp;

    return index;
}

function quickSort(arr, start, end) {
    if (end <= start) return;
    let index = arrange(arr, start, end);
    quickSort(arr, start, index - 1);
    quickSort(arr, index + 1, end);
}

let array = [6, 7, 1, 2, 9, 8, 3, 0, 10, 5];

quickSort(array, 0, array.length - 1);

console.log(array);

// В данном массиве найти подмассив с максимальной суммой.
arr2 = [3, 9, -5, 6, -2, -10, 9, 12, 1, -2]

function maxSubarray(arr2) {
    let maxSoFar = arr2[0];
    let maxEnding = arr2[0];
    for (let i = 1; i < arr.length; i++) {
        if (maxEnding < 0) maxEnding = arr[i];
        else maxEnding = maxEnding + arr2[i];
        if (maxEnding > maxSoFar) maxSoFar = maxEnding;
    }
    return maxSoFar;
}

let arr2 = [3, 9, -5, 6, -2, -10, 9, 12, 1, -2]
console.log(maxSubarray(arr2));