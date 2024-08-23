// Program-4 : find the Largest number in given Array


// Number Data Type
let num1 = 11
let num2 = 45
let num3 = 13

if(num1 > num2 && num2 > num3){
    console.log('num1 is greatest',num1)
}else if(num2 > num3){
    console.log('num2 is gretest',num2)
}else{
    console.log('num3 is greatest',num3)
}


/*

// greatest number is Array

let arr = [23,45,66,11,89,576,33,999]
let greter = Math.max(...arr)
console.log(greter)




// without using inbuilt function 
let arrA = [23,45,66,11,89,576,33,999]
let largest = arrA[0]
for(let i=0 ; i<arrA.length;i++){
    if(arrA[i] > largest){    //23 > 23
       largest = arrA[i]
    }
}
//console.log(arrA)
console.log(largest)


*/
//---------------------------------------

let largArray = [11,45,100,32,90,54]
let largestNum = largArray[0] //11

for(let i=0 ; i < largArray.length ; i++){
    if(largArray[i] > largestNum){
        largestNum = largArray[i]
    }
}
//console.log(largArray)
console.log(largestNum)