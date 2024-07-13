class user{
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`username is ${this.username}`)
    }
}
class Teacher extends user{
    constructor(username,email,password){
        super(username)
        this.password=password
        this.email=email
    }
    addcourse(){
        console.log(`username:${this.username}`)
    }
}
const obj1=new Teacher("tinku","tinku@gmail.com","thinkupswd")
obj1.addcourse()
const obj2=new user("pinku")
obj2.logme()

console.log(obj1==obj2)
console.log(obj2 instanceof user)
