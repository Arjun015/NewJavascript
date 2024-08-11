// Problem on reversed string 

/*------------------Program 1 --------------------*/


// whole string is reversed 

let str = "Arjun is very hardworker"
let str2 = ""
for(let i=0 ; i<str.length ; i++){
    str2 = str[i] + str2
}
console.log(str2)




/*-----------Program 2 ------------------*/


// Every character of string is reversed 

let nam = "Super Performance"
let rev = ""
for(let i=0 ; i<nam.length ; i++){
    rev = nam[i] + rev
}
//console.log(rev)
let sss = rev.split(' ').reverse().join(' ')
console.log(sss)