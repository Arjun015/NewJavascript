// Encapsulation :The process of wrapping properties and function within single unit is called is Encapsulation


class Person{
    constructor(id , name){
        this.id = id
        this.name = name
    }

    getDetails(){
        console.log(`The person name is ${name} and job id is ${id}`)

    }
}

let info = new Person( 11 ,'Akash Musale')
info.getDetails()
info.id
info.name