function binaryToDecimal(num2) {
    let num10 = 0;
    for (let i = num2.length - 1; i >= 0; i--) {
        num10 += Math.pow(2, i) * Number(num2[num2.length - 1 - i]);
    }
    return num10;
}

function decimalToBinary(num10) {
    let power = 0;
    while (num10 > Math.pow(2, power)) {
        power++;
    }
    power--;
    let array = [];
    for (let i = power; i >= 0; i--) {
        if (Math.pow(2, i) <= num10) {
            array.push(1);
            num10 = num10 - Math.pow(2, i);
        } else array.push(0);
    }
    return array.join("");
}

let num10 = 199;
console.log(decimalToBinary(num10));