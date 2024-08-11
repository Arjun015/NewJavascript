// Program  1 

// reverse number program  

// reverse  

let arr = [2,34,567,456,65,1]
let ans = arr.reverse()
console.log(ans)



// Program 2 

let arrA = [12,321,765,21,90,56,89,87]
let temp = 0
let n = arrA.length
for(let i=0 ; i < n/2 ; i++){
    let temp = arrA[i]
     arrA[i] = arrA[n-i-1]
     arrA[n-i-1] = temp
}
console.log(arrA)


// Program 3   =====>   Two for loop in one loop 

let aa = [23,42,32,49 ,99,76,755,5443,433,333,36]
let temp1 = 0 
let mm = aa.length
for(let i=0 , j = mm-1 ; i < mm/2 , j > mm/2 ; i++ , j--){
    let temp1 = aa[i]
    aa[i] = aa[mm-i-1]
    aa[mm-i-1] = temp1
    
} 
console.log(aa)


