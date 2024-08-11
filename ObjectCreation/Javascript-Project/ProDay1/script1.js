'use strict';


const player0Ele = document.querySelector('.player--0')   // selected by className
const player1Ele = document.querySelector('.player--1')
const score0Ele = document.querySelector('#score--0') // selected by id
const score1Ele = document.querySelector('#score--1')
const current0Ele = document.getElementById('current--0')
const current1Ele = document.getElementById('current--1')



const diceEle = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')


let scores , currentScore , activePlayer , playing 

// // reset values 


// reset values 

let init = function(){

    scores = [0,0]
    currentScore = 0
    activePlayer = 0
    playing = true

    diceEle.style.display = "none"

    // element text reset to zero
    score0Ele.textContent = 0
    score1Ele.textContent = 0
    current0Ele.textContent = 0
    current1Ele.textContent = 0
}
init()


// Role the dice functionality



function switchPlayer(){
document.getElementById(`current--${activePlayer}`).textContent = 0
currentScore = 0
activePlayer = activePlayer === 0 ? 1 : 0

//if(activePlayer == 0){  // above condition understanding perpose
    //     activePlayer = 1
    // }
    // else {
    //     activePlayer = 0
    // }

}


btnRoll.addEventListener('click',function(){
    // generating the random number
    let randomNumber = Math.floor(Math.random() * 6) + 1
    console.log(randomNumber)

    diceEle.style.display = "block"
    diceEle.src = `dice-${randomNumber}.png`

    if(randomNumber != 1){
        currentScore = currentScore + randomNumber
        document.getElementById(`current--${activePlayer}`).textContent = currentScore
    }
    else{
        switchPlayer()
    }
})



// Day 2 code   

// btnHold.addEventListener('click', function () {
//     if (playing) {
//         scores[activePlayer] = currentScore + scores[activePlayer]
//         document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
//         if (scores[activePlayer] >= 20) {
//             playing = false
//             document.getElementById(`score--${activePlayer}`).classList.add('player--winner')
//             diceEl.style.display = "none"
//         }
//         else {
//             switchPlayer()
//         }
//     }
// })

// document.querySelector('.btn--new').addEventListener('click', init)

// click on hold btn

btnHold.addEventListener('click',function(){
    scores[activePlayer]  =currentScore  + scores[activePlayer]
    document.getElementById(`scores--${activePlayer}`).textContent = scores[activePlayer]
if(scores[activePlayer] >= 20){
    playing = false
    document.getElementById(`score--${activePlayer}`).classList.add('player--winner')
    diceEle.style.display = "none"
}else{
    switchPlayer()
}
})
document.querySelector('.btn--new').addEventListener('click',init)