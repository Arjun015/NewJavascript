// Program 1:   find the largest of two numbers
/*

let num_1 = 16
let num_2 = 15
if(num_1 > num_2){
    console.log('Largest Number:',num_1)
}else{
    console.log('Largest Number:',num_2)
}



// Program 2 : find the largest of threee numbers


let dig_1 = 67
let dig_2 = 37
let dig_3 = 35

if(dig_1> dig_2){
    console.log('dig_1 is Larger:',dig_1)
}else if(dig_2 > dig_3){
    console.log('dig_2 is Larger:',dig_2)
}else{
    console.log('dig_3 is Larger:',dig_3)
}


// Program 3 : find the largest number take input from user.


let num_11 = prompt('Enter the first Number:')
let num_12 = prompt('Enter the second Number:')
if(num_11 > num_12){
    console.log('Largest Number:',num_11)
}else{
    console.log('Largest Number:',num_12)
}
*/

//Program 4 :  find the Two largest number using function.
/*
function largestNum(n1, n2) {
    if (n1 > n2) {
        console.log('largest Number:', n1)
    } else {
        console.log('largest Number:', n2)
    }
}
largestNum(54, 45)



// Program 5 : find the Three largest number using function.

function LargerN(N1, N2, N3) {
    if (N1 > N2) {
        console.log('N1 is Larger:', N1)
    } else if (N2 > N3) {
        console.log('N2 is Larger:', N2)
    } else {
        console.log('N3 is Larger:', N3)
    }
}
LargerN(23, 45, 89)
*/

// find the two Largest number using function

function largestNumber(n1 , n2){
    if (n1 > n2){
        console.log('Given number is larger',n1)
    }else{
        console.log('Given number is larger',n2)
    }
}
largestNumber(34 , 45)
largestNumber(67,22)

// find the three largest number using function


function ThreelargestN(a1,a2,a3){
    if (a1 > a2){
        console.log('Number a1 is larger',a1)
    }else if(a2 > a3){
        console.log('Number a2 is larger',a2)
    }else {
        console.log('Number a3 is larger',a3)
    }


}
ThreelargestN(23,45,67)