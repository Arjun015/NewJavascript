
// fibonesis Program 

// Program 1 

// 0 1 1 2 3 5 8 13 21...

function fibonesis(m){
    let a=1, b=2
    console.log(a)
    console.log(b)
    for(let i=3 ; i<=m ; i++){
        c = a+b
        console.log(c)
        a = b
        b = c

    }
}
//fibonesis(6)
//fibonesis(7)

// Program 2
let num = 60
let x=0 , y = 1
console.log(x)
console.log(y)
for(let i= 3 ; i< num ; i++){
    z = x + y
    console.log(z)
    x = y
    y = z
}
