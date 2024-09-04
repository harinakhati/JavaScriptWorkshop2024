
//CallBack
// function sayHello(name,callBack){
// console.log(name)
// callBack()
// }


// function sayGoodBye(){
//     console.log("Good Bye")
// }
// sayHello("Harina",sayGoodBye)


//HOF
// const fruits=['Apple','Banana',"Litch",'Mango']

// //forEach HOF
// //in array case forEach is best
// fruits.forEach(function(fruit){
//     console.log(fruit)
// })




// const numbers=[1,2,3,4,5]

// const squaredNumbers=[]


// numbers.forEach(function(number){
//     // console.log(number)
//     squaredNumbers.push(number**2)
// })

// console.log(squaredNumbers)


// //Map HOF
// const squareNumbers=numbers.map(function(number){
//     // console.log(number)
//     return number**2
// })

// console.log(squareNumbers)

// const users=[
//     {
//         id:1, 
//         Firstname:"Harina",
//         Lastname:"Khati",
//         address:"Maitidevi"
//     },
//     {
//          id:2, 
//         Firstname:"Luna",
//         Lastname:"Dahal",
//         address:"Kapan" 
//     },
//     {
//         id:3, 
//        Firstname:"Rima",
//        Lastname:"Pant",
//        address:"patan" 
//    }
// ]




// users.forEach((user)=>{
//     console.log(user)
//     // console.log(user.Firstname+user.Lastname)
// })


// const result=users.map((user)=>{
    // return{
        //  ...user,// spread operator
        // name:"haha"
        
        // id : user.id,
        // Firstname : user.Firstname,
        //  Lastname : user.Lastname,
        // Fullname : user.Firstname+user.Lastname,
        // address : user.address
    // }
// })
// console.log(result)
// console.log(users)


//Task
// const numbers2=[1,2,3,4]


// [
//     {
//         number:1;
//         name :"A"
//     },
//     {
//         number:2;
//         name :"B"
//     },
//     {
//         number:3;
//         name :"C"
//     },
//     {
//         number:4;
//         name :"D"
//     }
// ]

// const result1=numbers2.map((user)=>{
//     return{
//         number:user,
//         name : 'A'
//     }
// })
// console.log(result1)


// const numbers3 =[1,2,3,4,5,6,7,8,9,10]


// const evennumbers=numbers3.filter((number)=>{
//     // return number %2==0
//     return number %2!=0
// })

// // console.log(evennumbers)


// const books=[
//     {
//         title:"Mahabir Pun",
//         author:"Mahabir Pun",
//         year:2023
//     },
//     {
//         title:"Think like a monk",
//         author:"Jay Bhatta",
//         year:2020
//     },
//     {
//         title:"The 7 habits of highly effective people",
//         author:"Stephen Covey",
//         year:1990
//     },
//     {
//         title:"Atomic Habits",
//         author:"James Clear",
//         year:2018
//     }
// ]


// const output=books.filter(function(book){
//     return book.author=="Mahabir Pun"
// })
// console.log(output)


// // const output=books.filter(function(book){
// //     return book.year>2000

// // })
// // console.log(output)

// // const files=["app.js","index.html","apple.c","style.css"]

// // files.filter((file)=>{
// //     return file.endsWith(".js")
// // })
// // console.log(files)

// // const data=[10,null,8,"Harina",undefined,38]

// // data.filter((item)=>{
// //     return item!=null && item !=undefined && item!=38
// // })
// // console.log(data)



// //reduce
// const numbers=[1,2,3,4,5]

// const result=numbers.reduce(function(accumulator,currentValue){
//     return accumulator+currentValue
// // },0)
// },1)

// console.log(result)


// const cartItems=[
//     {
//         name:"EarPods",
//         quantity:1,
//         price:2800
//     },
//     {
//         name:"Earphone",
//         quantity:2,
//         price:280
//     },
//     {
//         item:"Bag",
//         quantity:3,
//         price:3400
//     }
// ]

// //Total quantity, total amount

// const output=cartItems.reduce(function(accumulator,currentProduct){
//     // accumulator.totalPrice=accumulator.totalPrice+(currentProduct.quantity*currentProduct.price)
//     accumulator.totalPrice+=currentProduct.quantity*currentProduct.price
//     accumulator.totalQuantity=accumulator.totalPrice+currentProduct.quantity
//     return accumulator
// },{totalPrice:0,totalQuantity:0})

// // console.log(output)


// const people=[
//     {
//         name:"Harina",
//         age:18
//     },
//     {
//         name:"Luna",
//         age:22
//     },
//     {
//         name:"Rima",
//         age:17
//     },
//     {
//         name:"Puja",
//         age:18
//     }
// ]

// const groupedData=people.reduce(function(accumulator,person){
//     const age=person.age
//     if(!accumulator[age]){
//         accumulator[age]=[]
//     }
//     accumulator[age].push(person)
//     return accumulator
// },{})


// console.log(groupedData)






