function addTwoNumbers(n,m){
    console.log(n+m)
}
//  addTwoNumbers(4,4)

 function addTwoNumbers2(n,m){
   return n + m
}
 let result = addTwoNumbers2(4,4)
//  console.log(result)

function userLoginMessage(username = "thansingh"){
if(!username){
    console.log("please enter a valid username")
    return
}
return `${username} just logged in`

}
// console.log(userLoginMessage("thansingh"))
// console.log(userLoginMessage("thansingh"))

function addToCart(item1,item,...item3)
{
    // console.log(item1)
    return item3
}
// console.log(addToCart(422,442,423,24342,23242,23424))


const user = {
    name:"kalyan singh",
    lname : "rajput",
}
function objectInFunction(anyObject){
    // console.log(`username is ${anyObject.name} and last name is ${anyObject.lname}`)
}
objectInFunction(user)

const user1 = {
    name:"kalyan singh",
    lname : "rajput",
    fun:function objectInFunction(){
        // console.log(`username is ${this.name} and last name is ${this.lname}`)
    },
    
}
// user.fun()

const myNewArray = [313,3,2312,524,223]
function array(getArray){
    return getArray[3]
}
console.log(array(myNewArray))