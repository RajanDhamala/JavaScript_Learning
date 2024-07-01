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


const userssssss ={
    name:"bablu",
    age:19,
    inkuminkkupunkius:"hello world"
}
console.log(userssssss.age)
const {inkuminkkupunkius:essay}=userssssss
console.log(essay)
