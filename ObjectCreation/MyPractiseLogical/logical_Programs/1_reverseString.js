
//Using inbuilt method 
//Program-1 :
let string1 = "Mahesh Prakash Jadhav" // O/p: "Jadhav Prakash Mahesh"
let ouPut = string1.split(' ').reverse().join(' ')
console.log(ouPut)


// without inbuilt method 

// let MyNameis = "shivaji shahaji Bhosale"
// let str = ""
// for(let i=0 ; i< MyNameis.length ; i++){
//      str = MyNameis[i] + str
    
// }
// console.log(str) 
// // output is "elasohB ijahahs ijavihs" but I want to output is "Bhosale shahaji shivaji"

//Program:2 

let MyNameis = "shivaji shahaji Bhosale"
let str = ""
let word = ""
for(let i=MyNameis.length-1 ; i>=0 ; i--){ // Traverse the string from end to start
    if(MyNameis[i] !== ' '){
        word = MyNameis[i] + word // // Add the character to the beginning of the word
    }else{
        str = str + word  + ' ' // Add the word to the result string with a space
        word = "" //// Reset word for the next word
    }
}

str = str + word  // Add the last word (since there is no space after it)
console.log(str)


//Program 3 

let nameAA = "Abhishek Amitab Bacchan" // outPut: Bacchan Amitab Abhishek
let strr = ""
let wordd = ""
for(let i =nameAA.length-1 ; i>=0 ; i-- ){ // reverese looping 
    if(nameAA[i] !== ' '){
        wordd =  nameAA[i] + wordd
    }
    else{
        strr = strr + wordd + ' '
        wordd = "" // reset the word  for next word 
    }
}
strr = strr + wordd
console.log(strr)

