// Inheritance : It is a concept in which some properties and methods of an object are bieng used by anothe obj.

//ex:

class student {

    constructor(fullName,age){
         this.fullName = fullName
         this.age = age
    }
}

class Teacher extends student{
    constructor(fullName,age,salary){
        super(fullName,age)
        this.salary = salary

    }
}

let abc = new Teacher('xyz',12,3000)
console.log(abc.age)
console.log(abc.fullName)
console.log(abc.salary)