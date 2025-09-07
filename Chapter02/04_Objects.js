//Singleton and constructor

// const instaUser = new Object()

const instaUser  = {}
instaUser.id = "12345aa"
instaUser.name = "ujjawal"
instaUser.isLoggedIn = false

// console.log(instaUser);

const regularUser = {
    email: "sample@gm.com",
    fullname: {
        userfullname: {
            firstNm: "Ujjawal",
            lastnm: "Sharma"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstNm);


const obj1 = {1:"a", 2:"b",}
const obj2 = {3:"c", 4:"d",}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
// console.log(obj3);


const users = [
    {
        id:1,
        email:"example.com"
    },
    {
        id:2,
        email:"example2.com"
    },
    {
        id:3,
        email:"example3.com"
    },
]
users[1].email
// console.log(instaUser);

// console.log(Object.keys(instaUser));
// console.log(Object.values(instaUser));
// console.log(Object.entries(instaUser));

// console.log(instaUser.hasOwnProperty('isLoggedIn'));




const course = {
    courseName:"JavaScript",
    price: "999",
    CourseInstructor: "Ujj"
}

// course.CourseInstructor

const {CourseInstructor} = course // CourseInstructor : instructor
console.log(CourseInstructor);

