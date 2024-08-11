
// Program-5 : Count the vowel in the given string
let myStr = "everything is possible for me"

let countingVowel = myStr.match(/[AEIOUaeiou]/ig,'').length
console.log(countingVowel)
