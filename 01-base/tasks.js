/*
Задание #1

Необходимо создать 3 переменных: var a, let b, const c и присвоить им значения 5, 10, 13 соответственно.
Выведите все три переменные с помощью console.log().
После вывода присвойте переменным a, b и с новые значения, затем выведите их в консоль
и посмотрите, что получилось.В случае возникновения ошибок удалить “проблемное” выражение.
*/

// var a = 5;
// let b = 10;
// const c = 13;

// console.log(a, b, c);

// a = 20;
// b = 30;

// console.log(a, b, c);

/*
Задание #2

Последовательно запустите следующие фрагменты кода и посмотрите, что получилось:

const a = 100;
a = 20;
console.log(a);
console.log(a)
let a = 15;
console.log(a);
console.log(a);
var a;
a = 10;
console.log(a);
Определите для себя, почему в этих 3-х случаях произошел тот или иной результат выполнения.
*/

/*
Задание #3

Необходимо написать программу, в которой нужно определить переменные (указать для них свои значения):

productName — название товара.
productPrice — стоимость.
productQuantity — количество купленного товара.
resultCost — итоговая стоимость (высчитать динамически, с учетом цены и количества товара).
Выведите в консоль строку, в которой на месте фигурных скобок будут соответствующие значения переменных:

“Вы купили {productName} ({productQuantity} шт.) по {productPrice} ₽. Всего было потрачено: {resultCost} ₽”
*/

// let productName = 'Индийский чай'
// let productPrice = 250
// let productQuantity = 3
// let resultCost = productPrice * productQuantity

// console.log(`Вы купили ${productName} (${productQuantity} шт.) по ${productPrice} ₽. Всего было потрачено: ${resultCost} ₽`)

/*
Задание #4

Выведите в консоль следующие выражения:

typeof 'Hello'
typeof 10
typeof {}
typeof null
typeof undefined
typeof true
typeof []
typeof (() => {})
Проанализируйте результат выполнения программы и определите для себя, почему произошел тот или иной вывод.
*/

// console.log(typeof 'Hello');
// console.log(typeof 10);
// console.log(typeof {});
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof true);
// console.log(typeof []);
// console.log(typeof (() => { }));

/*
Задание #5

Выведите в консоль следующие выражения:

10 == 10
10 != 10
12 == 'Привет'
10 < 11
12 > 20
true && true
true && false
false && true
false || true
true || false
true || true
10 <= 10
18 <= 20
50 >= 50
51 >= 50
{} === {}
{} == {}
Сравнение по ссылке:

const a = {};
const b = a;
console.log(a === b);
Проанализируйте результат выполнения программы и определите для себя, почему произошел тот или иной вывод.
*/

// console.log(10 == 10)
// console.log(10 != 10)
// console.log(12 == 'Привет')
// console.log(10 < 11)
// console.log(12 > 20)
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false || true)
// console.log(true || false)
// console.log(true || true)
// console.log(10 <= 10)
// console.log(18 <= 20)
// console.log(50 >= 50)
// console.log(51 >= 50)
// console.log({} === {})
// console.log({} == {})

// const a = {};
// const b = a;
// console.log(a === b);

/*
Задание #6

Создайте переменную a и b, присвойте им любые числа. Если a больше b, выведите в консоль true, иначе — false.

Примечание. Нельзя использовать if...else и тернарный оператор.
*/

// let a = 15
// let b = 8

// console.log(a > b)


// ================== Часть 2 ===================

/*
Задание #1

Создайте переменную a, присвоив в нее любое число. 

Если значение переменной четное:
выведите в консоль “Четное”
Если значение переменной нечетное:
выведите в консоль “Нечетное”
Прибавьте к a + 1.
Выведите обновленное значение a.
*/

// let a = 5
// if (a % 2) {
//     console.log('Нечетное')
//     a += 1
//     console.log(a)
// } else {
//     console.log('Четное')
// }

/*
Задание #2

Напишите программу, которая последовательно выводит числа 
в диапазоне [0, 1000], удовлетворяющие одному из условий:

Число нечетное
Число кратно 12
*/

// for (let i = 0; i <= 1000; i++) {
//     if (i % 2 || i % 12 === 0) {
//         console.log(i);
//     }
// }

/*
Задание #3

Создайте массив со значениями [1, 10, 15, -100, -23, 19, 15032].
Получите из него новый массив, в котором каждый элемент будет увеличен на 25%.
Выведите оба массива в консоль.
*/

// let arr = [1, 10, 15, -100, -23, 19, 15032]
// let newArr = arr.map(value => value * 1.25)

// console.log(arr);
// console.log(newArr);

/*
Задание #4

Создайте функцию, объявленную с помощью ключевого слова function, 
с именем sayHello(). Она принимает в параметры name и возвращает строку вида: "Hello, {name}!".

Если функция была вызвана без указания name, то выведите строку "Hello, someone!".

Закомментируйте функцию и напишите аналогичную, но в виде стрелочной функции.
*/

// function sayHello(name = 'someone') {
//     return `Hello, ${name}!`
// }

// const sayHello = (name = 'someone') => `Hello, ${name}!`

// console.log(sayHello('Garry'));

/*
Задание #5

Напишите функцию calc(), которая принимает в параметры a и b, а также operation. 
В зависимости от переданной операции (+, -, /, *) возвращаем необходимый результат выражения с числами. 

function calc(a, b, operation) {
  // Ваш код здесь...
}

console.log(calc(1, 2, '+')); // 3
console.log(calc(1, 2, '-')); // -1
console.log(calc(2, 2, '*')); // 4
console.log(calc(4, 2, '/')); // 2
*/


// function calc(a, b, operation) {
//     if (operation === '+') {
//         return a + b
//     } else if (operation === '-') {
//         return a - b
//     } else if (operation === '*') {
//         return a * b
//     } else if (operation === '/') {
//         return a / b
//     }
// }

// console.log(calc(1, 2, '+')); // 3
// console.log(calc(1, 2, '-')); // -1
// console.log(calc(2, 2, '*')); // 4
// console.log(calc(4, 2, '/')); // 2


/*
Задание #6

Создайте переменную age, присвоив ей числовое значение.
Создайте переменную category, присвоив ей с помощью тернарного оператора значение:
"Взрослый" — если age больше или равно 18
"Детский" — если age меньше 18
Выведите переменные в консоль.
*/

// let age = 20
// let category = age >= 18 ? 'Взрослый' : 'Детский'

// console.log(age, category);


/*
Задание #7

Создайте переменные a и b с числовыми значениями.
Создайте переменную c, в которую с помощью тернарного оператора присвоите наибольшее значение (или a, или b).
Выведите значение c в консоль.
*/

let a = 25
let b = 20
let c = a > b ? a : b

console.log(c);