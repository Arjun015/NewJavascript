// some methods in javascript for project


console.log(5 == 5.0)
console.log(5 === 5.0)
console.log(typeof(2))
console.log(typeof('3'))


// recently newly added in javascript  
console.log(+'3')  // string to number
console.log(+[3])  // array to number
console.log(+['43']) 
console.log(+{kay : 4})  // NaN

console.log(Number('456'))
console.log(Number('0.34'))

// parseInt()    

// string is converted into the number , number should be in first position in the string 

let ss = Number.parseInt('50ajy')  // o/p : 50 
let ff = Number.parseInt('ddg45ii') // NaN : number should be in the first position in the earth
console.log(ss)
console.log(ff)


// parseFloat()   

let float = Number.parseFloat('44.55jbl')  // 44.55
let bnm = Number.parseFloat('tdd45.46iu')  // NaN
console.log(float)
console.log(bnm)



//  isNaN()  
let pp = Number.isNaN('30')  // false
let hj = Number.isNaN(45)   // false
let a1 = Number.isNaN(+'20')  // false 
console.log(pp)
console.log(hj)
console.log(a1)

console.log(10/0)  // Infinity 
console.log(0/10)  // 0
console.log(13/1)  // 13
console.log(145/0)  // Infinity 


// isFinite()
// to check whether the value is number

console.log(Number.isFinite(20))  // true
console.log(Number.isFinite('43')) // false
console.log(Number.isFinite('34Arjun'))
console.log(Number.isFinite(34.44)) // true
console.log(Number.isFinite(33/0))  // false 
console.log(Number.isFinite(+'56')) // true


// isInteger()
console.log('---------------*****---------------')
console.log(Number.isInteger(45))  // true
console.log(Number.isInteger(34))  // true
console.log(Number.isInteger('23'))  // false


// isFloat()

console.log(Number.MAX_SAFE_INTEGER)  // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER)  // -9007199254740991


console.log('-----------*******--------------')


console.log(Math.sqrt(49))  // 7
console.log(5 ** 2) // 25

let max = Math.max(56,22,333,444,11,21,345,67,89,98,65,445,33,21,00)  // 445
console.log(max)

let min = Math.min(32,33,211,22,5,666,00,86,44,00)  // 0
console.log(min)

let pi = Math.PI   //3.141592653589793
console.log(pi)

console.log('----------****-----------')


// trunc() => output is base value

console.log(Math.trunc(34.43))  //34
console.log(Math.trunc(-34.44)) // -34
console.log(Math.trunc(65.33))  // 65
console.log(Math.trunc(-78.98))  // -78

// ceil() 

console.log(Math.ceil(34.32))  // 35

console.log(Math.ceil(-34.45))  // -34

// floor()

console.log(Math.floor(34.55)) // 34
console.log(Math.floor(-54.78)) // -55
//console.log(-35 > -34)   //

// round()

console.log(Math.round(34.67)) // 35
console.log(Math.round(34.35)) // 34
console.log(Math.round(45.67))

// toFixed()

let nm = 34434.3243244434
console.log(nm.toFixed(2))  // 34434.32

console.log(343.3443.toFixed(3))  //343.344

// bigInt 

let big = 6456146431654n
let big2 = 548414511545n
let aaa = console.log(typeof big)
console.log(big * big2)



console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.MAX_SAFE_INTEGER + 3)
console.log(Number.MIN_SAFE_INTEGER + 4)


// Exceptions

console.log(20n > 15)  // true
console.log(20n == 20)  // true
console.log(20n === 20) // false
console.log(45n == '20')  // false


//Dates  

let date = new Date('December,24,2015')
console.log(date)

let date2 = new Date(2034,10,2,15,23)
console.log(date2)

console.log(date2.getFullYear())
console.log(date2.getDate())
console.log(date2.getMonth())
console.log(date2.getHours())
console.log(date2.getMinutes)
console.log(date2.getMilliseconds())

console.log(date2.getTime())
//console.log(date2.now())

let fff = new Date(1643757845676)
console.log(fff)

let month = fff.toLocaleDateString("defalut",{month:'short'})
console.log(month)

let month2 = fff.toLocaleDateString("defalut",{month:'long'})
console.log(month2)
