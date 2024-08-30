/************************ precision8****************** */

let num = 5.123456;
// console.log(num.toPrecision())
// console.log(num.toPrecision(3))
// console.log(num.toPrecision(10))

/* ***********************toExponential*********************** */
let num1 = 5.6789;
// console.log(num.toExponential(2))
// console.log(num1.toExponential(1))
// console.log(num1.toExponential(4));


/****************************tofixed*************************** */
 
let fix = 5.554672;
// console.log(fix.toFixed(1))
// console.log(fix.toFixed(2));
// console.log(fix.toFixed(4));

/**********************  toLocaleString************************* */

let number = 1000000;
// console.log(number.toLocaleString())
// console.log(number.toLocaleString("en-IN"));
// console.log(number.toLocaleString("fi-fi"))
// console.log(number.toLocaleString("en-US"))

/* *******************************valueOf************************ */
let value =  new Number(42)
// console.log(typeof value)
// console.log((typeof value.valueOf()))
const string = new String("kalyan")
// console.log(typeof string)
// console.log(string)

/* ***************************************MATH**************************************** */

/* math.round */
// console.log(Math.round(0.545))
let pi = Math.PI
let fixed = pi.toFixed(2)
// console.log(fixed)

/* ********************Math.ceil****************************** */
// console.log(Math.ceil(4.001))
// console.log(Math.ceil(0.42));
// console.log(Math.ceil(-0.1))

/* ********************Math.floor****************************** */
// console.log(Math.floor(-4.001))
// console.log(Math.floor(42.3));

/*****************************Math.trun ***************************/
// console.log(Math.trunc(3534.52539))
// console.log(Math.trunc(.242424));

/* ********************Math.sign********************* */

// console.log(Math.sign(-35.00))
// console.log(Math.sign(0))
// console.log(Math.sign(334))


/* Math.pow */

// console.log(Math.pow(5,2))

/* Math.sqrt */

// console.log(Math.sqrt(49))

/*********************************Math.abs************************** */
// console.log(Math.abs(-324))
// console.log(Math.abs(3242))

/*******************************Math.random************************* */

// console.log(Math.random())
// console.log(Math.floor(Math.random()*10))
// console.log(Math.floor(Math.random()*100))
// console.log(Math.floor(Math.random()*1000));

function getRandomInteger(min,max){
    return Math.floor(Math.random()*(max-min)+min)
}
console.log(getRandomInteger(10,20));



