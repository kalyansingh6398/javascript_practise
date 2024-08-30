let array =[
    "kalyan sing", 424024103913,
]
for(let i = 0; i < array.length; i++){
    // console.log(array[i])
}

// break and continue

for(let i = 1;i <14; i++){
    if(i == 5){
        // console.log("detected 5 ")
        break
    }
    console.log(i) 
}
for(let check = 2; check < 12; check++){
    if(check == 5){
        // console.log("detected 5 ")
        continue
    }
    console.log(check)
}
let index =1
while(index<=10){
    // console.log(`vaue of i  is ${index}`)
    index++
}
do{
    console.log(`vaue of index  is ${index}`)
    index++
}
while(index>=10)
