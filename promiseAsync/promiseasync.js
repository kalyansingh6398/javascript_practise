const promiseOne = new Promise(function(resolve,reject){
    // console.log('Async task completed')
    resolve()
})
promiseOne.then(()=>{
// console.log('promise consumed')
})

new Promise((resolve,reject)=>{
setTimeout(()=>{
// console.log("Async task completed")
resolve()
},1000)
}).then(()=>{
// console.log('promise consumed')
})

const promiseThree = new Promise((resolve,reject)=>{
setTimeout(()=>{
// function sum(n,m){
//     return n + m
// }
// resolve(sum(12,2))
const array = [12,23,33]
const loop = array.forEach((array)=>{
console.log(array)
})
resolve(loop)
},1000)
})
promiseThree.then((add)=>{
    console.log(add)
})

new Promise((resolve,reject)=>{
const obj = {
    name:'kalyan singh',
    mobileNo:9842294,
}
resolve(obj)
}).then((obj)=>{
console.log(obj.name)
})

const promiseFour = new Promise((resolve,reject)=>{
setTimeout(()=>{
    // let error = true
    let error = false
    if(!error){
        resolve({username:'kalyan',player:'kungfu'})
    }
    else{
       reject("ERROR:something went wrong")
    }
},1000)
})
promiseFour.then((userDetails)=>{
console.log(userDetails)
return userDetails.username
})
.then((username)=>{
    console.log(username)
    
    }).catch((error)=>{
console.log(error)
})

const promiseFive = new Promise((resolve,reject)=>{
setTimeout(()=>{
const error = true
if(!error){
    resolve({username:'kalyan',password:12121231})
}
else{
    reject("ERROR:something went wrong")
}
},1000)
})
async function consumePromiseFive(){
    try{
        let response = await promiseFive
        // console.log(response)
    }catch(error){
        // console.log(error)
    }
}
consumePromiseFive()

async function getAllUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        // console.log(response)
        const data = await response.json
        // console.log(data)
    }
    catch(error){
        // console.log('error')
    }
}
getAllUsers()

fetch('https://jsonplaceholder.typicode.com/todos/1').then((response)=>{
    console.log(response)
return response.json()
}).then((data)=>{
console.log(data)
}).catch((error)=>{
    console.log(error)
})