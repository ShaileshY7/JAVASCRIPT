const user1 =new Object();//THIS IS A SINGLETON OBJECT
 
const mySymbol=Symbol("key");

const user={// THIS IS NON SINGLETON OBJECT
    name:"shailesh",
    "fullname":"shailesh yadav",
    [mySymbol]:"key1",
    "age":20,
    email:"shailesh@google.com",
    "phone":"1234567890",
    "address":"delhi"
}

// console.log(user["email"]);
// console.log(user["fullname"]);
//console.log(user);
//console.log(user[mySymbol]);
//user.name="harsh"
//Object.freeze(user);
 user.email="shailesh@chatgpt.com"
//console.log(user)

user. greeting=function (){
    console.log("hello user");
}

user. greetingTwo=function (){
    console.log(`hello world,${this.name}`);
}

console.log(user.greeting());
console.log(user.greetingTwo());


