// Program-13 : find the fibonisis number

/*

let a = 0
let b = 1

for(let i=0 ; i<= 10 ; i++){
    let temp = a + b
    a = b
    b = temp
    console.log(temp)
}

*/
/*

function fibonisis(a,b){
    
    for(let i=0 ; i <=10 ; i++){
        let temp = a + b // result
        a = b
        b = temp
        console.log(temp)
    }
    //console.log(temp)
}
fibonisis(1,1) 

*/

function fibonisis1(a,b){
    for(let i=0 ; i<=50 ; i++){
        let temp1 = a + b
        a = b
        b = temp1
        console.log(temp1)
    }
}
fibonisis1(4,5)
