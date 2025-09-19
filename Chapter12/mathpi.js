const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descripter);
const chai = {
    name: 'gud chai',
    price: 25,
    isAvailable: true,

    orderChai: function(){
        console.log("Chai not Ready");
        
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
Object.defineProperty(chai,'name',{
    // writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
         console.log(`${key} : ${value}`);
    }
}