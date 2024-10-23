/*  Datatype conversion confusion */

let score = 33
console.log(typeof score)
// console.log(typeof(score))

let scoree ="33"
console.log(typeof scoree)
// string in number format = Number(value)
let valueInNumber = Number(scoree)
console.log(typeof valueInNumber)

let score1 = null
let valueInNumber1 = Number(score1)
console.log(valueInNumber1)

let score2 = true
let valueInNumber2 = Number(score2)
console.log(valueInNumber2)

let isloggedin = 1
let booleanisloggedin = Boolean(isloggedin)
console.log(booleanisloggedin)

let value = 3
let negvalue = -value
console.log(negvalue)

console.log("1"+2)
console.log(1+"2")
console.log("1"+2+2)
console.log(1+2+"2")
console.log(+true)
console.log(+"")

let gamecounter = 100
gamecounter++
console.log(gamecounter)

