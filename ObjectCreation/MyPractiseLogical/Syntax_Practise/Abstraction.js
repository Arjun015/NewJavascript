
/*

// Abstraction :  it ignore the irrelevant details and showing only require one is called as Abstraction

*/

function Person(fname,lname){
    let fname = fname
    let lname = lname

    let dispaly = function(){  // function expression
        console.log(`The firstName is ${fname} and lastName is ${lname}`)

    }
}

let rrr = new Person('Arjun','Jadhav')

console.log(rrr.fname)
console.log(rrr.lname)

console.log(rrr.dispaly())