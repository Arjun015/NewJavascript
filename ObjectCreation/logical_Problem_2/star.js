// Program 1  

/* 
* . . . .
* * . . .
* * * . .
* * * * .
* * * * *

*/

for(let i=1 ; i <= 5 ; i++ ){
    let s = ''
    for(let j=1 ; j <= i ; j++){
        s = s + '* '
    }
    console.log(s)
}
7219592609-soniya


// Program 2 -------------  

/*

. . . . *
. . . * *
. . * * *
. * * * *
* * * * *

*/

for(let i= 5 ; i>=1 ; i--){
    let ss = ''
    for(let j=1 ; j<=5 ; j++){
        if(j < i){
            ss = ss + ' '
        }else if(j>=i){
            ss = ss + '*'
        }
    }
    console.log(ss)
}



// Program 3 

/* 

* * * * 
* * * .
* * . .
* . . .

*/


for(let i=5 ; i>=1 ; i--){
    let a = ''
    for(let j=1 ; j<=5 ; j++){
        if(j < i){
            a = a + '*'
        }else if(j>=i){
            a = a + ''
        }
    }
    console.log(a)
}








