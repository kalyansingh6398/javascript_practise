function scope(){
    const username = "kalyan singh"
    function two(){
const mobileNo = 24422042
// console.log(username)
    }
    // console.log(mobileNo)  
    two()
}
scope()

if(true){
    const number = 12345678
    if(number === 12345678){
        username = "kalyan singh"
        // console.log(number + " " + username)
    }
    // console.log(username)
}
// console.log(username)

 console.log(addOne(33))
function addOne(m){
    return  m + 2
}

// addOne1(33)
// let addOne1 = function(m){
//     return  m + 2
// }
