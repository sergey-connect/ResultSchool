/*
Задание #1

Создайте 2 объекта john и ann с полями name, age, pet и заполните их именем, возрастом и именем питомца соответственно.

Создайте функцию, которая в параметры принимает объект человека (john или ann), и в качестве результата выводит информацию о нем в консоль:

“Меня зовут {name}, мне {age}, у меня есть питомец {pet}”

Создайте функцию incrementAge(), которая в параметры принимает объект человека и увеличивает ему возраст на 1.

Выведите циклом все названия свойств и их значения, которые есть у объекта john.
*/

// const john = {
//     name: 'John',
//     age: 24,
//     pet: 'Barsik',
// }

// const ann = {
//     name: 'Ann',
//     age: 21,
//     pet: 'Cherry',
// }

// const getInfo = function (obj) {
//     console.log(`Меня зовут ${obj.name}, мне ${obj.age}, у меня есть питомец ${obj.pet}`);
// }

// getInfo(john)
// getInfo(ann)

// const incrementAge = function (obj) {
//     obj.age++
// }

// incrementAge(john)

// for (let prop in john) {
//     console.log('Свойство', prop, 'значение', john[prop]);
// }

// const display = people => {
//     for (const [key, value] of Object.entries(people))
//         console.log(`${key}: ${value}`);
// }


/*
Задание #2

Создайте функцию, которая на вход принимает массив, а на выходе возвращает сумму его элементов:

function sum(array) {
  // Ваш код здесь...
}

const arr = [1, 50, 20, 75, 90];

sum(arr); // 236
*/

// function sum(array) {
//     return array.reduce((acc, n) => acc + n, 0)
// }

// const arr = [1, 50, 20, 75, 90];

// console.log(sum(arr)); // 236


/*
Задание #3

Создайте пустой массив names.
Добавьте в него 5 любых имен.
Выведите массив в консоль.
Уберите из начала и конца массива по 1 элементу.
Снова выведите массив в консоль.
*/

// const names = []
// names.push('Анатолий', 'Сергей', 'Мария', 'Елена', 'Дмитрий')

// console.log(names);

// names.pop()
// names.shift()

// console.log(names);

/*
Задание #4

Дан массив names. Необходимо сделать функцию, которая на основе этого 
массива генерирует строку c HTML. Она представляет из себя список элементов (<ul>), 
где каждый элемент списка (<li>) содержит элемент массива.

const names = ['Bob', 'Klar', 'Petya', 'Ilya', 'Viktoriya'];
*/

// const names = ['Bob', 'Klar', 'Petya', 'Ilya', 'Viktoriya'];

// function makeList(list) {
//     let stringHTML = `<ul>`
//     list.forEach(name => {
//         stringHTML += `<li>${name}</li>`
//     });
//     stringHTML += `</ul>`
//     return stringHTML
// }

// console.log(makeList(names));


/*
Задание #5

Дан объект:

const obj = {
    age: 22,
    favColor: 'red',
    height: 188,
    pet: 'dog',
    money: 12300
};
Необходимо выполнить деструктуризацию объекта (для всех полей). Выведите полученные переменные в консоль. 
*/

// const obj = {
//     age: 22,
//     favColor: 'red',
//     height: 188,
//     pet: 'dog',
//     money: 12300
// };

// let { age, favColor, height, pet, money } = obj

// console.log(age, favColor, height, pet, money);


/*
Задание #6

Даны объекты:

const obj = {
    age: 22,
    favColor: 'red',
    height: 188,
    pet: 'dog',
    money: 12300
};

const updateObj = {
    age: 23,
    favColor: 'blue',
    money: 11450
};

const obj2 = {//};
console.log(obj2);

//  * {
//  *	age: 23,
//  *	favColor: 'blue',
//  *	height: 188,
//  *	pet: 'dog',
//  *	money: 11450
//  * }

Необходимо создать новый объект obj2, в котором будут все поля объекта obj, но с обновленными значениями полей как у объекта updateObj. 
*/

const obj = {
    age: 22,
    favColor: 'red',
    height: 188,
    pet: 'dog',
    money: 12300
};

const updateObj = {
    age: 23,
    favColor: 'blue',
    money: 11450
};

const obj2 = { ...obj, ...updateObj };
console.log(obj2);

//  * {
//  *	age: 23,
//  *	favColor: 'blue',
//  *	height: 188,
//  *	pet: 'dog',
//  *	money: 11450
//  * }