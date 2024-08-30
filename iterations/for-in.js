const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]} `)
}
const languages = ["js", "rb", "py", "java", "cpp"]
for(const key in languages){
    // console.log(`${key} keys value is$languages[key]`)
    // console.log(languages[key])
}
const  map = new Map()
map.set('in',"india")
map.set('usa',"united state of america")
map.set('fr',"france")

for(const key in map){
    console.log(key)
}