
// Program 1 (index.html)

/*let h1element = document.querySelector('h1')
let ulList = document.querySelector('ul')
let buttonC = document.querySelector('button')
console.log(ulList)
console.log(buttonC)

buttonC.addEventListener('click',function(){
    ulList.style.color = "red"
    h1element.style.backgroundColor = "yellow"
})
*/


// Program 2 (index1.html)
/*
let h1element = document.querySelector('h1')
let ulList = document.querySelector('ul')
let input = document.querySelector('input')
let buttonA = document.querySelector('button')

buttonA.addEventListener('click',function(){
    let aa = input.value
    ulList.style.color = aa
    h1element.style.color = aa
    input.value = ""
})
*/


// Program 3  

// select All the element 
// add the addEvent listener
//create the li element 
// add the text to li element 
// apend the new element in list



let olList = document.querySelector('ol')
let input = document.querySelector('input')
let buttonT = document.querySelector('button')

buttonT.addEventListener('click',function(){
    let newV = input.value
    let  newLi = document.createElement('li') // <li><li/>
    newLi.textContent = newV  //<li>Cabbage<li/>
    olList.appendChild(newLi)
})
