function SetUsername(username){
    this.username = username
}

function createUser(username,email,password){
    SetUsername.call(this, username)
    this.email = email
    this.password = password
}

const chai = new createUser("chai","chaifb@gm.com","1234")
console.log(chai);

