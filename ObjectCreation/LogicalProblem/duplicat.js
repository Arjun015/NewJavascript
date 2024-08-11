// Program 1 

// How to Remove duplicates in Array

//  1 > using Set method 


let computer = ['Mouse','KeyBoard','Monitor','Mouse','CPU']
let removDuplicate = [...new Set(computer)]
console.log(removDuplicate)  // [ 'Mouse', 'KeyBoard', 'Monitor', 'CPU' ]


let Nature = ['River','Tree','Rockes','Mountain','Tree','Rockes']
let remov = [...new Set(Nature)]
console.log(remov)

let fruits1 = ["Mango","Banana","cherry","Mango"]
let remov1 = [...new Set(fruits1)]
console.log(remov1)


// 2 > using ForEach Method

// let names = ["Arjun","Dr.Swapnil","Sundara","Aamir","Sundara"]
// let aa = names.forEach(function(el,index){
//     return el.names =="Sundara"
// })
// console.log(el)









// Program 2

// how to remove duplicate elements position return in Array
let fruits = ['Mango','Apple','Mango','Grapes','Apple']
for(let i = 0 ; i < fruits.length ; i++){
    if(fruits[i] == 'Mango' || fruits[i] == 'Apple'){
        //console.log(fruits[i])        // return the element Position  - 0 , 2
        console.log(i)
        

    }
}



// let Fruit = ['apple','mango','apple','banana','apple']

// let arry = []

// for(let i=0;i<Fruit.length;i++){
//   if(arry.indexOf(Fruit[i])<0){
//     arry.push(Fruit[i])
//   }
// }

// console.log(arry)

// Program 3 


let Games = ['Cricket','Football','Football','Hockey','Holiball']
let arr = []

for(let i=0 ; i < Games.length ; i++){
    if(arr.indexOf(Games[i]) < 0 ){
         arr.push(Games[i])
    }
}
console.log(arr)

/* ----------------------------------*/
let cars = ['BMW','odi','mercidice','RollsRoyals','odi']
let cars2 = []
for(let i=0 ; i<cars.length ; i++){
    if(cars2.indexOf(cars[i])<0){
        cars2.push(cars[i])
       // console.log(cars2)

    }
}




// Program 4 

let place = ['Goa','Alibag','Raigadh','Pune','Nashik','Goa']
let arr2 = []

for(let i=0 ; i < place.length ; i++){
    if(arr2.indexOf(place[i]) < 0 ){
        arr2.push(place[i])
    }
}
console.log(arr2)











// // setTimeout function is the async in nature 

// setTimeout(function(){
//     console.log('Hello')
// },2000)

// setTimeout(function(){
//     console.log('Bye')
// },1000)


// // call Back Hell 

// setTimeout(function(){
//     console.log('Hi')
//     setTimeout(function(){
//         console.log('Bye')
//         setTimeout(function(){
//             console.log('Yes')
//             setTimeout(function(){
//                 console.log('Hello')
//             },1000)
//         },5000)
//     },3000)
// },2000)


// // Promise

