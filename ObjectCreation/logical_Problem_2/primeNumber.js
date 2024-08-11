
// Program 1   

//primeNumber => its divisible by 1 & itself 
let n = 37 
let a = 0
for(let i=2 ; i<n ; i++){
    if(n%i == 0){
        a = 1 
    }
}
if(a == 1){
    console.log('notPrimeNumber')
}else if(a == 0){
    console.log('PrimeNumber')
}



// Program 2 

function Prime(num){
    let a = 0 
    for(let i=2 ;i < num ; i++){
        if(num%i == 0){
            a = 1
        }
    }
    if(a == 1){
        console.log('notPrime_')
    }else if(a == 0){
        console.log('Prime')
    }
}
Prime(37)

// Program 3   ---------> counting the prime number 


let m = 100
function prim(m){
    let aa = 0 
    for(let i=2 ; i < m ; i++){
        if(m%i == 0){
            aa = 1
        }
    }
    if(aa == 1){
        return false
    }else if(aa == 0){
        return true

    }
}

for(let i=2;i<=m;i++){
        if(prim(i)){
            console.log(i)
        }
    }

// if(prim(87)){
//     console.log('Prime')
// }else{
//     console.log('NotPrime')
// }