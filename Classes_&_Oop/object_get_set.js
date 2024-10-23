// Object  based getter and setter Syntax
const User = {
    _email: "ta@.com",
    _password: "qwer",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const coffee = Object.create(User)
console.log(coffee.email);
