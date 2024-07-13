class user{
    constructor(username,email,password){
        this.username=username
        this.email=email;
        this.password=password;
    }
    encryptpassword(){
        return `${this.password}xyz`
    }
    changeusrname(){
        return `${this.username} bahdur`
    }
}
const chai=new user("tinku","tinku@gmail.com","tinku123")
console.log(chai.encryptpassword())
console.log(chai.changeusrname())

