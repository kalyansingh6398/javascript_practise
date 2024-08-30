// basics of array

const family = ["singh",'rajput','narendra',94024242]
// console.log(family)
// console.log(family[3])

let mobile = ["moto",'iphone','samsung']
mobile[3] = 'google len'
// console.log(mobile)

let mobileNumberList = [742932424,2424240994029,49240242492,2055509242092]
mobileNumberList[1] = 535202424224
// console.log(mobileNumberList)

// array method

const number = [2,3,423,24]
let name = ['kalyan','ding']
// console.log(typeof number)
// console.log(typeof name)
name.push("kalyan singh")
name.push('c')
name.push(undefined)
name.push(null)

// console.log( name)

//*************************************************pop method
name.pop()
name.pop()
// console.log( name)

const names = {

    name1:"kalyan singh"
}
// console.log(names.name1)
// console.log(typeof names)

function sum(){
  return " haan ji"
}

// console.log(typeof sum)

/////////////////////////////// unshift method

let vehicle = ['car','motor','bike']
vehicle.unshift("bullet")
// console.log(vehicle)

vehicle.unshift("hero")
// console.log(vehicle)

/////////////////////////////shift()

vehicle.shift()
// console.log(vehicle)
vehicle.shift()
// console.log(vehicle)

//////////////////////////join()

const password = ['therowrw',43530530]
password.join()
// console.log(typeof password)

 let  fruit = ['kela','thela','nela']
fruit.join()
// console.log(typeof fruits.join())
// console.log(fruits)

///////////////////////////////slice()

let fruits = ['kela','thela','nela','wwfwfw']
// console.log(fruits.slice(1))
// console.log(fruits.slice(1))
// console.log(fruits)
// console.log(fruits.slice(1,3))


///////////splic()'///////////

// let arr =  ['kela','thela','nela','wwfwfw','hghjjkj']
// console.log(arr.splice(2,3))
// console.log(arr.splice(2,1))

let array = [1,2,3,45,6]
array.splice(2,2,189,123)
// console.log(array)

let naam = ['klaa','fsfsl','sksfs']

let naam1 = ['klaa','fsfsl','sksfs']
naam.push(naam1)
console.log(naam)
console.log(naam[3][1])
console.log(Array.isArray(["kalyan"]))
