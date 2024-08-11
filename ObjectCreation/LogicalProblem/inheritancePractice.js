//inheritance 

// Es6

// class Student {

//     constructor(firstName, lastName, age, rollNo) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//         this.roll = rollNo
//     }

//     display() {
//         console.log(this.firstName + this.lastName)
//     }

//     setLang(lng) {
//         this.language = lng
//     }

//     getLang() {
//         console.log(this.language)
//     }


// }

// let amol4 = new Student("amol", "rao", 23, 44)
// amol4.display()
// amol4.setLang('hindi')
// amol4.getLang()
// console.log(amol4)

// Inheritance 


class Student {
    constructor(firstName,lastName,RollNo,age){
        this.firstName = firstName
        this.lastName = lastName
        this.RollNo = RollNo
        this.age
    }
    display(){
        console.log(this.firstName + this.lastName)
    }
    setLan(lng){
          this.language = lng
    }
    getLang(){
        console.log(this.language)
    }
} 

let ajay = new Student("Arjun","Jadhav",23,15) 
ajay.display()
//ajay.setLan('English')
ajay.setLan('Marathi')
ajay.getLang()
console.log(ajay)


// function  constructor 


let Employee = function(empName , empId , empSalary){

    this.empName = empName
    this.empId = empId
    this.empSalary = empSalary
    this.display = function(){
        console.log(this.empName)
    }

}
let ss = new Employee("Harish",34,80000)
ss.display()