// const accountId =123452;
// let email;
// var password;
// accountCity="Biratnagar"
// let accountState;


// email="rajandhamala0123@gmail.com"
// password="hellobhai384#"
// accountCity="kathmandu"

// console.table([email, password, accountId, accountCity,accountState])


// let a="hello";
// let convertedd=Number(a)
// console.log(typeof(convertedd))
// console.log(convertedd)


// let hello=['hiii', 'byee']
// console.log(hello)
// console.log(typeof hello)

// const myFunction = function(){
//     console.log('hello world')
// }
// console.log(typeof(myFunction))
// let name="rajan"
// console.log(`hello ${name} welcome to my channel`);
// console.log(name.length);


// const hello="   Rajan    "
// console.log(hello)
// console.log(hello.trim())
// const url="https://www.google.com"
// console.log(url.replace('google','gmail'))
// console.log(url.includes('.'))

// math and nums

// const nums=new Number(23)
// console.log(nums);
// console.log(typeof(nums));


// const balance=123;
// console.log(balance.toString())
// console.log(balance.toFixed(2))

// console.log(Math)

// console.log((Math.random()*10)+1)


// Now date
// function sleep(milliseconds) {
//     return new Promise(resolve => setTimeout(resolve, milliseconds));
//   }
  
//   let date = new Date();
//   let newDate = new Date(2024, 6, 29, 8, 17);
  
//   console.log(newDate.toDateString());
//   console.log(newDate.toLocaleString());
//   console.log(date.toLocaleString());
  
//   async function waitForTime() {
//     let a = 1;
//     while (a != 100) {
//       date = new Date();
//       if (newDate.toLocaleString() === date.toLocaleString()) {
//         console.log("Mission successful");
//         break;
//       } else {
//         console.log("Waiting for time...");
//       }
//       await sleep(1000);
//     }
//   }
  
//   waitForTime();


// Arrays

// let arry=['10','12','123,1234']
// console.log(arry.push(5))
// console.log(arry)
// arry.pop(5)  
// console.log(arry)
// arry.sort()
// console.log(arry)
// arry[2]=143
// console.log(arry)
// console.log(arry.indexOf(214))
// console.log(typeof(arry))


// const helloss=[1,2,3,4,5,6,7,8,9,10]
// console.log(helloss.unshift(12))
// console.log(helloss)


// const Arry1=[1,2,3,4,]
// const Arry2=[11,12,13]


// console.log("A" ,Arry1);

// console.log("B",Arry1.slice(0,2))

// cons2=Arry1.splice(0,2)
// console.log("C",Arry1);
// console.log(cons2);



// const marvel_heros=["spiderman","ironman","thor"]
// const dc_heros=["batman","flash","Superman"]

// const allnew_heros=marvel_heros.concat(dc_heros)
// console.log(allnew_heros)


// marvel_heros.push(dc_heros)
// console.log(marvel_heros[3][2])


// const all_new_heros=[...marvel_heros,...dc_heros]
// console.log(all_new_heros)


// const helloss={
//     age:"23",
//     name:"rajan",
//     // [mySym]: "mykey1",
//     rollno:"123",
//     email:"Rajandhamala0123@gmail.com",
//     grade:"bit"
// }
// // console.log(helloss)
// // console.log(helloss.age)
// // console.log(helloss["age"])
// console.log(helloss.email)
// helloss.email="hellobhai123@gmail.com"
// console.log(helloss.email)



// helloss.greeting =function(){
//     console.log("hello world");
// }
// helloss.prints=function(){
//     console.log(`your name is ${this.name} and your gmail is ${this.email}`);
// }
// // console.log(helloss.greeting)
// // console.log(typeof(helloss))

// console.log(helloss.prints());


// const regularUser={
//     username:"rajan",
//     fullname:{
//         email:"rajan123@gmail.com",
//         userss:{
//             fullname:"rajan dhamala"
//         }
//     }
// }

// console.log(regularUser.fullname.userss.fullname)


// const obj1={1:"a",2:"b"}
// const obj2={3:"a",4:"b"}
// const obj3={5:"a",6:"b"}


