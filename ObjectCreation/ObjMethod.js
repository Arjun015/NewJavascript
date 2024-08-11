// object literal(object Template)

let Arjun = {
    firstName : "Arjun",
    lastName : "Jadhav",
    Age : 24,
    rollNo : 12

}


let fruit = {
    Name : "Apple",
    from : "Jammu",
    MPrice : "50 rs per kg",
    color : "Red"

}


let Battery = {
    company : 'Amron',
    capacity : "50 volt",
    Price : 5000,
    color :"Green"
}



let Toors = {
    Pune : "Shivneri",
    Nashik : "chambhar caves",
    Mumbai : "Juhu beach",
    Kokan : "sea Beach"

}



let India = {

    Maharastra : "Mumbai",
    Karnataka : "bengluru",
    Tamilnadu : "chennai",
    Nepal : "kathmandu",
    Madhyapradesh : "Dhaka"
}

// dot Notation or Bracket Notation 

// Retrive 

console.log(India.Maharastra)   // dot Notation
console.log(India['Maharastra'])  // Bracket Notation

// Add  
console.log(India.UttaarPradesh = "lakhnow")
console.log(India['UttaarPradesh'] = "lakhnow")
console.log(India)

// Update 

console.log(India.Karnataka = "Hydrabad")
console.log(India['Karnataka'] = "Hydrabad")

// delete

console.log(delete India.Karnataka)
console.log(India)



//Object Template : it is blue print ===> object by defining class 


// Setting the value Outside the class 


class Person {
    firstName = undefined
    lastName = undefined
    age = undefined
    rollNo = undefined
}

let Arjun1 = new Person()
console.log(Arjun1)

Arjun1.firstName = "Arjun"
Arjun1.lastName = "Jadhav"
Arjun1.age = 24
Arjun1.rollNo = 15
console.log(Arjun1)

/**************************************************** */
class Person2 {
    firstName = undefined
    lastName = undefined
    age = undefined
    rollNo = undefined
}
let name = new Person2()
console.log(name)
name.firstName = "Sundara",
name.lastName = "Gaikwad",
name.age = 23
name.rollNo = 15

console.log(name)


////////////////////////////////////////////////////////////

//  Using Constructor

// constructor = it is Used to set the property value at the time of object creation 

class Person3 {
    constructor(fn,ln,ag,rN){
        this.firstName = fn
        this.lastName = ln
        this.age = ag
        this.rollNo = rN
    }
}
let marriyya = new Person3("Marriyya","sen",34,12)
let mac = new Person3("Max","Renold",32,45)
console.log(marriyya)
marriyya.age = 35
marriyya.firstName
delete marriyya

mac.age = 67
mac.firstName
delete mac.rollNo

console.log(marriyya)
console.log(mac)

/*****************************************************/

class Gardan {
    constructor(tr,fl,wt,ty){
        this.tree = tr
        this.flower = fl
        this.water = wt 
        this.toy = ty
    }
}
let bottlePump = new Gardan("Mango","Rose","Blue","BreakDance")
let Coconut = new Gardan("chiku","lotus","blue","Bridge")

delete bottlePump.flower
delete Coconut.tree
console.log(bottlePump)
console.log(Coconut)


/////////////////////////////////////////////////////////////////////

// By Using set mathod 

class Person4 {
    setAge(ag){
        this.age = ag
    }

    setfirstName(fn){
        this.firstName = fn 
    }

    setlastName(ln){
        this.lastName = ln
    }
    
    setrollNo(rn){
        this.rollNo = rn
    }
}
let Ajay = new Person4()
console.log(Ajay)
Ajay.setAge = 24 
Ajay.setlastName('Jadhav')
Ajay.setfirstName('Ajay')
Ajay.setrollNo = 45
console.log(Ajay)



////////////////////////////////////////////////////

// using set 

// set method = set does not stores the duplicate value

let setA = new Set([11,22,33,44,11,66])
console.log(setA)

let AAA = new Set(["Arjun","Ajay","Radha","sundara","Arjun"])
console.log(AAA)

let dd = setA.size
console.log(dd)


setA.add(123)
console.log(setA)

setA.delete(44)
AAA.delete('Ajay')
console.log(setA,AAA)

let mn = setA.has(11)
let gg = AAA.has("Akshada")
console.log(mn)
console.log(gg)

setA.clear()
AAA.clear()
console.log(setA,AAA)


//******************* */

let setB = new Set([11,22,33,44,77,55,44,44,44])
console.log(setB)

for(let item of setB){    // loop on set method  
    console.log(item)
}


/******************************************/

// duplicate 

let num = new Set([11,22,22,22,4,4,33,56,66,67])
console.log(num)

let setZ = new Set(num)
console.log(Array.from(setZ))



///////////////////////////////////////////////////////////

// using map 


let mapA = new Map()

let aa = new Array()  // let aa = [1,2,3,4]

let bb = new String()  // let bb = "YashRaj"

let cc = new Object()   // let cc = {}

// Map ==> properties and mathod 

console.log(mapA.size)
//mapA.set(kay,value)

mapA.set([99,66,33],"percentages")
console.log(mapA)

mapA.set(true,"isadult")
console.log(mapA)

mapA.set({fn:"Sunanda",ln:"ayyangar"},"Person")
console.log(mapA)

let ll = mapA.has(true)
console.log(ll)

// mapA.size
console.log(mapA.size)

// clear()

console.log(mapA.clear())

// delete()

mapA.delete(true)
console.log(mapA)


/******************************/

let mapB = new Map([
    [1,"RollNo"],
    ["color","Green"],
    ["true","passed"],
    [{a:2,b:4},33]
])
console.log(mapB)

for(let a of mapB.keys()){   // key 
    console.log(a)
}

for(let b of mapB.values()){   // value
    console.log(b)
}

for(let [key,val] of mapB.entries()){  // keys,values print
    console.log([key,val])
}





















// let b = console.log()
// console.log(b)


