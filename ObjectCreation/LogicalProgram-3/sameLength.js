//Program
//let string1 = "silent" and string2 ="listen If string having length 
//is same then outPut will be true ,otherwise not match then false in Javascript ?

function checkLength(string1,string2){

     // Check if lengths are the same
    if(string1.length !== string2.length){
        return false
    }

    // Sort and compare the strings
    sortedString1 = string1.split('').sort().join('')
    sortedString2 = string2.split('').sort().join('')

    return sortedString1 ===sortedString2 // check equality as well as dataTypes
}

const sss = checkLength('silent','Arjun')
console.log(sss)













function reverseString(str){

    return str.split(' ').reverse().join('')

}
let e1 = reverseString('Arjun Jadhav Nashik')
console.log(e1)
// let name1 = "Arjun Jadhav Nashik"
// let ee = name1.split(' ').reverse().join('')
// console.log(ee)

/*
function countCharacterOccurrences(str) {
    // Initialize an empty object to store character counts
    const charCount = {};
  
    // Iterate over each character in the string
    for (const char of str) {
      // Skip spaces and commas
      if (char !== ' ' && char !== ',') {
        // Convert character to lowercase to count both upper and lower case equally
        const lowerChar = char.toLowerCase();
        
        // Increment the count for this character in the object
        charCount[lowerChar] = (charCount[lowerChar] || 0) + 1;
      }
    }
  
    return charCount;
  }
  
  // Example usage
  const a = "Mango banana apple pear, Banana grapes strawberry, Apple pear mango banana, Kiwi apple mango strawberry";
  const occurrences = countCharacterOccurrences(a);
  console.log(occurrences);
  */