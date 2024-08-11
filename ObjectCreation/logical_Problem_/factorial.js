// Factorial number Program    

// 6! = 6*5*4*3*2*1

// Program 1

/*
function factorial(m){
    let cc = 1
    for(let i=m ; i>=1 ; i--){
        cc = cc * i
    }
    console.log(cc)
}
factorial(4)  // 24
factorial(8)  // 40320
factorial(5)  // 120
factorial(6)  // 720     */
/*
1*4 => 4
1*3 => 3
1*2 => 2
1*1 => 1
*/ 

//let gg = 5 ;
// let count1 = 1 ;
// for(let i =gg ; i>=1 ; i--){
//     count1 = count1 * i
// }
// console.log(count1)

// Program 2

function recur(nn){
    if(nn <= 1){
        return nn
    }
    return nn*recur(nn-1)
}
let rcr = recur(5)  // 120 
console.log(rcr)

let rcrr = recur(8)
console.log(rcrr) //40320
/*
5*recur(4)
4*recur(3)
3*recur(2)
2*recur(1)
*/