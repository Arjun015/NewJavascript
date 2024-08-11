// Program 1

let arjun = {
    firstName : "Arjun",
    lastName : "Jadhav",
    printName : function(){
        console.log(this.firstName+" "+this.lastName)
    }
}
arjun.printName()
console.log(arjun.printName)

let printName2 = arjun.printName
console.log(printName2)

// let printName2 = function(){
//     console.log(this.firstName+" "+this.lastName)
// }

printName2()
//console.log(undefined + undefined)
//console.log(NaN + NaN)
//console.log(this + this)


// Program 2 

let winner = {
    firstName : "priyanka",
    lastName : "Wake",
    displayName :function(){
        console.log(this.firstName+" "+this.lastName)
    }
}
winner.displayName()

console.log(winner.displayName())

let abc = winner.displayName
console.log(abc)


let abc1 = function(){
    console.log(this.firstName+" "+this.lastName)
}
abc1()





// Program 3 


// bind() ==> it is used for the reference to given by this keyword without creating Object 

let sonu = {
    firstName : "Madhuri",
    lastName : "Dixit"
}
let piyu = {
    firstName : "Apeksha",
    lastName : "Jadhav"

}
let display = function(){
    console.log(this.firstName +" "+this.lastName)
}

let AAA = display.bind(piyu)
AAA()

let BBB = display.bind(sonu)
BBB()

display.bind(sonu)() // shortcuts call 
display.bind(piyu)()// shortcuts call



// Program 4 

let Bramha = {
    firstName: "Rusha",
    lastName : "Gaikwad"
}
let Shiv = {
    firstName : "Veer",
    lastName :"pindari"
}
let displayName = function(){
    console.log(this.firstName +" "+ this.lastName)
}

displayName.bind(Shiv)()
displayName.bind(Bramha)()
// Shiv.language = "English"
// console.log(Shiv)

// Program 5 

// call() ==> without creating obj to set this keyword reference

function display2(){
    console.log(`hi ${this.firstName} ${this.lastName}`)
}
let poonam = {
    firstName :"Poonam",
    lastName : "Shashri"
}
let supriya = {
    firstName : "supriya",
    lastName : "Dixit"
}
display2.call(poonam)
display2.call(supriya)

// Program 6 

function display3(){
    console.log(`hi ${this.firstName} ${this.lastName}`)
}
let Priya = {
    firstName : "priyanka",
    lastName  : "Hon"
}
let Maheshwari = {
    firstName : "Sandeep",
    lastName : "Maheshwari Sir"
}

display3.call(Priya)
display3.call(Maheshwari)


// Program 7 

// apply()  ==> it is Used for set the reference of this keyword & first parameter is this keyword
//              reference Name and sec parameter is Passing Array for Greet value 

let display4 = function(){
    console.log(`${greet} ${this.firstName} ${this.lastName}`)
}
let Sundara = {
    firstName : "Sundara",
    lastName : "Kadam"
}
let Pushpa = {
    firstName : "Pushpa",
    lastName : "bhai kaisa hai tu ?"
}
display4.apply(Pushpa,['Good morning'])
