
// function types 

//function declaration 
//function expression
//Arrow function

let Name = "Harish and Ajay"
console.log(Name)
console.log(typeof Name)

console.log('---------------/////////----------------------')

let num = 100
//console.log(num)
console.log(typeof num)


// two type of comments in javascript 

//   single line comment 

/* Multiline comment */



//function declaration 
//function expression
//Arrow function

//loops 

// for loop

let a = 10
for(let i=0 ; i <= 10 ; i++){ // 1 2 3 5 6 7 8 9 10
    console.log(i) // 0 1 2 3  4 5 6 7 8 9 10
}

console.log('-----//////------')

function calculator(x , y){
    console.log(x + y)
    console.log(x - y)
    console.log(x * y)
    console.log(x / y)
    console.log(x % y)
}
calculator(20,20)
console.log('---------/////------------')

// length property 

let str = "Harish having Many affairs"
console.log(str.length)



let str1 = "Harish having Many affairs"
console.log(str1[8])

let nm = 'Arjun Jadhav'
let nm2 = nm.startsWith('A') // true
console.log(nm2)



let hm = 'Arjun Jadhav'
let hm2 = nm.startsWith('r') // 
console.log(hm2)


let jkl = 'Arjun Jadhav'
let jkl2 = nm.endsWith('Jadhav') // 
console.log(jkl2)

// Array 
//            0         1        2        3         4              
let names = ['Arjun',"Harish",'katrina',"karina",'Deepika']
console.log(names)
console.log(names.length)
console.log(names[1])
console.log(names[4])

let rr = names.pop()
console.log(rr)
