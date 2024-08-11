// Program : check if a number is positive, negative or zero.

// Program 1

let numm = 0
if(numm > 0){
    console.log('Positive Number:',numm)
}else if(numm < 0 ){
    console.log('Negative Number:',numm)
}else{
    console.log('Number is Zero:',numm)
}


// Program 2 : using function


function PositiveOrNegativeOrZero(number){
    if(number > 0 ){
        console.log('The Positive number is:',number)
    }else if(number < 0 ){
        console.log('The Negative number is:',number)
    }else{
        console.log('The number is Zero',number)
    }
}
PositiveOrNegativeOrZero(31)

// positive number : num >0
// negative number : num <0

