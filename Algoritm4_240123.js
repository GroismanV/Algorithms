function merge(arr1, arr2) {
    index1 = 0;
    index2 = 0;
    let arr = [];
    while (index1 < arr1.length && index2 < arr2.length) {
        if (arr1[index1] < arr2[index2]) {
            arr.push(arr1[index1++]);
        } else arr.push(arr2[index2++]);
    }

    while (index1 < arr1.length) {
        arr.push(arr1[index1++]);
    }

    while (index2 < arr2.length) {
        arr.push(arr2[index2++]);
    }

    return arr;
}

let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6, 7, 8, 9];
console.log(merge(arr1, arr2));


