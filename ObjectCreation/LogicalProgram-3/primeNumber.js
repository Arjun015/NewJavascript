// Program to check if a number is a prime number


// Program 1 


let num = 6
let flag = true
for(let i=2 ; i<num ; i++){
    if(num%i ==0){
        flag = false
        break
    }
}
if(flag == true){
    console.log('Number is Prime')
}else{
    console.log('Number is Notprime')
}


//Program 2 
//counting the prime Number



let m = 50 
function prime(m){
    let aa = 0
    for(let i=2 ; i<m ; i++){
        if(m%i == 0 ){
            aa =1
        }
    }
    if(aa == 1){
        return false
    }else if(aa ==0){
        return true
    }
}
for(let i=2 ; i<=m ; i++){
    if(prime(i)){
        console.log(i)
    }
}
