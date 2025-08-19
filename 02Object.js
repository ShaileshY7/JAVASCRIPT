const tinderuser={}

tinderuser.id="123"
tinderuser.name="John"
tinderuser.isLoggedIn=false

// console.log(tinderuser)


const regularuser={
    email:"shailesh@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Shailesh",
            lastname:"yadav"
        }
    }
}
//console.log(regularuser.fullname.userfullname.lastname);


////++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//=> COMBINE TWO RO MORE OBJECT INTO ANOTHER OBJECT

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

//const obj3={obj1,obj2}
//const obj3=Object.assign({},obj1,obj2)

//****we can also use spread operator to combine two objects into another object****
//we use this
const obj3={...obj1,...obj2}
// console.log(obj3);

console.log(tinderuser)

console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))

console.log(tinderuser.hasOwnProperty('isLogged]In'))


