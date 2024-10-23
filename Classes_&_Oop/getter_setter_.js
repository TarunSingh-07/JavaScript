// Class based getter setter synatx
class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password.toUpperCase()}tarun`
    }
    set password(value){
        this._password = value
    }
}
const tarun = new User("tarun@gmail.com", "abc")
console.log(tarun.password);
console.log(tarun.email);

