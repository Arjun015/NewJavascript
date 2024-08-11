

//  calculate the Even numbers from 6 to 10

let limit = 10 
let sum = 0 
for(let i = 6 ; i <= 10 ; i++){
    if(i% 2 == 0){
        console.log(i)   // 6 , 8 ,10
        sum  = sum + i ;
    }
}
console.log(sum) // 24


// write object in js and make instance and retrive value

let obj = function(fn,ln,ag){
    this.firstName = fn 
    this.lastName = ln
    this.age = ag
    this.display = function(){
        console.log(this.firstName + this.lastName)
    }
}
let aaa = new obj("Arjun","Jadhav",24)
console.log(aaa)
console.log(aaa.display())
console.log(aaa.firstName)





// let addition = [1,2,3,4,5]
// let summ = 0 
// for(let i=0 ; i < addition.lenght ; i++){
//      //console.log(addition[i])
//     summ = summ + i
//     console.log(summ)
//     // addition.reduce(function(acc,el){
//     //     return acc + el
        
//     // })
// }
//console.log(summ)
//console.log(addition)
// //let summ = 0
// let aa = addition.reduce(function(acc,el){
//     //return acc + el
//     return el%2 == 0
    
//     // if(el%2 == 0){
//     //     sum = sum + el
//     // }
// },0)
// console.log(aa)


// let add = [1,2,3,4,5]
// let summ = 0
// let ff = add.reduce(function(acc,el){
//     return acc + el
    
// },0)
// for(let i = 0 ; i <=add.length ; i++){
//     if(i%2 == 0){
//         console.log(i)
//       summ = summ + i
//       console.log(summ)
//     }
//     //console.log(summ)
// }


// let summ = 0
// for(let i=1 ; i <= add.length ; i++){
//     if(add[i] == 0){
//         //console.log(add[i])
//     }
// }
// console.log(add[i])


let arr=[1,2,3,4,5]
let summ=0

for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
          summ=summ+arr[i]
    }
  
}
console.log(summ)