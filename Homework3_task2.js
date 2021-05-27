'use strict'

let basket = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10]; // Создаем массив, в котором храняться ценники на товары

function countBasketPrice(a) {
    let amount = 0;
    for (let i = 0; i < a.length; i++) {
        amount += a[i];
    }
    return amount;
}



console.log(countBasketPrice(basket));