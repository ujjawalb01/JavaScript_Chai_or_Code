class User {
    constructor(username){
        this.username = username
    }

    logme(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username,email,password) {
        super(username)
        this.email = email
        this.password  = password
    }

    addCourse(){
        console.log(`A new Course was added by ${this.username}`);
        
    }
}


const chai = new Teacher("chai","chai@gm.com","12344")
chai.addCourse()

const cofee = new User("capachino")
cofee.logme()


console.log(chai === cofee);
