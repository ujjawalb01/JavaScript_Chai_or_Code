const user = {
    username: "Ujjawal",
    loginCount: 9,
    signedin: true,

    getUserDeatails: function(){
        // console.log("Got User Deatails from db");
        // console.log(`Username: ${this.username}`);
        console.log(this);
        
    }
}
// console.log(user.username);
// console.log(user.getUserDeatails());
// console.log(this);



function User(username,loginCount,isLoggedin){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedin = isLoggedin;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }
    return this
}

const userOne = new User("Ujjawal",12,true)
const userTwo = new User("Sharma",14,false)
console.log(userOne.constructor);
console.log(userTwo);

