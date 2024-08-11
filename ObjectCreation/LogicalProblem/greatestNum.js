// find the gretest number 

// Program 1 


let ss = 200
let rr = 300

if(ss > rr){
    console.log("ss is the greater Num ",ss)
}
else{
    console.log("rr is the greater Num ",rr)

}

// Program 2 

let sa = 200
let ra = 300
let da = 500

if(sa > ra && sa > da){
    console.log("the greater Num ",sa)
}
else if(ra > da){
    console.log("the greater Num ",ra)

}else{
    console.log("the greater Num",da)
}


// Program 3

let num = [11,89,34,56,54]

let maxNum = Math.max(num)
console.log(maxNum)
// for(let i=0 ; i<num.length ; i++){
//     if(Math.max(num[i]) > i){
//         console.log('Max number is',i)
    
//     }else if(Math.min(num[i] > i)){
//         console.log('Min number is',i)
//     }
// }

var array = [3 , 6, 2, 56, 32, 5, 89, 32];
var largest= 0;

for (i=0; i<=array ;i++){
    if (array[i]>largest) {
        largest=array[i];
    }
}

console.log(largest)

