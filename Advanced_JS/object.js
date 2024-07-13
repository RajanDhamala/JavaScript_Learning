// function hello(num){
//     return num*5
// }
// console.log(hello(5))
// console.log(hello.prototype)

// function createuser(username,score){
//     this.username=username
//     this.score=score
// }
// createuser.prototype.increment=function(){
//     this.score++
// }
// createuser.prototype.printme=function(){
//     console.log(`this is ${this.username} and score is ${this.score}`)
// }

// const chai= new createuser("chai",25)
// const tea=new createuser("tea",20)

// chai.printme()



// let usrname="hitesh             "
// console.log(usrname.trim().length)


// let myheros=["spiderman","batman"]

// let heropower={
//     spiderman:"swing",
//     batman:"mondey",
//     action:function(){
//         console.log(this.spiderman)
//     }
// }

// Object.prototype.actions1=function(){
//     console.log("hitesh is present in all object")
// }

// Array.prototype.heyhitesh=function(){
//     console.log("array has power now")
// }

// myheros.heyhitesh()
// heropower.actions1()


        // inheritance

const user={
    username:'chai',
    email:"chai@.com"
}
const teacher={
    makvide:true,
}
const teachingsupport={
    isAvailable:false,
}

const TAsupport={
    makeAssignment:'js assignment',
    fulltime:true,
    __proto__:teachingsupport
}
teacher.__proto__=user

        // modern syntax

Object.setPrototypeOf(teachingsupport,teacher)

let anotherusrname="chaiaurcode   "
String.prototype.truelength=function(){
    console.log(`${this}`)
    console.log(`true length is ${this.trim().length}`)
}
anotherusrname.truelength()
"hitesh".truelength()
"coldtea".truelength()
