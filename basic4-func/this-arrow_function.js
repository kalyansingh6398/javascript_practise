const user  = {
    username : "kalyansing",
    bike:"hunter",
    welcomeMessage:function(){
        // console.log(`${this.username} ,welcome to my shop `);
        // // console.log(this)
    },
}
user.welcomeMessage()
user.username = 'thansingh'
// console.log(user.username)
user.welcomeMessage()

const justPrint = function(){
    const username = "kaluan"
    // console.log(username)
}
justPrint()

const justPrint1 = () => {
    const username = "kalyan"
    // console.log(username)
}
justPrint1()

const sum = (m,n) =>{
    return m + n
}
// console.log(sum(74,9))

const sub = (n,m) => (n -m)
// console.log(sub(74,9))

const addTwo = (n,m) => ({
    username:"kalyansingh",
})
console.log(addTwo(3,3))

const addTwo1 = (n,m) => ([
    'username',"kalyansingh"])
console.log(addTwo(3,3))