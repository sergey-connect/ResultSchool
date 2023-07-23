// Event Loop

//const timeout = setTimeout(() => {
//     console.log('after 2 seconds')
// }, 2000)

// clearTimeout(timeout)

// setTimeout(() => {
//     console.log('after 3 seconds');
// }, 3000)
// let count = 0
// setInterval(() => {
//     console.log('tick', ++count);
// }, 1000)

// function delay(callback, time = 1000) {
//     setTimeout(callback, time)
// }

// const delay = (time = 1000) => {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve([1, 2, 3])
//             // reject('Error in delay')
//         }, time)
//     })
//     return promise
// }

// delay(2500)
//     .then((data) => {
//         console.log('Timeout', data)
//         return data.map(x => x ** 2)
//     })
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log(err)
//     })
//     .finally(() => console.log('Finally'))

// const getData = () => new Promise(resolve => resolve([1, 2, 3]))

// async function asyncExample() {
//     try {
//         await delay(3000)
//         const data = await getData()
//         console.log(data)
//     } catch (err) {
//         console.log(err)
//     } finally {
//         console.log('Finally')
//     }
// }

// asyncExample()

/*
Задание #1

Определите порядок вывода в следующем фрагменте кода без его запуска. 

console.log('a');
new Promise((resolve, reject) => {
    console.log('b');
    setTimeout(() => {
        console.log('c');
        resolve();
    }, 0);
})
  .then(() => console.log('d'));

console.log('e');
setTimeout(() => console.log('f'), 0);
console.log('g');
Определите для себя, почему вывод произошел именно в таком порядке.
*/

//'a, b, e, g, c, d, f'

/*
Задание #2

Напишите код, который получает список задач по URL 
https://jsonplaceholder.typicode.com/todos и выводит их в виде списка (<ul>) 
на страницу. 

Примечание. Сетевые запросы можно выполнять с помощью функции fetch(), 
работающей на основе Promise API. 
*/


/*
let todos = 'https://jsonplaceholder.typicode.com/todos';

async function fetchToDo(url) {
    let response = await fetch(url);

    let listJson = await response.json(); // читаем ответ в формате JSON
    let list = Array.from(listJson)
    return list
}

async function renderToPage(url) {
    let listToDo = await fetchToDo(url)

    let htmlToPage = '<ul>'
    for (let i = 0; i < listToDo.length; i++) {
        htmlToPage += `<li>${listToDo[i]}</li>`
    }
    htmlToPage += '</ul>'
    document.body.innerHTML = htmlToPage
}
renderToPage(todos)
*/

/*
Решение
const url = 'https://jsonplaceholder.typicode.com/todos';

fetch(url)
  .then(response => response.json())
  .then(tasks => {
    const ul = document.createElement('ul');
    tasks.forEach(task => {
      const li = document.createElement('li');
      li.textContent = task.title;
      ul.appendChild(li);
    });
    document.body.appendChild(ul);
  })
  .catch(error => console.error(error));
*/


/*
Задание #3

Напишите функцию sumWithDelay(), которая принимает delay, a, b и возвращает a + b через delay миллисекунд. Функция должна работать на основе Promise API. 

function sumWithDelay() {
  // Ваш код здесь...
}

async function start() {
  const result = await sumWithDelay(1000, 5, 5);
  console.log(result);
}

start();
*/

/*
function sumWithDelay(delay, a, b) {
    return new Promise(resolve => setTimeout(() => resolve(a + b), delay))
}

async function start() {
    const result = await sumWithDelay(1000, 5, 5);
    console.log(result);
}

start();
*/



/*
Задание #4

Напишите функцию, имитирующую запрос к серверу за получением пользователя.
Она принимает id и с задержкой 2500 миллисекунд возвращает пользователя из массива USERS с соответствующим id.
В случае отсутствия пользователя сгенерировать обработать исключение.

const USERS = [
  { id: '001', name: "Алексей", age: 25 },
  { id: '002', name: "Иван", age: 28 },
  { id: '003', name: "Егор", age: 30 },
];

function fetchUser(id) {
  // Ваш код здесь...
}

async function start() {
  // ...
  const result = await fetchUser('001');
  console.log(result); // { id: '001', name: "Алексей", age: 25 }
  // ...
}

start();
*/

const USERS = [
    { id: '001', name: "Алексей", age: 25 },
    { id: '002', name: "Иван", age: 28 },
    { id: '003', name: "Егор", age: 30 },
];

function fetchUser(id) {
    // Ваш код здесь...


    let userID = new Promise(function (resolve, reject) {

        let userIndex = -1;
        for (let i = 0; i < USERS.length; i++) {
            if (USERS[i]['id'] === id) {
                userIndex = i
            }
        }

        setTimeout(() => resolve(USERS[userIndex]), 2500)
        if (userIndex === -1) { reject(new Error("Пользователь не найден, проверьте ID")) }
    })

    userID.catch(err => console.log(err))

    return userID
}

/*
Решение

function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = USERS.find(user => user.id === id);
      if (user) {
        resolve(user);
      } else {
        reject(new Error('Пользователь не найден'));
      }
    }, 2500);
  });
}
*/

async function start() {
    // ...
    const result = await fetchUser('005');
    console.log(result); // { id: '001', name: "Алексей", age: 25 }
    // ...
}

start();