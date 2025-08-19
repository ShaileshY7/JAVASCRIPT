const myCoding=['python','java','c++','javascript']
//for each not return any value
const values=myCoding.forEach((item)=>{
  // console.log(item)
  return item
})

//console.log(values)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const Nums=[1,2,3,4,5,6,7,8,9,10]
//FILTER METHOD RETURN VALUE
const value=Nums.filter((num)=>{
    return num>4
}
)
// console.log(value)

const myNums=[]
Nums.forEach((num)=>{
    if(num>4){
        myNums.push(num)
    }
})

//console.log(myNums)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const books=[
    {title:'the phsy of money',genre:"Finance",publish:2000,edition:2015},
    {title:'atomic Habits',genre:"Making habits",publish:2002,edition:2019},
    {title:'Book3',genre:"history",publish:1999,edition:2018},
    {title:'make  epic money',genre:"Finance",publish:1990,edition:2017},
    {title:'Dont hurt me',genre:"discipline",publish:2005,edition:2024},
    {title:'Book6',genre:"Making habits",publish:2006,edition:2020}
]  

let userBooks=books.filter((bk)=>bk.genre==='Making habits')//in this we  not use  scope  then   it  return  te value  
//we use scope  then we return the value that we see below
 userBooks=books.filter((ed)=>{ 
    return ed.publish>=1990 &&  ed.genre==='Making habits'
})
console.log(userBooks)