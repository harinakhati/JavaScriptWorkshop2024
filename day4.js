// console.log(1+1)
// console.log(3+4)
// console.log(4-5)


//function
//Regular functiom
// function add(a,b,c=9) //a, b are parameter and c is default as 9
// {
//     console.log(a+b+c)
// }

// add(1,3)///1,3,4 are arguments , data invoked at function call
// add(1,3,1)//here default doesn't work as 1 is given


///Named Function
// let add=function(a,b,c)
// {
// console.log(a+b+c)
// }
// add(2,4,3)


// //Arrow Function
// let add=(a,b,c) =>
//     {
//         console.log(a+b+b)
//         console.log("Hello")
//     }
// add(1,2,1)

//Named function

    // const add=(a,b,c)=>
    // {
    //     console.log(a+b+c)
    //     console.log("Hello World")
    // }
    // add(1,2,3)
    
    // const callBack = (fn)=>{
    //     return fn
    // }


    //Anonymous Function
    // (()=>{
    //     console.log("Hello World")
    // })()

//using Regular function
    // function square(a)
    // {
    //     console.log(a*a)
    // }
    // square(5)
    // square(6)


    //Named function
    // let square=function(a)
    // {
    //     console.log(a*a)
    // }
    // square(5.8)


    //Arrow Function
    // let square=(a)=>{
    //     console.log(a*a)
    // }
    // square(5.9)

    //Using anonymous function not applicable
    // (()=>{
    //     console.log(a*a)
    // })(a)
    
// const square=(a)=>a*a

// const result=square(9)
// console.log(result)


//LOOPS in JavaScript


// const friends=['Utshah','Luna','Rashmi','Puja']
// console.log(friends[2])

//For LOOP
// for(let i=0;i<4;i++)
// for(let i=0;i<friends.length;i++)
// {
//     console.log(friends[i])
// }


//For(initialization;condition;incre/decr)
//i++ ====  i=i+1

//While LOOP
// let i=0//initialization
// while(i<friends.length){//condition
//     console.log(friends[i])
//     i++//inc/dec
// }


//Array
// for(friend of friends){
//     console.log(friend)
// }


//object
// const person={
//     name:'Rashmi',
//     address:'Maitidevi'
// }
// for(let key in person)
// {
//     console.log(key,person[key])
// }


//Hoisting

// console.log(name)
// // var name="Harina"

// // let name="Harina"


// add()//invoke at starting or before initiatilzation
// function add(){
//     console.log(1+1)
// }


//hoisted is not acceptable in let
// add()
// let add=()=>{
//     console.log(1+1)
// }

//named function is also not hoisted and regular function is hoisted
// var add=function(){
//     console.log(1+1)
// }


function example(){
    console.log(y)
    var y=99
}
example()