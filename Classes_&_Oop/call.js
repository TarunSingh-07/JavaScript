function SetUsername(username){
    // complex DB calls
    this.username = username
}

function createUser(username, email, password){

    // SetUsername(username)
    SetUsername.call(this, username)
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai);

// idhr username call nhi hua he sirf uska reference geya he isliye ye print nhi hua
// that's why js ek method deta he reference hold karne ke liye.
// method anme is - .call