// const obj4=Object.assign({},obj1,obj2,obj3)
// // const obj4={...obj1,...obj2,...obj3} break like glass to merge different object
// // const obj4={obj1,obj2,obj3}
// console.log(obj4)
// console.log(obj4["1"])

        //OBJECTS INSIDE ARRAY
// const hellooooo=[
//     {
//         name:"rajan",
//         umer:"19"
//     },{
//         name:"raju",
//         umer:"25"
//     },{
//         name:"ranjan",
//         umer:"17"
//     }
// ]

// console.log(hellooooo)
// console.log(hellooooo[1].name)
// hellooooo[1].name="inku minku pinku"
// console.log(hellooooo[1].name)

// const tinderUser={}
// console.log(tinderUser)
// tinderUser.name="rajan"
// tinderUser.umer=18
// console.log(tinderUser.name+"\n" +tinderUser.umer)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty("user"))  to check whether key exist or not returns in Boolean


// const userssssss ={
//     name:"bablu",
//     age:19,
//     inkuminkkupunkius:"hello world"
// }
// console.log(userssssss.age)
// const {inkuminkkupunkius:essay}=userssssss to not repeat using userssssss.aage ,userssss.name
// console.log(essay)

        // functions

// here x is refrence to fxn while x() leads to execution of fxn
// const x=function SayMyNaam(){
//         console.log("T")
//         console.log("I")
//         console.log("N")
//         console.log("K")
//         console.log("U")}
// console.log(x)

// function add(a,b){
//          return a+=b
// }
// console.log(add(2,3))

// Tinku will be overwriten if value is passed through fxn
// function userlogg(username="Tinku"){  
//         return `${username} just logged in at ${Date()}`
// }
// console.log(userlogg("thinku"))


// function CalculatePrice(...num1){
//         return num1
// }
// console.log(CalculatePrice(2,3,4,5))

// function CalculatePrice2(val1,val2,...no1){  ...           
//         return no1
// }
// z=CalculatePrice2(1,2,3,4,4,5,6,7,7)
// a=0
// while (a<z.length){
// console.log(z[a])
// a++}
// const user={
//         username:"ramesh",
//         passowrd:"ramesh123",
//         gmail:"Ramesh0123@gmail.com",
//         lastLoggedin:['Monday','Sunday']
// }

// function handleObject(anyobject){
//         console.log(`Username:${user.username} Password:${user.passowrd}`)
//         // return user.lastLoggedin
// }
// handleObject(user)


// let String1="hello world"
// let array1=String1.split("") putting string into array
// console.log(array1.length)

        // Scope of the variable

// let a=5;
// var b=7;
// const c=10;
// console.log(a)
// console.log(b)
// console.log(c)
// function hello(){
//         a=10
//         b=123
//         console.log(a ,"after")
//         console.log(b,"after")
//         console.log(c,"after")
//         x=2;
// }
// hello()
// console.log(x)

// function one(){
//         username="Pinku"
//         function two(){
//                 website="https://www.youtube.com"
//                 console.log(username)
//         }
//         // console.log(website)
//         two()
// }
// one()

// if (true){
//         const usernamess="pinkus"
//         if (usernamess=="pinkus"){
//                 const websitenme="github"
//         }
        // console.log(websitenme)
// }
// const user={
// username:"rajan",
// price:99,
// welcomemessage: function(){
//         console.log(`welcome ${this.username}`)
//         console.log(this)
// }}
// user.welcomemessage()
// user.username="shyam"
// user.welcomemessage()

// console.log(this)

// function Chai(){
//       let username="tinku"
//         console.log(this)
        
// }
        // functiom and this bata acces parna paidina undefined
// Chai()

        // Arrow function

// const chai= () =>{
//         username="pinku"
//         console.log(this)
// }
// chai()

        // Implict return
        
// const try1=(a,b) => a+b 
// console.log(try1(2,3))

        // Immediately Invoked Function Expressions (IIFE)
        // Named IIFE
// (function chai(){
//         console.log("Databse connected")
// })()

        // Unnamed IIFE
// ( (name) => {
//         console.log(`ur name is ${name}`);
// })("tinku")

        // === to compare Data Type also
// let one=1
// let two="1"
// if (one===two){
//         console.log("hello world")
// }else{
//         console.log("hello raju")
// }

        // implicit scope

// let balance=200
// if(balance <=200) console.log("hello bhai"),console.log("kyse ho aap?")

