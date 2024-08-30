const array = [22,43,53,534,53]
for(let num of array){
    // console.log(num)
}

let meeting = "kalyan singh is the son vishan singh"
for(const meet of meeting){
    // console.log(meet)
}
const  map = new Map()
map.set('in',"india")
map.set('usa',"united state of america")
map.set('fr',"france")
// console.log(map)

for(const[key,value] of map){
    // console.log(key, ':-' ,value)
}
const obj = {
    username:"kalyan singh",
    mobileNo : 93429432498,
}
for(const[key,value] in obj){
    console.log(key,':-',value)
}