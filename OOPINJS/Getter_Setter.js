class User{
    constructor(email,password){
        this.email=email;
        this.password=password
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email=value;
    }
    get password(){
        return `${this._password.toUpperCase()}` ;
    }
    set password(value){
      this._password=value;
    }
}

const user=new User("sh@sha.com","vasdhjv");
console.log(user.password);
console.log(user.email);