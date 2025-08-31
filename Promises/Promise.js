//1 promise
const promiseOne=new Promise(function (resolve,reject){
    // Do Database connection 
    //Do async tasks
    setTimeout(function(){
        console.log("Async task is completed");
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

//WE ALSO WRITE PROMISE LIKE THIS WITHOUT STORING IN VARIABLE
//2
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async 2 is completed")
        resolve()
    },1000)
}).then(function(){
    console.log("Promise is resolved");
    
})
// 3 promise
const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Shailesh",email:"sh@sh.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

//4 method
const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
          let error=false;
          if(!error){
            resolve({username:"shalu",password:"12345"})
          }
          else{
            reject("Error: Something went wrong")
          }
          
    },1000)
})

promiseFour.then(function(user){
    console.log(user);
    return user.username;
}).then(function(myusername){
    console.log(myusername);
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("Promise is either resolved or rejected");
})

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({language:"javascript",password:"890458754"})
        }
        else{
          reject("Error: js went wrong")
        }
    },1000)
 })

 async function consumePromiseFive(){
    try{
     const response= await promiseFive
     console.log(response);
    }catch(error){
        console.log(error);
    }
 }

 consumePromiseFive()

//  async function getAllUser(){
//        try {
//             const response =await fetch('https://randomuser.me/api/');
//             const data=await response.json();
//             console.log(data);
//        } catch (error) {
//           console.log("Error:",error);
//        }
//  }
//  getAllUser()

fetch('https://randomuser.me/api/')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error));