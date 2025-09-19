// class User{
//     constructor(username,email,password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     cahngeUser(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("mea","meak@gmail.com","1234")
// console.log(chai.encryptPassword());
// console.log(chai.cahngeUser());


// how its works


function User(username,email,password){
    this.username = username;
        this.email = email;
        this.password = password
}
User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.cahngeUser = function(){
     return `${this.username.toUpperCase()}`
}

const dani = new User("dani","danid@gmail.com","6969")
console.log(dani.encryptPassword());
console.log(dani.cahngeUser());
