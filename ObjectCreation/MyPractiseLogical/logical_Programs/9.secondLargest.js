//Program-15 : find the second largest number in the given Array

function secondLargest(arr){
    let largest = Math.max(...arr) // find the largest value from array
     arr  = arr.filter(num=> num!==largest) // find the sec largest elements
     return Math.max(...arr)
}
let inputArray = [43,54,11,78,34,44,53]
let sss = secondLargest(inputArray)
console.log(sss) // 54 

