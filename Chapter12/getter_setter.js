class User {
    constructor(emai,password) {
        this.email = emai;
        this.password = password
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value.toUpperCase()
    }
}

const ujjawal = new User("ujjawal@gmail.com","abc")
console.log(ujjawal.password);
