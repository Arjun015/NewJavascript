
// Program-5 : Count the vowel in the given string
// let myStr = "everything is possible for me"

// let countingVowel = myStr.match(/[AEIOUaeiou]/ig,'').length
// console.log(countingVowel)

//Program

// Approch-1

let str = 'Lord shiva is the greatest in the world'
let countVowel = str.match(/AEIOUaeiou/ig,'').length
console.log(countVowel)

// Aproch-2

function countingVowelString(str){
let countVowel = 0
//turn the input into a string
let str1 = str.toString()

//loop through the string
for(let i=0 ; i< str1.length-1 ; i++){

    //if a vowel, add to vowel count
    if(str1.charAt(i) == 'a' || str1.charAt(i) == 'e' || str1.charAt(i) == 'i' || str1.charAt(i) == 'o' || str1.charAt(i) == 'u'){
       countVowel = countVowel + 1 
    }
}
return countVowel

}
let input = 'Lord shiva is the greatest in the world'
let count = countingVowelString(input)
console.log(count)



