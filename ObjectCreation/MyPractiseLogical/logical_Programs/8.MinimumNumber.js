// Program : find the minimum number in given array

let arr = [11,34,55,45,71,23,43,9,10]
let minimumNum = arr[0]
for(let i=0 ; i<arr.length ; i++){

    if(arr[i] < minimumNum){
        minimumNum = arr[i]
    }
}
console.log(minimumNum)
