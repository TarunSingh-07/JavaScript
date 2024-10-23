// Using Inheritance
class User {
    constructor(username) {
        this.username = username
    }
    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }

}
// constructor override 
class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.password = this.password
        this.email = email
    }     
    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}
const chai = new Teacher("chai", "chai@teacher.com", "123")
// console.log(chai.addCourse());
chai.addCourse()

const masalaChai = new User("masalaChai")
masalaChai.logMe()

console.log(chai === masalaChai);
console.log(chai instanceof Teacher);



