const temperature = 39
 if(temperature > 40){
    console.log(`temperatur is greater than 41`)
 }
 else{
    // console.log('temperature is less than 40')
 }

 const score = 78;
 if(score >70){
    let score1 = "koi gal nahi score se kuch nahi hota"
    // console.log(`${score1}`)
 }
//  console.log(`${score1}`)

const balance = 880
if(balance < 700){
    console.log('less than 700')
}
else if(balance > 700){
    console.log('you can withdrawl money')
}
else if(balance < 700){
    console.log('please creadit money because your going less than 700')
}
else{
    console.log("your balance is zero")
}

const userLoggIn = true
const debitCard = true
const loggedInFormGoogle = false
const loggedWithEmailId = true
if(userLoggIn  && debitCard){
    console.log('allow to buy course')
}
if(loggedInFormGoogle || loggedWithEmailId){
    console.log('user logged in')
}