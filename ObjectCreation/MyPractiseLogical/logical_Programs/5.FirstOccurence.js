// // Program-6 : find the first occurence of each character 
// let aa = "Mango banana apple pear Banana grapes strawberry Apple pear mango banana Kiwi apple mango strawberry" 

function firstOccurrences(str){
   let occurence = {}
   
   //traverse each charcter in the string
    for(let i=0 ; i<str.length ; i++){
        let char = str[i].toLowerCase() // Convert to lowercase to make the count case-insensitive
        
        
        // Only add the character if it hasn't been added before
        if(occurence[char] === undefined){
            occurence[char] = i
        }
   }
   return occurence
}
let inputStr = "Shri Nivasa"
let outPut = firstOccurrences(inputStr)
console.log(outPut)





















// function countFirstOccurrences(str) {
//     let occurrences = {};
//     let result = {};

//     // Traverse each character in the string
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i].toLowerCase(); // Convert to lowercase to make the count case-insensitive
        
//         // Only add the character if it hasn't been added before
//         if (occurrences[char] === undefined) {
//             occurrences[char] = i;
//         }
//     }

//     return occurrences;
// }

// // Example usage
// let input = "arjun arjun";
// let firstOccurrences = countFirstOccurrences(input);

// console.log(firstOccurrences);
