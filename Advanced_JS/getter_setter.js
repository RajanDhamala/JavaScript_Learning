class user{
    constructor(username,password){
        this.username=username;
        this.password=password;
    }
    get password(){
        return `${this._password}tinku`;
    }
    set password(value){
        this._password=value
    }
}
const hitesh=new user("tinku",123)
console.log(hitesh.password);
