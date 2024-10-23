let myName = "tarun    "
let mychannel = "chai    "

// console.log(myName.trim().length);
// console.log(mychannel.trueLength);


let myHeros = ["thor", "spierman"]

// Object create 

let heroPower = {
    thor:"hammer",
    spiderman:"sling",

    getSiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.tarun = function(){
    console.log(`Tarun is present in all object`);
}

Array.prototype.heyTarun = function(){
    console.log(`Tarun says hello`);
    
}
// Array or Object dono ke pass power he bcoz dono hi isko access kar pa rahe

heroPower.tarun()
myHeros.tarun()
myHeros.heyTarun()
// heroPower.heyTarun()   /*iske pass heyTarun ki power nhi he so ye access nhi kar pa rha*/

console.log("------");

// INHERITANCE

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__:TeachingSupport
}
Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode"

String.prototype.trueLength = function(){
    console.log(`${this}`)
    // console.log(`${this.name}`)
    console.log(`True length is: ${this.trim().length}`)
}
anotherUsername.trueLength()
"tarun".trueLength()
"iceTea".trueLength()

