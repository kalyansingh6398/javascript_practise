const user = {
    username:"kalyan",
    loginCount:3,
    signedIn:true,
    getUserDetails:function(){
//         console.log('got user email details from database')
//  console.log(this.username)
//  console.log(this.loginCount)
    }
}
console.log(user.getUserDetails())
// console.log(this)

function getUser(username,loginCount,isLoggedIn){
    username = username
    loginCount = loginCount
    isLoggedIn = isLoggedIn
    console.log(username,loginCount,isLoggedIn)
}
const userOne = getUser('kalyan',12,true)
const userTwo = getUser('singh',12,true)
// console.log(userOne)
// console.log(userTwo)

function Userg(username,loginCount,isLoggedIn){
   this.username = username
    this.loginCount = loginCount
   this. isLoggedIn = isLoggedIn
    // console.log(username,loginCount,isLoggedIn)
    // return this 
}
const userThree =  new Userg('thansingh',3,true)
// console.log(userThree)
const userFour = new Userg('narendra',3,true)

console.log(userThree);console.log(userFour)


// console.log(userThree.constructor)