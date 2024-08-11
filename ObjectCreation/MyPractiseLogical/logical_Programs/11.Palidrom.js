//Program : To check if the string is palindrome or not

//Approch-1
function palindrom(string){

    //find the length
    let len = string.length 

    // find half of the string
    for(let i=0 ; i< len/2 ;i++){

        //check first and last string are same
        if (string[i] !== string[len-1-i]){
            return 'It is not Palidrom'
        }

    }
    return 'It is Palidrom'
}
let string =  'madam'      //prompt('Enter the string: ')
let value  = palindrom(string)
console.log(value)


// Approch-2 

// Check Palindrome using built-in Functions

function checkPalidrom(str){
     
    // conver string into the array
    let arrValues = str.split('')
    
    //reverse array values
    let reversArrayValues = arrValues.reverse()

    //convert array into the string
     let revString = reversArrayValues.join('')

     if(str == revString){
        console.log('It is Palidrom')
     }
     else{
        console.log('It is not palidrom')
     }
}
let resultString = 'function'
checkPalidrom(resultString)
