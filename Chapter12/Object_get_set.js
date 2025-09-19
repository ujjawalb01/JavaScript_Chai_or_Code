const User = {
    _email: 'm@g.com',
    _password: 'abcd',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const cofee = Object.create(User)
console.log(cofee.email);
