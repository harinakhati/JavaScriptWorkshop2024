// const name="Harina Khati"
// name="Harina"

// const days=['Sunday','Monday','Tuesday']
// days.push('Wednesday')//insert at last
// days[2]='Thursday'
// days.pop('Tuesday')//pull at last
// console.log(days)

// days.unshift('Saturday')//insert at first
// days.shift('Sunday')//pull at first
// console.log(days)
// days.length
// console.log(days.length)

// const numbers=[1,2,3,4,5]

// slice ---> used to create a copy of a portion of the Array. 
// It doesn't modify the original array

//slice(startIndex, endIndex)--->where startIndex is inclusive,
//  endIndex is exclusive
// const newSlicedArray = numbers.slice(1,4)
// console.log(numbers)
// console.log(newSlicedArray)


//splice --->is used to change the content of an array by removing
// or replacing exsiting array and/or adding new element
// splice(startIndex,deletcount,item)

// let splicedNumbers=numbers.splice(2,1,10,11)
// console.log(numbers)
// console.log(splicedNumbers)

//split
// let text="I am learning JS"
// const newSlicedArray=text.split(" ")
// console.log(newSlicedArray)


// const person={
//     name:"Harina",
//     address:"Maitidevi",
//     age:18
// }
// Object.freeze(person)
// person.number=9870
// console.log(person)


// console.log(Object.keys(person))//keys at person
// console.log(Object.values(person))//values at person


//Conditional in JavaScript
// const isRaining=true
const isRaining=false
// if(isRaining)
// {
//     console.log("Bring umbrella")
// }
// else{
//     console.log("No need to bring umbrella")
// }




//ternary operator
// const result=isRaining?"Carry umberalla":"Don't carry umberalla"


//short circuit evaluation
// const result=isRaining&& "carry Umberalla"||"Don't carry"
// console.log(result)



let isLoggedIn=true
const name= isLoggedIn && "Authenticated"
console.log(name)


// const temperature=30
// if(temperature>30)
// {
//     console.log("It is hot outside")
// }
// // else if(temperature>25 && temperature<=30)
// else if(temperature>25||temperature<=30)
// {
//     console.log("It is moderate")
// }
// else{
//     console.log("It is cold outside")
// }




//Nullish coelescing Operator

// let age=null
let age= undefined
// let age=18
let result=age ??"No age"
console.log(result)