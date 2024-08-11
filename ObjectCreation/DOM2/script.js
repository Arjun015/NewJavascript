document.querySelector('h1').addEventListener('click',function(){
    document.querySelector('h1').style.color = "red"
    document.querySelector('h1').style.backgroundColor = "yello"
    document.querySelector('h1').textContent =document.querySelector('h1').textContent.toUpperCase()

})

document.querySelector('.fruits').addEventListener('click',function(){
    document.querySelector('.fruits').style.color = "purple"
    document.querySelector('.fruits').style.backgroundColor = "orange"
    document.querySelector('.fruits').textContent =document.querySelector('.fruits').textContent.toUpperCase()


})

document.querySelector('.cities').addEventListener('click',function(){
    document.querySelector('.cities').style.color = "black"
    document.querySelector('.cities').style.backgroundColor = "orange"
    document.querySelector('.cities').textContent =document.querySelector('.cities').textContent.toUpperCase()


})