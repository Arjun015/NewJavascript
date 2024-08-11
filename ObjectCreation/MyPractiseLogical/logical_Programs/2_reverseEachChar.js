// Program-2 : program of whole string are not only reverse each character of string

let stringA = "Everything is possible for me"
let rev = ""
for(let i=0 ; i < stringA.length ; i++){

    rev = stringA[i] + rev
}
let outPut = rev.split(' ').reverse().join(' ')
console.log(outPut)





// function reverseEachChar(str) {

//     let rev = ""
//     for (let i = 0; i < str.length; i++) {
//         rev = str[i] + rev
        
//     }
//     return rev
// }

// let outPut = reverseEachChar('Everything is possible for me')
// console.log(outPut)


// let nameAA = "I am very handSome" // outPut: Bacchan Amitab Abhishek
// let strr = ""
// let wordd = ""
// for(let i =nameAA.length-1 ; i>=0 ; i-- ){
//     if(nameAA[i] !== ' '){
//         wordd =  nameAA[i] + wordd
//     }
//     else{
//         strr = strr + wordd + ' '
//         wordd = ""
//     }
// }
// strr = strr + wordd
// console.log(strr)