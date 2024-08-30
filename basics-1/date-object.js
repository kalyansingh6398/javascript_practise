const date = new Date()
// console.log(date)
const d = new Date("2024-06-30")
// console.log(d)
const short = new Date("06/30/2024")
// console.log(short)
const long = new Date("june 30 2024")
// console.log(long)

/* *******************************getFullYear************************* */

let getFY = new Date("06/30/2024")
// console.log(getFY.getFullYear())
let getFullY = new Date("06/30/2025")
// console.log(getFullY.getFullYear())

/* **********************************getMonth************************* */

console.log(getFY.getMonth())
let getM = new Date("06/30/2024")
// console.log(getM.getMonth())

const months = ["jan","feb","march","apr","may","june","july","aug","sept","oct","nov","dec"]
const dMonth  = new Date("02/20/2024")
// console.log(months[dMonth.getMonth()])
// console.log(months[dMonth.getFullYear()]);

const dateMonth = new Date()
console.log(months[dateMonth.getMonth()])
console.log(dateMonth.getDate())
console.log(dateMonth.getHours());

let days = ['sun','mon','tues','wed','thur','fri','sat']
const day = new Date("2040-07-01")

console.log(days[day.getDay()])
