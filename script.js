/*----- plan of action -----*/
// Identify and initialize state variables.
// Code the main render(), renderPosition() renderCountdown()  & gameOver() renderControls functions.
// Code the click event listener, including the win logic.
// Update the gameOver() function to render the winner screeen.
// Code the countdown timer.

const RPS_LOOKUP = {
    0: 'start',
    1: 'finish'
}

/*----- app's state (variables) -----*/
let position
// position == the place that the current progress is in using path array of 8
let winner // null || 1 || -1 || 

// cached elements
const pResultEl = document.getElementById('p-result')
// console.log('this is p-results', pResultEl)
const countdownEl = document.getElementById('countdown')
const messageEl = document.querySelector('h2')
const playAgainButton = document.querySelector('playAgainButton')
const pathEls = [...document.querySelectorAll('#path > div')]
// console.log('this is the playAgainButton', playAgainButton)
 //console.log('this is messageEl', messageEl)
// console.log('this is pathEl', pathEls)

// event listeners 
document.getElementById('control').addEventListener('click', handleDrop);
playAgainBtn.addEventListener('click', init);
init()

// initializer function -> initialize our state, call render()
function init() {
  // s == start, p == progress, f == finish 

    position = {
        p: 0
    }

    winner = 'null'

   
    render()
}
// renders position -> look at position object, display on the DOM
function renderPosition() {
    // looping over position object
    for (let key in position) {
        const p-resultEl = document.getElementById(`${key}-p-result`)
        positionEl.innerText = position[key]
    }
}


function gameOver() {
    pResultEl.src 
    countdown.src
    // game over by finding the position
    // will display visually, who won the round(we'll see this later)
    pResultEl.style.borderColor = winner === 'p' ? 'purple' : 'white'
    cResultEl.style.borderColor = winner === 'c' ? 'purple' : 'white'
}
// render countdown
function renderCountdown(cbFunc) {
    // we'll start with a 3, so our timer can count 3..2..1..
    let count = 10
    // we need to display the countdown div, so we can set the t text
    countdownEl.style.visibility = 'visible'
    countdownEl.innerText = count
    // our timer should update the DOM every second
    // once the timer has counted all the way down we want to display our results
    const timerId = setInterval(() => {
        count--
        if (count) {
            console.log('interval running. Count: ', count)
            countdownEl.innerText = count
        } else {
            clearInterval(timerId)
            countdownEl.style.visibility = 'hidden'
            // show the results and the score
            // calling our callback
            cbFunc()
        }
       
    }, 1000)
}
// render - transfers/visualizes all state to the DOM
function render() {
    // we want to display our countdown
    renderPosition(() => {
        renderCountdown()
        gameOver()
        
        
    })
}


function renderControls() {

}
function renderGetWinner() {
   
}
function handleDrop(evt) {
  
}
function renderMessage() {
  
}
