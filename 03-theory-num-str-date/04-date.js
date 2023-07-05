// const now = new Date()

// const start = new Date(1000 * 60 * 60 * 24 * 365)

// const date = new Date(2011, 0, 1, 12, 42, 12)

// console.log(now.getFullYear())
// console.log(now.getMonth())
// console.log(now.getDate())
// console.log(now.getHours())
// console.log(now.getMinutes())
// console.log(now.getSeconds())
// console.log(now.getMilliseconds())

// now.setFullYear(2055)

// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleDateString());
// console.log(now.toLocaleTimeString());

// ==========

let mode = 'time'
const display = document.getElementById('output')
const full = document.getElementById('full')
const date = document.getElementById('date')
const time = document.getElementById('time')

function bindMode(name) {
    return function () {
        mode = name
        update()
    }
}

full.onclick = bindMode('full')

date.onclick = bindMode('date')

time.onclick = bindMode('time')

setInterval(update, 1000)
update()

function update() {
    display.textContent = changeFormat(mode)
}

// Pure Function
function changeFormat(formatMode) {
    const now = new Date()
    switch (formatMode) {
        case 'time': return now.toLocaleTimeString() + '.' + now.getMilliseconds()
        case 'date': return now.toLocaleDateString()
        case 'full': return now.toLocaleString()
        default: return now.toLocaleTimeString()
    }
}

