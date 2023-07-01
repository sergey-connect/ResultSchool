const names = ['Сергей', 'Елена', 'Игорь', 'Ксения']

// names.push('Алена')
// names.unshift('Алена')
// const firstName = names.shift()
// const lastName = names.pop()

// names.reverse()
// const reversed = names.toReversed()
// names.sort(function (a, b) {
//     return a.charCodeAt(0) - b.charCodeAt(0)
// })

// names.sort()
// const sorted = names.toSorted()

// names.splice(2, 1)
// const spliced = names.toSpliced(2, 1)

// const greatWoman = 'Ксения'
// const index = names.indexOf(greatWoman)

// names.with(index, 'Ксения Великая') // Копирует массив и заменяет значение по индексу
// const capitalNames = names.map(function (name, index) {
//     // return name.toUpperCase()
//     if (index === 3) {
//         return 'Ксения Великая'
//     }
//     return name
// })

// names.includes('Игорь')
// console.log(names.indexOf('Игорь') !== -1);

const people = [
    { name: 'Сергей', budget: 4200 },
    { name: 'Елена', budget: 15100 },
    { name: 'Игорь', budget: 300 },
    { name: 'Ксения', budget: 7520 },
]

// let findedPerson

// for (let person of people) {
//     if (person.budget === 7520) {
//         findedPerson = person
//     }
// }

// const finded = people.find(p => p.budget === 7520)
// console.log(finded);

// const findedPerson = people.find(function (person) {
//     return person.budget === 7520
// })

// const finded = people.findIndex(function (person) {
//     return person.budget === 7520
// })

// let sumBudget = 0
// const filtered = people.filter(function (p) {
//     return p.budget > 5000
// })

// filtered.forEach(function () {
//     sumBudget += p.budget
// })

// const byBudget = p => p.budget > 5000
// const pickBudget = p => p.budget

// const sumBudget = people
//     .filter(byBudget)
//     .map(pickBudget)
//     .reduce((acc, p) => acc + p, 0)

const string = 'Привет, как дела?'
const reversed = string
    .split('')
    .toReversed()
    .join('!')
    .split('')
    .filter(c => c !== '!')
    .join('')