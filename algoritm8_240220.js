// Этот код представляет собой реализацию простой структуры данных - односвязного списка.В данном случае, это представление поезда, где каждый вагон связан с последующим.Давайте разберем каждый метод:

// addWagon(value):
//         Этот метод добавляет новый вагон с указанным значением в конец поезда.Он использует цикл, чтобы дойти до конца списка и добавить новый вагон.

//     countWagons():
//         Метод возвращает количество вагонов в поезде.Он использует цикл для перебора всех вагонов и подсчета их количества.

//     isWagon(value):
//         Метод проверяет, существует ли вагон с заданным значением в поезде.Он также использует цикл для перебора всех вагонов и сравнения их значений с заданным.

//     removelastWagon():
//         Метод удаляет последний вагон из поезда.Он использует цикл, чтобы дойти до предпоследнего вагона и установить его next в null, тем самым удаляя последний вагон.

//     addWagonIndex(value, index):
//         Метод добавляет новый вагон с указанным значением на указанную позицию в поезде.Он использует цикл, чтобы дойти до указанной позиции и вставить новый вагон между текущим и следующим вагонами.

//     removeWagonIndex(index):
//         Метод удаляет вагон на указанной позиции в поезде.Он использует цикл, чтобы дойти до предпоследнего вагона перед указанной позицией и изменяет его next, тем самым исключая вагон на указанной позиции из списка.

// Эти методы представляют основные операции, которые могут быть выполнены над односвязным списком, представляющим поезд в данном случае.
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
}

let train = new Train(10);
console.log(train);

// addWagon(value):
//         Этот метод добавляет новый вагон с указанным значением в конец поезда.Он использует цикл, чтобы дойти до конца списка и добавить новый вагон.
addWagon(value) {
    let current = this.root;
    while (current.next != null) current = current.next;
    current.next = new Wagon(value);
}

//     countWagons():
//         Метод возвращает количество вагонов в поезде.Он использует цикл для перебора всех вагонов и подсчета их количества.
countWagons() {
    let count = 1;
    let current = this.root;
    while (current.next != null) {
        current = current.next;
        count++;
    }
    return count;
}

//     isWagon(value):
//         Метод проверяет, существует ли вагон с заданным значением в поезде.Он также использует цикл для перебора всех вагонов и сравнения их значений с заданным.

isWagon(value) {
    let current = this.root;
    while (current != null) {
        if (current.value == value) return true;
        current = current.next;
    }
    return false;
}


//     removelastWagon():
//         Метод удаляет последний вагон из поезда.Он использует цикл, чтобы дойти до предпоследнего вагона и установить его next в null, тем самым удаляя последний вагон.

removelastWagon() {
    let current = this.root;
    if (current.next == null)
        throw new Error(
            "You can't remove a wagon from a train that has only one wagon"
        );
    while (current.next.next != null) {
        current = current.next;
    }
    current.next = null;
}

//     addWagonIndex(value, index):
//         Метод добавляет новый вагон с указанным значением на указанную позицию в поезде.Он использует цикл, чтобы дойти до указанной позиции и вставить новый вагон между текущим и следующим вагонами.

addWagonIndex(value, index) {
    if (index > this.countWagons())
        throw new Error("we don't have enough wagons");
    if (index <= 0) throw new Error("the index should be positive");
    let current = this.root;
    for (let i = 1; i < index; i++) {
        current = current.next;
    }
    let wagon = new Wagon(value);
    wagon.next = current.next;
    current.next = wagon;
}

//     removeWagonIndex(index):
//         Метод удаляет вагон на указанной позиции в поезде.Он использует цикл, чтобы дойти до предпоследнего вагона перед указанной позицией и изменяет его next, тем самым исключая вагон на указанной позиции из списка.
removeWagonIndex(index) {
    if (index > this.countWagons())
        throw new Error("we don't have enough wagons");
    if (index <= 0) throw new Error("the index should be positive");
    let current = this.root;
    for (let i = 1; i < index - 1; i++) {
        current = current.next;
    }
    current.next = current.next.next;
}

// Метод addWagonBeginning(value) предназначен для добавления нового вагона с указанным значением в начало поезда.Давайте разберем каждую строку кода в этом методе:
addWagonBeginning(value) {
    let firstWagon = new Wagon(value);
    firstWagon.next = this.root;
    this.root = firstWagon;
}
// Эти методы представляют основные операции, которые могут быть выполнены над односвязным списком, представляющим поезд в данном случае.