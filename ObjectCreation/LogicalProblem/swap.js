// Swapping to the two variables

// Program 1 

let a = 10;
let b = 20;

[a,b] = [b,a];
console.log(b,a)


// Piramid of code 

// String.fromCharCode() ==> it is used to convert unicode values to characters

let aa = []
for(i=65 ; i <= 90 ; i++){
    aa.push(String.fromCharCode(i))
    console.log(aa.join(''))
}