
//closure : When a variable is defined outside the scope in reference is accesed from some inner scope.
var num = 10
function sum(){
   console.log(num + num)
}
sum()


var strName1 = "Harry "
var strName2 = "Potter"
function writeString(){
    console.log(`The movie Name is ${strName1}${strName2} `)
}
writeString()



var name
console.log(name) // ouPut : undefined

