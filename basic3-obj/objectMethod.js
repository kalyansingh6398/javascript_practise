/*  ****************************************freeze()  */

const fruits = ["kala",'apple','gauvava']
// console.log(fruits)
// Object.freeze(fruits)
fruits[1] = 200
// console.log(fruits)

/************************************** assign() */ 

const parent1 = ['kalyan',6788]
const parent2 = ['singh',42492]
// Object.assign(parent1,parent2)
// console.log(Object.assign(parent1,parent2))

const parents = {
    fname:"kalyan",
    lname:"singh",
}
const parent ={
    eyeColor:"blue",
    nation:"indian"
}
Object.assign(parents,parent)
// console.log(parents)
// console.log(parents.nation)
// console.log(parents.fname)

/******************************* Object.keys()****************** */

const obj = {}
obj.name = "kalyan singh"
obj.lName = "rajput"
obj.mobileNo = 492423492
// console.log(obj)
// console.log(Object.keys(obj))

/******************************* Object.values()****************** */

const target = {}
target.a = 1
target.b = "kalyan"
// console.log(target)
// console.log(Object.values(target))

/******************************* Object.entries()****************** */

const person = {}
person.fName = "kalyan"
person.lName = "singh"
// let entery = Object.entries(person)
// console.log(entery)

const object = {}
object.a = "something is wrong"
object.b = 49394
let entery1 = Object.entries(object)
// console.log(entery1)
// console.log(object)

/******************************* Object.create()****************** */


const create = {
    fName: "kalyan",
    lName:"rajput"
}
let man = Object.create(create)
console.log(man)
man.fname = "rampal"
man.lname = "kumar"
// console.log(man)
// console.log(create)


const create1 = {
    isHuman:false,
    printIntro : function (){
        // console.log(this)
        // console.log(`my name  is ${this.name} am i human ${this.isHuman}`)
    }
}
// console.log(create1)
const createNewObj = Object.create(create1)
createNewObj.name = "thansingh"
createNewObj.isHuman = true
createNewObj.printIntro()

/******************************* Object.is()****************** */

// console.log(Object.is(12,12))
// console.log(Object.is(NaN,NaN))
const is = {}
// console.log(Object.is(obj,{}))

/******************************* Object.hasOwn()****************** */

const hasown = {
    props:"exits",
    name:"kalyan singh",
}
// console.log(Object.hasOwn(hasown,"props"))


/******************************* Object.defineProperty()****************** */

const define = {
    fname : 'kalyan',
    lname : 'singh',
}
Object.defineProperty(define,'year',{value:"2008"})
// console.log(define.year)

const pro = {
    language:"en",
    year:33432,
    nation:"indian"
}
Object.defineProperty(pro,"nation",{value:"american"})
// console.log(pro.nation)


/******************************* hasOwnProperty()****************** */

const hasOwnProperty ={}
hasOwnProperty.salary = "no"
console.log(hasOwnProperty.hasOwnProperty("salary"))