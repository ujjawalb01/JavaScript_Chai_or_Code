const promiseOne = new Promise(function(resolve,reject) {
    // async tasks
    setTimeout(function(){
        console.log('Async Task is Complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
    
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"ujjawal01",email: "ex@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFaur = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "ujjawal01",password:"1234"})
        } else {
            reject('ERROR: Something went Wrong')
        }
   },1000)
})

promiseFaur.then((user) => {
    console.log(user);
    return user.username
    
}).then((username) => {
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(()=> {
    console.log("The promis is either resolved or rejected");
    
})



const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "Java",password:"1234"})
        } else {
            reject('ERROR: Java went Wrong')
        }
    },1000)
})

async function consumePrFive() {
   try {
     const response = await promiseFive
    console.log(response);
   } catch (error) {
    console.log(error);
    
   }
    
}
consumePrFive()


// async function getAllUser(){
//    try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//    const data = await response.json()
//    console.log(data);
   
//    } catch (error) {
//     console.log("E: ",error);
    
//    }
// }
// getAllUser()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => console.log(error))