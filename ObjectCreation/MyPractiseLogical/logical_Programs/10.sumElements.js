//Pragram : sum of all elements in given array

/*
function sumAllElements(arr){
    return arr.reduce((sum , num)=> sum + num ,0)
}
let input = [45,23,42,12,12,56,10,100,200]
let sum = sumAllElements(input)
console.log(sum)

*/

function sumArrayElements(array){
    return array.reduce((sum,num)=>sum+num,0)
}
let inputA = [34,45,12,90,65,23,100,31]
let summ = sumArrayElements(inputA)
console.log(summ)