const obj ={}
// console.log(obj)
// console.log(typeof obj)

const bankUser = {
    accountHolderName:"kalyan singh",
    accoundNumber : 423429422492,
    accountHolderMobileNo:492429423,
    bankBalance:340242042,
    "atmNumber":57499940
};
// console.log(bankUser)
// console.log(bankUser["atmNumber"])
// console.log(bankUser.bankBalance)
// console.log(Object.keys(bankUser))
// console.log(Object.values(bankUser))

// add symbol in object 

const myName = Symbol["kalyansingh"]
const jUser = {
    [myName]:"kaluya",
}
// console.log(jUser[myName])

let value1 = "kalyan"
let value2 = 10242420
let value3 = true

let object = {
property:value1,
2:value2,
"property n": value3,
}
// console.log(object.property)
// console.log(object["2"])
// console.log(object["property n"] )

//console.log(this) // its return empty object => {}


    function sum(n,m){
        // console.log(this)
        // console.log(n+m);
    }
    sum(4,4)

    const pointOwnerObject = {
        name:"kalyan singh",
        mobile:9850520343,
        sum:function(n,m){
        //     console.log(n+m)
        //     console.log(this)
        //     console.log(this.name)
         }
    }
  pointOwnerObject.sum(2,3)


  function Car(make,modelYear,horsePower){
    this.manufactur = make;
    this.year = modelYear;
    this.power = horsePower;
  }
  const tataCars = new Car("tata",1028,2000)
//   console.log(tataCars)
//   console.log(tataCars.year)

function Carfeature(brake,clatch,speed){
    this.b = brake;
    this.c = clatch;
    this.s = speed;
}
let bmw = new Carfeature("press","fold",400)
// console.log(bmw)
// console.log(bmw.c)

/////////////////toString() =>this method returns a string representation of the object

const person = {
a:429040,
b:89663,
}

person.a = 6888558
// console.log(person.a)
// console.log(typeof person.a.toString()) // output :- [object Object]

///////////////////////Object.freeze()/////////////

const user = {
    name:"kalyan singh"
}
Object.freeze(user)
user.name = "narendra"
// console.log(user.name)

/////////////
