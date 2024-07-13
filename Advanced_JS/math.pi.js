// console.log(Math.PI)
// Math.PI=2
// console.log(Math.PI)

// const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor)

const chai={
    price:"250",
    name:"ginger chai",
    isavaibale:true
}

console.log(Object.getOwnPropertyDescriptor(chai ,"name"))

Object.defineProperty(chai,'name',{
    writable: false,
  enumerable: false,
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"))
