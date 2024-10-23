// This is about Object 

const user = {
    username: "tarun",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        // console.log("Got user details from datbase");
        // console.log(`Username: ${this.username}`);
        console.log(this);
        
        
        
    }
}

console.log(user.username);
// console.log(user.getUserDetails());
console.log(this);     /*This is now global so in global no data here */




