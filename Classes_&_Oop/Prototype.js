const newHero = ["hulk","spiderman"]
console.log(newHero);

function multipleBy5(num){
    return num*5
}
multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

// 2

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
    
}
/* if u not write new keyword then wo isko identify 
   nhi kar payega & print nhi hoga */

const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)

chai.printMe()
