/*----------------------Program 20 ----------------------------*/

// Reverse string    

let name = "Arjun Jadhav"
let name2 = ""
for(let i=0 ; i<name.length ; i++){
    name2 = name[i] + name2
}
console.log(name2)     // vahdaJ nujrA


/*-------------------------Program 21 ----------------------*/

// Print Every character of string is reversed


let A = "Dr.Strange is the Super hero"
let B = ""
for(let j=0 ; j< A.length ; j++){
    B = A[j] + B
}
console.log(B)
let cc = B.split(" ").reverse().join(" ")
console.log(cc)

/*------------------------Program 22-------------------------*/

// find the  Duplicate elements count in Array

let fruits = ["Mango","Chiku","Grapes","Mango","Mango"]
let count = 0
for(let i=0 ; i< fruits.length ; i++){
    if(fruits[i] =="Mango"){

        count = count + 1

    }

    
}
console.log(count)   // 3 

// Find the duplicate element in Array 

let Vehicle = ["Audi","TATA","Fortuner","Fortuner","Fortuner"]
let ba = []
//let count1 = 0
for(let i=0 ; i< Vehicle.length ; i++){

    if(Vehicle[i] == "Fortuner"){
      let dd = ba.push("Fortuner")
      console.log(dd.length)
    }
    //count1 = count1 + 1
    
}
console.log(ba)  //[ 'Fortuner', 'Fortuner', 'Fortuner' ]



//------------------------ Program 23 ------------------------//

// find the largest element in Array

let arr = ["seat","belt","car","atm"]

let gr = arr.forEach(function(el){
    return el.length 
})
console.log(gr)















