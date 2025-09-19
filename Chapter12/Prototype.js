// let myName = "Ujjawal   "
// console.log(myName.trueLength);



let myHeros = ["thor","spiderman"]

let heroPower  = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        // console.log(`Spidy Power is ${this.spiderman}`);
        
    }
}

Object.prototype.ujjawal = function(){
    // console.log(`ujjawal is present in all object`);
    
}

Array.prototype.heyUjjawal = function(){
    // console.log(`Ujjawal saying hello`);
    
}

// heroPower.ujjawal()

// myHeros.ujjawal()
// myHeros.heyUjjawal()
// heroPower.heyUjjawal()

// inheritence

const User = {
    name: "Johny",
    email: 'johny@gmail.com'
}

const teacher = {
    makevid: true,

}

const TeachSupport = {
    isAvalbl: false
}

const TaSupport = {
    makeassignment: 'js assignment',
    fullTime: true,
    __proto__: TeachSupport
}

teacher.__proto__ = User


//modern syntax


Object.setPrototypeOf(TeachSupport,teacher)


let anotherUsername = "codeCof    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
    
}

anotherUsername.trueLength()