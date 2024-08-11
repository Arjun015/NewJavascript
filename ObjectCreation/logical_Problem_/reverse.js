//-------- reverse ----------array,string


// ---------Program 1 
// using reverse method 

let arr = [1, 2, 7, 8, 3]
console.log(arr.reverse())


// -------- Program 2 
// using for loop

let a1 = [23, 43, 44, 56, 98]
let n = a1.length
//console.log(n)
for (let i = n - 1; i >= n / 2; i--) {
    let temp = a1[i]
    a1[i] = a1[n - i - 1]
    a1[n - i - 1] = temp
}
console.log(a1)


// --------Program 3 
// swap/interchange

let ayy = [23, 56, 77, 33, 21]
let nn = ayy.length
for (let i = 0; i <= nn / 2; i++) {
    let tem = ayy[i]
    ayy[i] = ayy[nn - i - 1]
    ayy[nn - i - 1] = tem
}
console.log(ayy)

/*------------------------------*/
let num = [11,234,0000,433,22]
let store = num.length
for(let i=0 ; i<store/2 ; i++){
    let temm = num[i]
    num[i] = num[store-i-1]
    num[store-i-1] = temm
}
console.log(num)


// ---------Program 4 
// using function

function reverse(rr) {
    let ary = rr.length
    for (let i = 0; i <= ary / 2; i++) {
        let tem = rr[i]
        rr[i] = rr[nn - i - 1]
        rr[nn - i - 1] = tem
    }
    console.log(rr)
}
let rrY = [2, 33, 555, 88, 7]
reverse(rrY)


// --------------  Program 5 
function rev(ss) {
    
    let ln = ss.length
    for (let i = 0, j = ln - 1; i <= ln / 2, j >= ln/2; i++, j--) {
        let tt = ss[i]
        ss[i] = ss[j]
        ss[j] = tt
    }
    return ss

}
let ss1 = rev([33,323,565,65,77])
console.log(ss1)
//console.log(ss1)
// let ss = [33,323,565,65,77]
// let ln = ss.length
// for(let i=0 , j = ln-1 ; i<=ln/2,j>=ln ;i++,j--){
//     let tt = ss[i]
//     ss[i] = ss[j]
//     ss[j] = tt
// }
// console.log(ss)