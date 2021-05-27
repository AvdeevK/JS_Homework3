'use strict'

let i = 0; // Счетчик цикла while, чтобы прошли все числа от 0 до 100
let counter = 0;
loop_while: while (i <= 100) {
    if (i > 0) {
        loop_for: for (let j = 1; j <= i; j++) {
            if (i % j == 0) {
                counter++;
            }
            if (counter > 2) {
                break loop_for;
            }
        }
        if (counter <= 2) {
            console.log(i);
        }
    }
    counter = 0;
    i++;
}