
// destructure in Javascript

// Array

let nameA = ['Anjani','Supriya','Jyoti','Nilam']
console.log(nameA)

let [name1,name2,name3,name4] = nameA
console.log(name1)
console.log(name2)
console.log(name4)

let userInfo = ['Aruna']
let [name , age=40 ,BirthPlace='Nashik'] = userInfo
console.log(name)
console.log(age)
console.log(BirthPlace)


// Object

let tyresPrices = {
    MRF : 1500,
    APPOLLO : 1400,
    TVS : 1300,
    BKT : 1770
}

let {MRF:t1,APPOLLO:t2,TVS:t3,BKT:t4} = tyresPrices
console.log(t1)
console.log(t2)
console.log(t3)
console.log(t4)


