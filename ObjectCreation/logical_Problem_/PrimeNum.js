//----------{ Prime number }--------------

// Prime Number => divisible by 1 or itself 
// Program 1  


function Prime(n){
    let c = 0
    for(let i=2 ; i< n ; i++){
        if(n%i === 0){
            c =1 
            
        }
    }
    if(c==1){
        //console.log('No')
        return false
    }
    else{
        //console.log('Yes')
        return true
    }
}
//Prime(3)
//Prime(50)
//Prime(24)

let x = 100
let sum = 0 
let c = 0
for(let i=2 ; i<=x ; i++){
    if(Prime(i)){
        //console.log(i)
        c++
        sum += i // sum = sum + i 
    }

}
console.log(c) // 25
console.log(sum) // 1060

