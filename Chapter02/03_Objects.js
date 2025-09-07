// SingleTon

//Object Literals

const mySym = Symbol("key1")

const appUser = {
    name: "Ujjawal",
    "full name": "Ujjawal Sharma",
    [mySym]:"myk1",
    age: 22,
    location: "Noida",
    email: "ujjawal@gmail.com",
    isLoggedIn: false,
    lastLoginDay: ["Monday","Saturday"]
}

// console.log(appUser.email); // or appUser["email"]
// console.log(appUser["full name"]);
// console.log(appUser[mySym]);

// appUser.email = "changed "
// Object.freeze(appUser) //for  freezing the object 
appUser.greeting = function() {
    console.log("hello");
    
}
appUser.greetingtwo = function() {
    console.log(`Hwllo again, ${this.name}`);
    
}
console.log(appUser.greeting());
console.log(appUser.greetingtwo());
