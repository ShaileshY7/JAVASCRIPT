const Nums=[1,2,3]

// const Total=Nums.reduce(function (acc,currval){
//     console.log(`acc is ${acc} and currval is ${currval}`)
//     return acc+currval
// },0)

const Total=Nums.reduce((acc,currval)=>acc+currval,0)
//console.log(Total)

const shoppingCart=[
    {
        name:"Apple",
        price:100
    },
    {
        name:"Banana",
        price:200
    },
    {
        name:"Cherry",
        price:300
    },
    {
        name:"Date",
        price:400
    }
]
const priceTotal=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(priceTotal)