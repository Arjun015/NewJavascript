// Javascript is make the things dynamic

// Javascript ---> javascript 
//<p id="one" class="two" name="nm">Fruit List</p>
// Javascript - element add , element update , element retrive , element delete
// Javascript - element attribute update , element attribute delete,element  attribute add 
// Javascript element attribute retrive


// element retrive  

//<p id="one" class="two" name="nm">Fruit List</p>

let pTagName = document.querySelector('p')
console.log(pTagName)  

// class Name  

let className = document.querySelector('.two')
console.log(className)
let htmlCollectionA = document.getElementsByClassName('two')
console.log(htmlCollectionA)
let nodeListA = document.querySelectorAll('green')
console.log(nodeListA)

// id Name  

let idName = document.querySelector('#one')
console.log(idName)

let IdName = document.getElementById('one')
console.log(IdName)

// common formula

let commnFormula = document.querySelector('p[class=nm]')
console.log(commnFormula)


// element update   

let pOne = document.querySelector('#one')
console.log(pOne)

console.log(pOne.textContent)
console.log(pOne['textContent'])
pOne.textContent = "All Fruit's list"

// textContent ==> it is DOM property , used for the update dom text
// element delete

let ulElement = document.querySelector('#ulList')
console.log(ulElement)

let firstElement = document.querySelectorAll('.red')[0]
console.log(firstElement)
//ulElement.removeChild(firstElement)


// element add

let elementLi = document.createElement('li') // <li></li>
console.log(elementLi)
elementLi.textContent = "Mumbai"
elementLi.className = "red"
ulElement.appendChild(elementLi)  




// -------------------

// delete attribute

elementLi.removeAttribute('class')

// adding the attribute
elementLi.className = "red"
// update attr
elementLi.className ="green"

// retrive
console.log(elementLi.className)