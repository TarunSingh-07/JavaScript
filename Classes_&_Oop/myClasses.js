// using Class Constructor

class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }
    // create a method. actual it's a function bt inside class it's a method

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return`${this.username.toUpperCase()}`
    }
}
// using methods we can change the data from the class

const chai = new User("chai", "chai@gmail.com", "123");
console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// behind the screen
// Using Function

function User(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea", "tea@gmail.com", "123");
console.log(tea.encryptPassword());
console.log(tea.changeUsername());



