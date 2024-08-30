let string = "kalyan singh"
// console.table([string]);
// console.log(typeof string)
// const string1 = new String("big brother")
// console.table([string1])

/**************************slice****************************/

let str = "the mirror"
// console.log(str.slice())
// console.log(str.slice(3))
// console.log(str.slice(4,7))
// console.log(str.slice())

const str1 = "the quick brown fox jump over the lazy dog"
// console.log(str1.slice())
// console.log(str1.slice(4))
// console.log(str1.slice(4,12))
// console.log(str1.slice())

/* ************************trim************************* */

let greeting = "      hello brother my name is kalyan                "
// console.log(greeting.trim())
// console.log(greeting.trimStart())
// console.log(greeting.trimEnd())

/* *************************repeat*************************** */

let repeat = "my brother is my godfather "
// console.log(repeat.repeat(3))
// console.log(repeat.repeat(2))

let mood = "Happy! "
// console.log(mood.repeat(5))

/* *********************toLowerCase and toUpperCase************************ */

var name = "kalyan singh"
// console.log(name.toUpperCase())

// // var name = "BHAIYA"
// console.log(name.toLowerCase())
/* 
*****************replace and replaceAll*********************** */

let paragraph = "i think my dog is better than your dog no my dog is bette than your dog"
let replace = paragraph.replace("dog","horse")
// console.log(replace)

// let replaceAll = paragraph.replaceAll("dog","parrot")
// console.log(replaceAll)

let array = [2,3,5,6,6,79,55]
// console.log(array.splice(3,1,8))
// console.log(array)

/* *********************substring********************* */

let str2 = "mozilla"
// console.log(str2.subtring(1))
// console.log(str2.substring(1,4))
// console.log(str2)

/* ***************************lastindexof******************* */

let last = "this is my dog i bought from the indian dog home"
// console.log(last.lastIndexOf("dog"))
// console.log(last.lastIndexOf("bought"))

/* ********************** includes*************************/

const faluda = "chakli is the food items"
// console.log(faluda.includes("chaklis"))
// console.log(faluda.includes("chakli is the food items"))

/******************* * charAt************************* */

const pass = "password"
// console.log(pass.charAt(5))
let passu = pass.charAt(4)
// console.log(passu)

/* ***************************split************************ */

const split = "corner is like combinattion of two side"
// let con = split.split(",")
// console.log(con)
// console.log(split.split(""))
// console.log(split.split(" "))
// console.log(split.split("-"))

/* ************************endwith and startwidth***************** */

let endWth = "kalyansing"
// console.log(endWth.endsWith("sing"))
// console.log(endWth.endsWith("singh"))

// let strt = "this name is worst"
// console.log(strt.startsWith("this"))

/* charCodeAt() => charCodeAt() returns the Unicode of the character at a specified position in a string. */

const char = "kaluan is name of people"
// console.log(char.charCodeAt("k"))

const char2 = "shri hanuman ji"
// console.log(char2.charCodeAt("h"))

/* fromCharCode => String.fromCharCode() converts Unicode values to strings:  */



console.log(String.fromCharCode(110))