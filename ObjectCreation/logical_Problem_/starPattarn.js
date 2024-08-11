
// star pattern program 

// Program 1 

/*


*
* *
* * *
* * * *
* * * * *

*/


// using repeat method 

for(let i = 1 ; i <=10 ; i++){
    console.log('* '.repeat(i))
}


// Program 2 

for(let i = 1 ; i <= 6 ; i++){
    let ss = ''
    for(let j=1 ; j <=8 ; j++){
        console.log(ss)
        ss = ss +'* '
    }
}



// Program 3

/*


0
1  1
2  2  2
3  3  3  3
4  4  4  4  4

*/


for(let i = 0 ; i <= 4 ; i++){
    let ss = ''
    for(let j=0 ; j <=i ; j++){
        //console.log(ss)
        ss += i+ '  '
    }
    console.log(ss)
}


// Program 4 

/* 

* * * * 
* * *
* *
*
*/

for(let i=4 ; i>=1 ; i--){
    let sss = ''
    for(let j=i ; j >= 1 ; j--){
        sss = sss + '* '
    }
    console.log(sss)
}


// Program 5 

/*
     *
    * *
   * * *
  * * * *
   
*/

// for(let i=4 ; i>=0 ; i--){
//     let ssss = ''
//     for(let j=0 ; j <= 4 ; j++){
//         if(j>=i){
//             ssss = ssss + '* '
//         }else{
//             ssss = ssss + ''
//         }
//     }
//     console.log(ssss)
// }
console.log('----*/*--------*/*---------*/*--------*/*-------------')

function matrix(n){
    for(let i=n ; i>=0 ; i--){
            let ssss = ''
            for(let j=0 ; j <= n ; j++){
                if(j>=i){
                    ssss = ssss + '* '
                }else{
                    ssss = ssss + ''
                }
            }
            console.log(ssss)
        }
}
matrix(4)