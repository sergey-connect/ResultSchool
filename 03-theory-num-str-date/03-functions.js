// Function Declaration
// function greet(name) {
//     console.log("Hello -", name);
// }

// Function Expression
// const greet2 = function (name) {
//     console.log("2 Hello -", name);
// }

// greet('Sergey')
// greet2('Sergey')

// console.log(typeof greet);

// setTimeout(function () {
//     greet('Sergey')
// }, 1500)

// let counter = 0
// const interval = setInterval(function () {
//     if (counter === 5) {
//         clearInterval(interval)
//     } else {
//         console.log(++counter)
//     }
// }, 2000)

// Arrow functions

function greet(name) {
    console.log("Hello -", name);
}

const arrow = (name, age) => {
    console.log("Hello -", name, age);
}

const arrow2 = name => console.log("Hello -", name);

// function pow(num, exp) {
//     return Math.pow(num, exp)
// }

const pow2 = (num, exp) => Math.pow(num, exp)

// arrow('Sergey', 11)

// ========== Default Parameters
const sum = (a = 40, b = a / 2) => a + b

console.log(sum(40, 2));
console.log(sum());

function sumAll(...numbers) {
    // let res = 0
    // for (let num of numbers) {
    //     res += num
    // }
    // return res
    return numbers.reduce((acc, cur) => acc += cur, 0)
}

console.log(sumAll(1, 2, 3, 4, 5));


// Closures

function createPerson(name) {
    return function (lastname) {
        console.log(name + ' ' + lastname);
    }
}

const addLastName = createPerson('Sergey')

addLastName('Petrov')
addLastName('Ivanov')