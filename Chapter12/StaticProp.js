class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username :  ${this.username}`);
    }
    static createid(){
        return `1234`
    }
}

const ujjawal = new User("ujjawal")
// console.log(ujjawal.createid());


class Teacher extends User {
    constructor(username,email) {
        super(username)
        this.email = email
    }
}
const ip = new Teacher("ip","ip@Gamepad.com")
ip.logMe()

