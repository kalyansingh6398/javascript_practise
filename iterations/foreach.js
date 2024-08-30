let coding = ['js','ruby','swift','java','c language']

coding.forEach(function(value){
    // console.log(value)
})

function printme(item){
// console.log(item)
}
coding.forEach(printme)

coding.forEach((item) => {
    // console.log(item)
})

let number = [1,2,3,4,56,7,7]
number.forEach((value) =>{
    // console.log(value)
})
number.forEach(function(value){
    // console.log(value)
})
function forEach(value,index){
    // console.log(`number value is ${value} and index of number is ${index}`)
}
number.forEach(forEach)

let mix = ['kalyan','singh',243,243,43,43,98.342]
mix.forEach(function(mixture,index,arr){
    // console.log(`number value is ${mixture} and index of number is ${index} and the array is ${arr}`)
})

let objectInArray = [
    {
        username:"kalyansingh",
        lName:'rajput',
    },
    {
        username:"thansingh",
        lName:'rajput',
    },
    {
        username:"narendra",
        lName:'rajput',
    },
    {
        username:"dinesh",
        lName:'rajput',
    },
]
objectInArray.forEach((item,index,arr) => {
    // console.log(item.username + " " + index + " " + arr)
    // console.log(Object.keys(item))
})

let jsonSampleData = [
    {
        "name": "Amiya Cole",
        "info": {
            "title": "Dr.",
            "age": 29,
            "phone": "+1-517-326-1707",
            "email": "alphonso.pouros@hotmail.com"
        }
    },
    {
        "name": "Ova McCullough",
        "info": {
            "title": "Miss",
            "age": 28,
            "phone": "825-765-8769",
            "email": "aufderhar.marian@yahoo.com"
        }
    },
    {
        "name": "Misael Schoen",
        "info": {
            "title": "Prof.",
            "age": 57,
            "phone": "1-731-830-5975",
            "email": "wilmer87@hotmail.com"
        }
    },
    {
        "name": "Ladarius Veum",
        "info": {
            "title": "Dr.",
            "age": 49,
            "phone": "+14792599521",
            "email": "alexane83@yahoo.com"
        }
    },
    {
        "name": "Leonie Bode",
        "info": {
            "title": "Mrs.",
            "age": 26,
            "phone": "451-339-9726",
            "email": "madalyn26@hotmail.com"
        }
    }
]
jsonSampleData.forEach((item) => {
    console.log(item.info.age)
    // console.log(item.info)
})
let obj = {}
if(Object.keys(obj) == 0){
    console.log('object is empty')
}
else{
    console.log('is this possible')
}
let array = [

]
if(array.length == 0){
    console.log('arrayl is empty')
}