const myNums = [1,2,3]

// const mytotal = myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval ${currval}`);
    
//     return acc + currval
// },0)


const mytotal = myNums.reduce( (acc,currval) => acc + currval, 0)
console.log(mytotal);



const shoppingCart = [
    {
        itemName: "javascript",
        price: 2999
    },
    {
        itemName: "Java",
        price: 8999
    },
    {
        itemName: "Ai",
        price: 7999
    },
    {
        itemName: "DataScience",
        price: 5999
    },
]

const pricetopay = shoppingCart.reduce((acc,item) =>acc + item.price ,0)
console.log(pricetopay);