// switch ("*"){
//         case "+":
//                 console.log("its plus");
//                 break;
//         case "-":
//                 console.log("its minus");
//                 break;
//         case "/":
//                 console.log("its divide");
//                 break;
//         case "*":
//                 console.log("its multiply");
//                 break;
//         default:
//                 console.log("enter valid syntax")
// }

        // shift+alt+down array to duplicate selected text

// const usergmail=""
// if (usergmail){
//         console.log("access granted to user")
// }else{
//         console.log("access denied")
// }

        // falsy values
// false,0,-0,"",BigInt=0n,null,undefined,NaN these are all falsy values

//truthy values
// "0", 'false', " ", [], {}, function(){}

        // to check for empty object
// try10={}
// if(Object.keys(try10).length==0) {
//         console.log("It is empty array")
// }

        // Nullish Coalescing Operator (??): null undefined

// let val1
// val1=5 ?? 10
// val1=null ?? 20
// val1=undefined ?? 30
// console.log(val1)

        // Terniary Operator
        // condition ? true : false

// const iceTeaPrice=200
// iceTeaPrice >=300 ? console.log("smaller than 201") :console.log("greater than 200")

// for(let i=0;i<=10;i++){
//         console.log(`${i} hello world`)
// }

        // forof loop

// const arry=["spiderman","batman","ironman","sandman"]
// for (const num of arry) {
//         console.log(num)
// }

// const hello="hello world"
// for (const say of hello) {
//         console.log(`your letter is ${say}`)
// }
        // Map
// const map=new Map()
// map.set('IN',"NewDElhi")
// map.set('NP',"Kathmandu")
// map.set('US',"Washington")
// map.set('Uk',"london")
// // console.log(map)

// for (const [key,obje] of map) {
//         console.log(key,";-",obje)
// }

// const hellossx={
//         age:17,
//         Name:"pinku"
// }
        // to loop in oobject

// for (const [key,value] of hellossx) {
//         console.log(key,":-",value)
// }

        // forin loop

// const hellll={
//         c:"printf",
//         java:"System.out.println",
//         python:"print",
//         bash:"echo"
// }
// for (const key in hellll) {
//       console.log(`${key} :- ${hellll[key]}`)
// }
// const programming=["js","java","python","kotlin","bash"]

// for (const key in programming) {
//      console.log(`${programming[key]} `)
// }

        // foreachloop
//  let programming=["js","java","python","kotlin","bash"]
//  programming.forEach(function (val){
//          console.log(val)
//  })

//         // arrowfunction
// let programming1=["js","java","python","kotlin","bash"]
//  programming1.forEach( (hello) => {
//          console.log(hello)
//  })

// const arry=[
//         {language:"English",
//         speakerdensity:"high"
//         },
//         {language:"Hindi",
//         speakerdensity:"medium"
//         },
//         {language:"Nepali",
//         speakerdensity:"low"
//         }
// ]
// arry.forEach((items,index) =>{
//         console.log(items.language,items.speakerdensity, index )
// })

        // filter to return the value in form of array foreach loop cannot return
// const num1=[1,2,3,4,5,6,7,8,9,10]
// const result=num1.filter( (item) => item>5)

// const result=num1.filter( function (item,index){
//         console.log(`${item} and its index is ${index}`)
//         return item>5
// })
// console.log(result)

// const num1=[1,2,3,4,5,6,7,8,9,10]
// const newnums=[]
// num1.forEach( (item) => {
//         if (item>5){
//                 newnums.push(item)
//         }
// }  )
// console.log(newnums)

// const books = [
//         { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//         { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//         { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//         { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//         { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//         { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//         { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//         { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//         { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//       ];
// const userchoice=books.filter( (item) => item.genre=="History")   
// console.log(userchoice)

// const userchoice1=books.filter( (item)=>{
//         return item.publish>=1995 && item.genre =="Science"
// })
// console.log(userchoice1)

        // insane use of map and filter
        
// const num4=[1,2,3,4,5,6,7,8,9,10]
// const finalno1=num4.map((item)=>item+10)
//         .map((item)=>item+1)
//         .filter((item)=>item%2==0)
// console.log(finalno1)
  // Day 6 of learning JavaScript
