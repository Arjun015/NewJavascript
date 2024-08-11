// Program 1 


// fobonesis =>  0 1 1 2 3 5 8--------


let sum = 0
let m = 5
let a = 0 
let b = 1
console.log(a)
console.log(b)
for(let i=3 ; i<m ; i++){
    
    let c = a + b
    console.log(c)
    a = b
    b = c
    sum = sum + c
}
console.log(sum)
console.log('----------/////--------')


// Program 2  

//Problem-statement => find the n term of the fibonesisi series 

let num = 10 
let x = 0 
let y = 1 
console.log(x)
console.log(y)
let z = x + y 
for(let i=3 ; i <=num ; i++){
    let z = x + y
     console.log(z)
    x = y 
    y = z 
    
    if(i == num){
        console.log('--------')
        console.log(z)
    }
}
