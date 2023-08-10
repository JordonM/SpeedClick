let winner 
let results

init ()
function init() {
  
  winner = 0
  // winner 0, 1, or -1
  results = 0
  // results 0, 1, or -1
  render()
}

// Countdown timer

var timeleft = 10;
    var downloadTimer = setInterval(function(){
    timeleft--;
    document.getElementById("countdowntimer").textContent = timeleft;
    if(timeleft <= 0)
        clearInterval(downloadTimer);
        gameOver();
    },1000);

// Gameover function after timer depletes
function gameOver() {
  
}
function gameComplete() {
  
}
function playAgain() {
  
}
// event listener

