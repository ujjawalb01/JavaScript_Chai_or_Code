// For loop

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("is best");
        
    }
    // console.log(element);
    
}

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer value : ${i}`);
    
    for (let j = 0; j <= 10; j++) {
        // console.log(`inner value : ${j} and inner loop ${i}`);
        
        // console.log(i + '*' + j + ' = ' + i*j);
        
    }
    
}


let myArray = ['Ujjawal','Paras','Ayushman','Shubham']
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}


// breaak and continue


// for (let i = 0; i <= 20; i++) {
//     if (i == 5) {
//         console.log(`Detected 5`);
//         break
        
//     }
//     console.log(`Value of i is ${i}`);
    
    
// }
for (let i = 0; i <= 20; i++) {
    if (i == 5) {
        console.log(`Detected 5`);
        continue
        
    }
    console.log(`Value of i is ${i}`);
    
    
}