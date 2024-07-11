// const promiseOne=new Promise( (resolve,reject)=>{
//   setTimeout (function(){
//     console.log("Am i called?")
//     resolve()
//   },1000)
// })
// promiseOne.then(function(){
//     console.log("1st promise consumed")
// })

// new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("executed 2nd timeout")
//         resolve()
//     }, 3000);
// }).then(function(){
//     console.log("2nd promise consumed")
// })

// const promiseThree=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("timeout 3 called")
//     resolve({username:"chai",email:"chaiaurcode123@gmail.com"})
//     },1000)
// }).then(function(user){
//     console.log(user)
// })


// const promiseFour=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error=false
//         if (!error){
//             resolve({username:"tinku",password:"123"})
//         }else{
//             reject("Something went wrong")
//         }
//     },1000)
// }).then((data)=>{
//     console.log("promise 4 consumed")
//     console.log(data)
//     return data
// })
// promiseFour
// .then((user)=>{
//     return user.password
// })
// .then((password)=>{
//     console.log(password);
// })
// .catch((error)=>{
//     console.log(error)
// }).finally(()=>console.log("promise is either succed or failed"))

// promiseFour.then().catch()

// const promisefive=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//        let error=false
//        if(!true){
//         resolve({language:"javaScript",speed:"2x"})
//        }else{
//         reject("ERROR: JS went wrong")
//        }
        
//     },2000)
// });
 
// async function consumepromisefive(){
//     try {
//         const response = await promisefive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumepromisefive()


// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response)=>{
//     return response.json()
// }).then((data)=>{
// console.log(data)
// }).catch((error)=>{
//     console.log(error)
// })



// const hello=async ()=>{
//     try {
//         let response=await fetch("https://jsonplaceholder.typicode.com/users")
//         const data= await response.json()
//         console.log("data fetched",data)
//         return data;
//     } catch (error) {
//         console.log("fetching Error:",error)
//         throw error;
//     }
// }
// hello()

(async ()=>{
    try{
        const response=await fetch("https://jsonplaceholder.typicode.com/users")
        const data= await response.json()
        console.log(data)
    }catch(helloo){
        console.log("Error",helloo)
    }finally{
        console.log("code had been executed")
}
})()
