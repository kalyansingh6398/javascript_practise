const obj = {}
if(obj){
    // console.log('object is empty')
}
else{
    // console.log('obj is nothing')
}

// falsy value => false , 0 ,-0,BigInt 0n,'',null,undefinde,NaN
// truthy value => true , 1," ", [],{},function(){}

// if(Object.keys(obj.length) === 0){
// // console.log("obj is empty")
// }
// null coalesing operator ?? : null undefinde

let val1
val1 = 5 ?? 10
val1 = null ?? 29
val1 = undefined ?? 22
val1 = null ?? 23 ??22
console.log(val1)

// ternary operator

const balance = 44242
balance >24203 ? console.log('balance is greater than 24233') : console.log('balance is less than 24233')