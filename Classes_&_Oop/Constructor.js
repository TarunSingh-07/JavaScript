function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }
}

// const userOne = User("tarun", 12, true)
// const userTwo = User("TarunAurJS", 11, false)

// console.log(userOne);

// If we write only 'User' then it OVERRIDE the UserTwo value on UserOne, so for this we use NEW keyword for not oVERRIDE


const userOne = new User("tarun", 12, true)
const userTwo = new User("TarunAurJS", 11, false)

console.log(userOne.constructor);
// console.log(userTwo);


