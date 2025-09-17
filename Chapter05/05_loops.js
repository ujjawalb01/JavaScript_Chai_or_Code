// for each loops

const coding =['js','java','cpp','python','ruby']

// coding.forEach( function (item) {
//     console.log(item);
    
// })


// coding.forEach(item => {
//     console.log(item);
    
// });


// function printme(item){
//     console.log(item);
    
// }
// coding.forEach(printme)


// coding.forEach((item, index, arr)=>{
//     console.log(item,index,arr);
    
// })

const mycoding = [
    {
        langname: 'JavaScript',
        filename: 'js'
    },
    {
        langname: 'java',
        filename: 'java'
    },
    {
        langname: 'python',
        filename: 'py'
    }
]

mycoding.forEach(item => {
    console.log(item.langname);
    
});