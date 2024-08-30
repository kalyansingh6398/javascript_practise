let myName = "kalyan Singh"
let age = 18;
let height = true;
let state = 0;
// console.table([myName,state,age,height])
// console.log(typeof(null));
// console.log(typeof(undefined))
// console.log(typeof(true));
// console.log(typeof("kalyan"));
//  console.log(typeof(1234));
//   console.log(typeof(777777777n));

/* ************************conversion******************** */

// ******************string to boolean***********
let myName1 = null
// let myName1 = undefined
// let myName1 = true
// let myName1 = "33"
// let myName1 = "kalyan singh"
let valueInNumber = Number(myName1)

// console.log(valueInNumber)


// console.log(typeof valueInNumber)\

//*****************string to boolean************* */

let isLogged = "kalyan"
let booleanLogged = Boolean(isLogged)
// console.log(booleanLogged)

let num = 1

let booleanNum = Boolean(num)
// console.log(booleanNum)
// console.log(typeof booleanNum)

let empty = ""
let booleanEmpty = Boolean(empty)
// console.log(booleanEmpty)

/****************operations*************** */

// console.log("23" + 2 + 4)
// console.log(2+3 + "2" + 4)

// console.log(2+3 + 2 + "4")

// *************comparision of datatypes***********

// console.log(null > 0)
// console.log(null == 0)
// console.log(null >= 0)

// const temp = null

// console.log(temp)

const id = Symbol('324')
const anotherId = Symbol('324')
console.log(id === anotherId)