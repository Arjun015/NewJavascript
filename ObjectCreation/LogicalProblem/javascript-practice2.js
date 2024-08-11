

// // variable == > js variable where store the values

// // local Variable => declered inside the the function , accessible within the function or blockl

// // syntax :

// function abc(){
//     let x=10;   // local variable
// }


// // Global variable => declared Outside , declared with window object ,accessible from any fn

// // syntax : 

// var data = 200  // global

// function a(){
//     document.write(data)
// }



// // switch stetement 


// let grade = "B"
// let result ; 
// switch(grade){
//     case 'A' : result = "A Grade";
//     break;

//     case "B" : result = "B Grade"
//     break
// }

// console.log(result)


// // do----while loop   


// let cc = 45 
// do{
//     console.log('hello')
//     cc++;
// }while(cc <= 50)



// // break statement 

// // if(condition){
// //  break
// // }


// // function  

// // function declaration 


// function cal(x,y){   // function parameter
//     console.log(x + y)

// }
// cal(10,20) // function calling


// // function expression 

// let cal2 = function(x,y){
//     console.log(a+b)
// }
// cal2(30 , 30)


// // Arrow function 

// let add =(x , y)=>{
//     console.log(x + y)
// }
// add(30,40)




// // Array 

// //Array literal 

// let arrName = ["Apple","Mango","cherry","Grapes"]

// // instance of Array 

// let arr = new Array()   // new keyword is used to create instance of Array


// Array Method  

//push() => add to the last , return the position of element

let fruits = ["Apple","Mango","Grapes","Water-Melon"]
let ff = fruits.push('cherry')
console.log(ff)  // 5 


// pop() == > remove to the last ,return the last element

let fruits1 =  ["Apple","Mango","Grapes","Water-Melon"]
let y = fruits1.pop()
console.log(y)





// syntax of Promises   

// let promise = new Promise(function(resolve,reject){

//     // producing code

//     resolve();  // when successful
//     reject(); // when error
// }).then(function(values){
//      // code if successful
// },function(error){
//     // code if reject
// })



// promise


let promise = new Promise(function(resolve,reject){

    // some code ;

    resolve(); // successful
    reject() ; // reject
}).then(function(resolve){
    // if code is sucessful
},function(reject){
    // if code is reject
})




// Promise 

let promise3 = new Promise(function(resolve,reject){
     
       // some code 
       resolve()
       reject()

}).then(function(resolve){
    // if code is successful
},function(reject){
    // reection for the catch
})
 // if code is succesful 




























