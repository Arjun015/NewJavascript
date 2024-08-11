
//Boolean 

let x = 10 
let y = 20 
let z = 10 

//console.log(x)



 if(x == z){  // if condition is true then block is executed
   console.log('Mango')  // Mango
 }


 if(x == y){
    console.log('Apple')
}

// console.log('hello')




// undefined

var a ;
console.log(a)




// variable ==> variable where store the value , case-sensitive , let - var - const

// local variable

function abc(){
    let c = 10  // local variable 
    console.log(c)
}


// global variable

var ss = 10
function body(){
    console.log(ss)
}



// difference between var , let , const 

/* --------- 1 ----------------*/

//var ------- 

// it can be declared without initialization 
var xy = "Happy"
console.log(xy)

// var xy ; 
// xy = "Happy"
// console.log(xy)


// let ----

// it can be declared without initialization 

let dd = "hard-worker"
console.log(dd)

// const ---

// it cannot be declared without initialization


const tt = 'Super'
console.log(tt)

// const ppp ;
// ppp = 'Hello'
// console.log(ppp)



/*--------------  2 -------------------- */

// scope 

// var --------- scope of var variable is functional scope
// let --------- scope of let variable is block scope 
// const ---------- scope of const variable is block scope 


/*-------------- 3  --------------------*/

// var ------

// it can be updated and redeclared 

var ff = 10
console.log(ff)
var ff = 20
console.log(ff)


// let ----------

// it can be updated but not redeclared 
let hh = 30
console.log(hh)
 hh = 40
console.log(hh)


// const -----------

// it cannot be updated and redeclared

const gg = 300
console.log(gg)





/*--------------  4 ---------------------*/

// var -----------------

// it can be accessed without initialization as its default value is "undefined"

var rrr ; 
console.log(rrr)  // undefined

// let -------------------

// it cannot be accessed without initialization as its return error





// const ----------

// it cannot be accessed and declared without initialization 







// ---------- symbol datatype ------------

// it is new dataType , introduced in the ES6 version of Javascript , it is used to store 
// ananymous and unique value 

var symbol = '$'
console.log(symbol)

// data Types------------------------------------------------------------------>

// 1 > Primitive ==>{ can store only single value }
    
  /* 1 > String
   2 > Number
   3 > Boolean
   4 > symbol
   5 > undefined
   6 > typeof
   7 > BigInt
   8 > null

    
// 2 > Non-Primitive ==> {can store multiple & complex value }

   1 > Array
   2 > Object
   3 > RegExp */






  //  if----else if------else

  let as = 30 

  if(as == 10){
    console.log("a is equal to 10")
  }
  else if(as == 20){
    console.log("b is equal to 20")
  }else if(as == 30){
    console.log("a is equal to 30")
  }


  // do-----while loop


  let i = 20 

  do{
    console.log("Arjun is the Greatest")
    i++
  }while(i <= 25)






  //==========  Function ==============


  //function declaration 


  function add(x,y){
    console.log(x + y)

  }
  add(22,33)
  add(55,67)

  // function expression

  let add2 = function(a,b){
    console.log(a+b)
  }
  add(77,44)


  // Arrow function
  
  let add3 = (u,t)=>{
    console.log(u+t)
  } 
  add3(45,45)