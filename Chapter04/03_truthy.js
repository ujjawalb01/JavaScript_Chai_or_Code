const email = "me@gmail.com"
if (email) {
    console.log("Got the email");
    
} else {
    console.log("dont match");
    
}



// falsy value
// false, 0 ,-0, BigInt 0n, "", null, undefined, NaN,

//truthy value
// "0", 'false', " " , [] , {}, function(){}

// const emptyObject = {}

// if (Object.keys(emptyObject).length === 0) {
//     console.log("empty object");
    
// }

// // Nullish Coalescing Operator (??): null undefined
// let val1;
// // val1 = 5 ?? 10
// // val1 = null ?? 10
// // val1 = undefined ?? 10
// val1 = null ?? 10 ?? 15

// console.log(val1);


// Terniary Operator

// condition ? true : fasle


const  tprice = 100
tprice <= 80 ? console.log("less than 80"): console.log("more than 80");
;

