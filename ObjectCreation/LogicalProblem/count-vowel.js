
// // counting the vowel in the == > {string}

// // program 1 


// let x = "I am master in the Javascript".toLocaleLowerCase()
// //console.log(x)
// count = 0
// for(let i=0 ; i < x.length ; i++){
//     if(x[i] == 'a' || x[i] == 'e' || x[i] == 'i' || x[i] == 'o' || x[i] == 'u'){

//         count = count + 1

//     }
// }
// console.log(count)




// // Program 2 

// let ab = "I am always Happy".toLowerCase()
// let count1 = 0 
// for(let i=0 ; i < ab.length ; i++){
//     if(ab[i] == 'a' || ab[i] == 'e' || ab[i] == 'i' || ab[i] == 'o' || ab[i] == 'u'){
//        count1 = count1 + 1
//     }
// }
// console.log(count1)



// // Program 3

// // let ss = "I am the greatest in The World".toLowerCase()
// // let count2 = 0 
// // for(let i=0 ; i < ss.length ; i++){
// //     if(ss[i] =='a' || ss[i] =='e' || ss[i] =='i' || ss[i] =='o' || ss[i] =='u'){
// //         count2 = count2 + 1
// //     }
// // }
// // console.log(count2)



// // counting the vowel in the ==>  [ Array ]


// // Program 4 

// let pn = ['a','b','c','d','r','e','f','i','o','o','o','i']
// let countA = 0
// for(let i = 0 ; i < pn.length ; i++){
//     if(pn[i] == 'a' || pn[i] == 'e' || pn[i] == 'i' || pn[i] == 'o' || pn[i] == 'u'){
//         countA = countA + 1
//     }
// }
// console.log(countA)



// // program 5 


// let ss = ['a','e','i','o','s','p','d','f']
// let countB = 0 
// for(let i=0 ; i < ss.length ; i++){
//     if(ss[i] =='a' || ss[i] =='e' || ss[i] =='i' || ss[i] =='o' || ss[i] =='u'){
//         countB = countB + 1
//     }
// }
// console.log(countB)



// // counting the alphabets 

// // Program 6 

// let abcd = ['a','e','r','p','s','e','i','i','o','u']
// let result = {}
// for( let i=0 ; i < abcd.length ; i++){
//     if(result[abcd[i]]){
//         result[abcd[i]] = result[abcd[i]] + 1
//     }else{
//         result[abcd[i]] = 1
//     }
// }
// console.log(result)



// // Program 7 
// let bat = ['a','e','r','p','s','e','i','i','o','u','g','g','g','g','g','g']
// let reslt = []
// for(let i = 0 ; i < bat.length ; i++){
//     if(reslt[bat[i]]){
//         reslt[bat[i]] = reslt[bat[i]] +1
//     }else{
//         reslt[bat[i]] = 1
//     }

// }
// console.log(reslt)



// // Program 8 

// // calculate the how many the number is repeats

// let sum = [11,22,33,44,55,55,66,77,88,99,99,12,99,11]
// let countZ = 0 
//  for(let i = 0 ; i < sum.length;i++){
//      if(sum[i] === 99){
//          countZ = countZ + 1
//      }

//  }
//  console.log(countZ)





// // Program 9 

// let add = [11,22,33,44,55,55,66,77,88,99,99,12,99,11]
// let countT = 0 
//  for(let i = 0 ; i < sum.length;i++){
//      if(add[i] === 44 || add[i] ===33){
//          countT = countT + 1
//      }

//  }
//  console.log(countT)

































// // let hhhh = "I am new to js".toLowerCase()
// // let count = 0
// // // a , e ,i ,o ,u
// // for (let i = 0; i < hhhh.length; i++) {
// //     if (hhhh[i] == "a" || hhhh[i] == "e" || hhhh[i] == "o" || hhhh[i] == "u" || hhhh[i] == "i") {
// //         count = count + 1
// //     }
// // }
// // console.log(count)

// // let sum = [11,22,33,44,55,55,66,77,88,99,99,12,99,11]
// // // // let count = 0 
// // // // for(let i = 0 ; i < sum.length;i++){
// // // //     if(sum[i] === 99){
// // // //         count = count + 1
// // // //     }

// // // // }
// // // // console.log(count)


// // word = ['b', 'o', 'o', 'k']
// // for (let i = 0; i < word.length; i++) {
// //     if (result[word[i]]) {
// //         result[word[i]] = result[word[i]] + 1
// //     }
// //     else {
// //         result[word[i]] = 1
// //     }
// // }
// // console.log(result)


let myStr = "everything is possible for me"
let str2 = myStr.match(/[^aeiou]/g,"").length
console.log(str2)