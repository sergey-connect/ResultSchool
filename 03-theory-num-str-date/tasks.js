/*
Задание #1

Реализуйте функцию isPrimeNumber(), которая принимает число и возвращает true, если оно простое, иначе — false.

Примечание. Простые числа — это числа, которые больше 1 и не имеют делителей, кроме 1 и самого себя.
*/

// function isPrimeNumber(num) {
//     if (num < 2) return false
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) return false
//     }
//     return true
// }


/*
Задание #2

Напишите функцию func(), которая принимает num, min, max:

Если число num < min, то функция возвращает min ** 2.
Если число num > max, функция возвращает max ** 2.
Если число num < max - (max - min) / 2, то функция возвращает num ** 2
Иначе возвращает округленное вниз значение num.
function func(num, min, max) {
    // Ваш код здесь...
}

console.log(func(3, 1, 10)); // 9
console.log(func(15, 1, 10)); // 100
console.log(func(5, 1, 10)); // 25
console.log(func(8.5, 1, 10)); // 8
*/

// function func(num, min, max) {
//     if (num < min) {
//         return min ** 2
//     } else if (num > max) {
//         return max ** 2
//     } else if (num < max - (max - min) / 2) {
//         return num ** 2
//     } else {
//         return Math.floor(num)
//     }
// }


/*
Задание #3

Создайте функцию isPerfectNumber(), которая принимает целое положительное число в параметры и возвращает true,
если число является совершенным, и false в противном случае.

Примечание. Совершенное число — это число, равное сумме всех своих положительных делителей (за исключением самого числа).
Например, число 6 является совершенным, потому что делители числа 6 (1, 2, 3) в сумме дают 6.

function isPerfectNumber(number) {
  // Ваш код здесь...
}

console.log(isPerfectNumber(6));   // true
console.log(isPerfectNumber(28));  // true
console.log(isPerfectNumber(12));  // false
console.log(isPerfectNumber(16));  // false
*/

// function isPerfectNumber(num) {
//     if (num < 0) return false
//     let sum = 0;

//     for (let i = 1; i < num; i++) {
//         if (num % i === 0) {
//             sum += i
//         }
//     }

//     if (sum === num) return true
//     return false
// }


/*
Задание #4

Напишите функцию getNumberDigit(), которая принимает число (number) и индекс цифры в числе (digitPosition).
Возвращает она цифру числа number, находящуюся на позиции digitPosition.

Если происходит попытка чтения числа на позиции, которой не существует (например, кол-во цифр в числе меньше,
    чем передано в digitPosition), то верните undefined.

Примечание. Нельзя использовать приведение числа к строке.

function getNumberDigit(number, digitPosition) {
  // Ваш код здесь...
}

getNumberDigit(123, 0) // 1
getNumberDigit(123, 1) // 2
getNumberDigit(123, 2) // 3
getNumberDigit(1, 2) // undefined
*/


// function getNumberDigit(number, digitPosition) {
//     let maxIndex = -1
//     let digit;
//     let tempNum = number

//     while (Math.trunc(tempNum) !== 0) {
//         Math.round(tempNum /= 10)
//         maxIndex++
//     }

//     if (digitPosition > maxIndex) return undefined;

//     number /= 10 ** (maxIndex + 1)

//     for (let i = 0; i <= digitPosition; i++) {
//         number *= 10
//         digit = number.toFixed(maxIndex) % 10
//     }

//     return Math.trunc(digit)
// }

/*
function getNumberDigit(number, digitPosition) {
    if (digitPosition < 0) {
        return undefined;
    }

    let remainder = Math.abs(number);
    let count = 0;

    while (remainder >= 1) {
        if (count === digitPosition) {
            return remainder % 10;
        }

        remainder = Math.floor(remainder / 10);
        count++;
    }

    return undefined;
}
*/

// console.log(getNumberDigit(123, 0)) // 1
// console.log(getNumberDigit(123, 1)) // 2
// console.log(getNumberDigit(35791, 0)) // 3
// console.log(getNumberDigit(1, 2)) // undefined


// ================== Часть 2 ==============

/*
Задание #1

Дан объект машины.

const car = {
  name: 'Hendai Solaris',
    type: 'sedan',
    maxSpeed: '320',
    color: 'red',
}
Необходимо написать написать функцию, которая принимает объект машины и возвращает строку с HTML, заполненную значениями переданного объекта.

<article>
    <div>
        <h2>Hendai Solaris</h2>
        <span>sedan</span>
    </div>
    <div>
        <span>Maximum speed:</span>
        <span>320</span>
    </div>
    <div>
        <span>Color:</span>
        <span>red</span>
    </div>
</article>
*/

// const car = {
//     name: 'Hendai Solaris',
//     type: 'sedan',
//     maxSpeed: '320',
//     color: 'red',
// }

// function makeHTML(obj) {
//     return `<article>
//     <div>
//         <h2>${obj.name}</h2>
//         <span>${obj.type}</span>
//     </div>
//     <div>
//         <span>Maximum speed:</span>
//         <span>${obj.maxSpeed}</span>
//     </div>
//     <div>
//         <span>Color:</span>
//         <span>${obj.color}</span>
//     </div>
// </article>`
// }

// console.log(makeHTML(car))


/*
Задание #2

Необходимо написать функцию countWords(), которая принимает предложение и подсчитывает количество слов в нем.

const sentence = "Hello, how are you?";
console.log(countWords(sentence)); // 4
*/

// function countWords(sent) {
//     return sent.split(' ').length
// }

// const sentence = "Hello, how are you? What are you doing now?";
// console.log(countWords(sentence)); // 4


/*
Задание #3

Необходимо написать функцию getInitials(), которая принимает полное имя в виде строки (например, “John Doe”) и возвращает инициалы в формате “J. D.”.

const fullName = "John Doe";
const initials = getInitials(fullName);
console.log(initials); // "J. D."
*/

// function getInitials(name) {
//     const initials = name.split(' ').map(s => s[0] + '.')
//     return initials.join(' ')
// }

// const fullName = "John Doe";
// const initials = getInitials(fullName);
// console.log(initials); // "J. D."


/*
Задание #4

Необходимо написать функцию generateGoogleString(), которая принимает число и возвращает сроку ”Google”
с указанным количеством букв “o”. При этом минимальное количество букв “о” равно 2.

console.log(generateGoogleString(4));
// Goooogle

console.log(generateGoogleString(0));
// Google

console.log(generateGoogleString(-2));
// Google
*/

// function generateGoogleString(count) {
//     count <= 2 ? count = 2 : count = count
//     return `g${'o'.repeat(count)}gle`
// }

// console.log(generateGoogleString(10));
// // Goooogle

// console.log(generateGoogleString(5));
// // Google

// console.log(generateGoogleString(-2));
// // Google


/*
Задание #5

Реализуйте функцию countVowels(), которая подсчитывает количество гласных букв 
(латинских и кириллических) в переданной строке. 

const str = "Hello, Привет!";
console.log(countVowels(str)); // 4
*/

function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я']
    let counter = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) counter += 1
    }

    return counter
}

const str = "Hello world, Привет мир! Ура!";
console.log(countVowels(str)); // 4