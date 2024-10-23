class User {
    constructor(username) {
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    // static lagane se ye accessable nhi hoga 
    static createId(){
        return `123`
    }
}
const tarun = new User("tarun")
// console.log(tarun.createId()); 


class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i#phone.com")
iphone.logMe()
