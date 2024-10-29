// Program: Write the program for reverse number

//Approch-1 : using inbuilt function

let num = 1234
let revNumber= num.toString().split('').reverse().join('')
console.log(revNumber)


//Approch-2 : without inbuilt function

let z = []

for(let i=8 ; i>=1 ; i--){
  z.push(i)
}
console.log(z)
