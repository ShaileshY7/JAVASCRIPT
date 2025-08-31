class User{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password
    }

    encryptPassword(){
        return `${this.password}@#$%^&*abc!>?<:`;
    }
    changeUserName(){
        return `${this.username.toUpperCase()}`;
    }
}

const user=new User("Shailesh","sh@sh.com","132");
console.log(user.encryptPassword());
console.log(user.changeUserName());