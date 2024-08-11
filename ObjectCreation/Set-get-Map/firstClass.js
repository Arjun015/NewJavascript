
// javascript object 
// object = properties and method
// method having action and return type 



// string

// let fruits = "manGo"
// console.log(fruits)
// console.log(typeof(fruits))

// let fruitName = new String("Berry")
// console.log(fruitName)
// console.log(typeof fruitName)
// console.log(fruitName.toUpperCase)


//Array  

// let names = ["Arjun","Aman","Aarti","sakhi"]
// console.log(names)

// let ss = names.pop()
// console.log(ss)

// let sss = names.push('sudha')
// console.log(sss)

// let nm = new Array(3)
// names.push('sudha')
// console.log(names)


// inbuilt properties and method 

let MagicalWord = ["HardWork","Confidence","Success","Discipline","Happy","Confidence"]
console.log(MagicalWord)

// Set  

// Set does not store the value by index

let setA = new Set()
console.log(setA)
let aa = setA.add('Positive')
console.log(aa)

let MagicalWord1 = ["HardWork","Confidence","Success","Discipline","Happy","Confidence"]
let setB = new Set(MagicalWord1)
console.log(setB)


let dd = "fhksbfifbshyuwgfdoiejgjhvngkniuehgfjnvfdfnkjnbkjkbsknioinlkbnaiorgln"
let setC = new Set(dd)
console.log(setC.size)


// Set methods => add() , has() , clear() , delete() , forEach() , size

let setE = new Set(["Mangesh","Ram","Ram","Hari","Hari","Supriya"])
console.log(setE)

//has()

let ww = setE.has("Supriya")
console.log(ww)

// delete()
let fg = setE.delete('Hari')
console.log(fg)
console.log(setE)

// clear()

console.log(setE.clear())  // undefined



////////////-----------------///////////////

// string

let str = "Happiness"
for(let i = 0 ; i < str.length ; i++){
    //console.log(i)
    console.log(str[i])
}

// Array 

let books = ["English","Math","Geography","History","YashShatra"]
for(let i=0 ; i<books.length ; i++){
    //console.log(i)
    console.log(books[i])
}

// object

let info = {
    firstName : "Abhi",
    lastName : 'Jadhav',
    age : 44
}
console.log(info)

for(let key in info){
    console.log(key,info[key])
}

// set loop

let setH = new Set(["Mangesh","Ram","Ram","Hari","Hari","Supriya"])
console.log(setH)

for(let vl of setH){  // "in" not allowed on "of" place
    console.log(vl)
}

// setH.forEach(function(vl){
//     console.log(vl)
// })


//////////////------- Map ---------//////////////


// Map vs Object 

// In object literal key are always string 

let std = {
    firstName : 'Amruta',
    lastName : "Gudve"
}

// unlike in Map key can be any data type 
// Map store in the form of key value

// Map => set(), get(), has() , size

let mapA = new Map()
console.log(mapA)

mapA.set("firstName","Arjun")
mapA.set("lastName","Jadhav")
mapA.set(true,"unmarried")
mapA.set("age",24)
console.log(mapA)


// retrive 

console.log(mapA.get(1))
console.log(mapA.size)

let ff =  mapA.has("firstName")
console.log(ff)

let f =  mapA.has("Name")
console.log(f)

let jj =  mapA.delete("age")
console.log(jj)
console.log(mapA)

let ll = mapA.clear()
console.log(ll)
console.log(mapA)

//let hj = mapA.set()