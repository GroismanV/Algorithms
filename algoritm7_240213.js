// class Person {
//     constructor(a, b, c, d) {
//         this.firstName = a;
//         this.lastName = b;
//         this.age = c;
//         this.profession = d;
//     }

//     email() {
//         return `${this.firstName}.${this.lastName}@gmail.com`;
//     }

//     increaseAge() {
//         this.age = this.age + 1;
//         return this.age + 1;
//     }
// }

// let person1 = new Person("John", "Smith", 34, "athlete");
// let person2 = new Person("Joe", "Rogan", 56, "commentator");

// console.log(person1.age);
// console.log(person1.increaseAge());
// console.log(person1.age);


// ++++++++++++++++++++++++++++++


class Numbers {
    constructor(a, b) {
        this.num1 = a;
        this.num2 = b;
    }

    add() {
        return this.num1 + this.num2;
    }

    subtract() {
        return this.num1 - this.num2;
    }
}

let numbers = new Numbers(5, 7);

console.log(numbers.subtract());

//++++++++++++++++++++++


class Wagon {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Train {
    constructor(value) {
        this.root = new Wagon(value);
    }

    addWagon(value) {
        let current = this.root;
        while (current.next != null) {
            current = current.next;
        }
        current.next = new Wagon(value);
    }
    count() {
        let current = this.root;
        let sum = 1;
        while (current.next != null) {
            current = current.next;
            sum++;
        }
        return sum;
    }
    // Создать метод, который проверяет существует ли вагон с определенным количеством людей.

    isWagon(value) {
        let current = this.root;
        while (current != null) {
            if (value == current.value) return true;
            current = current.next;
        }
        return false;
    }
    // Создать метод, который возвращает индекс вагона с определенным количеством людей или сообщение, что такого вагона нет.

    wagonIndex(value) {
        let index = 1;
        let current = this.root;
        while (current != null) {
            if (value == current.value) return index;
            current = current.next;
            index++;
        }
        return "the wagon you're looking for is not here";
    }
}


let train = new Train(10);
train.addWagon(20);
train.addWagon(30);
train.addWagon(40);

console.log(train.root)

console.log(train.root.next)
console.log(train.root.next.next.next.next);


