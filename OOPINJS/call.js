function setUserName(username){
       this.username=username
       console.log("set user");
}

function createUser(username,email,password){
    setUserName.call(this,username);
    this.email=email;
    this.password=password;
}
const shai=new createUser("Shailesh","sh@sh.com","34244");
console.log(shai);