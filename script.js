
var win = 0;
// Using the Div circles to help get win condition
document.getElementById("start").addEventListener("click", display);
document.getElementById("p1").addEventListener("click", display1);
document.getElementById("p2").addEventListener("click", display2);
document.getElementById("p3").addEventListener("click", display3);
document.getElementById("p4").addEventListener("click", display4);
document.getElementById("p5").addEventListener("click", display5);
document.getElementById("p6").addEventListener("click", display6);
document.getElementById("finish").addEventListener("click", display7);

function display() {
    document.getElementById("start").style.backgroundColor = "red";
    win++;
    console.log(win);
}

function display1() {
    document.getElementById("p1").style.backgroundColor = "red";
    win++;
    console.log(win);
}

function display2() {
    document.getElementById("p2").style.backgroundColor = "red";
    win++;
    console.log(win);
}

function display3() {
    document.getElementById("p3").style.backgroundColor = "red";
    win++;
    console.log(win);
}

function display4() {
    document.getElementById("p4").style.backgroundColor = "red";
    win++;
    console.log(win);
}

function display5() {
    document.getElementById("p5").style.backgroundColor = "red";
    win++;
    console.log(win);
}

function display6() {
    document.getElementById("p6").style.backgroundColor = "red";
    win++;
    console.log(win);
}

function display7() {
    document.getElementById("finish").style.backgroundColor = "red";
    win++;
    console.log(win);
}
renderCountdown();

function renderCountdown() {
    var timeleft = 10;
    var downloadTimer = setInterval(function gameStart() {
        timeleft--;
        document.getElementById("countdowntimer").textContent = timeleft;
        if (timeleft < 0) {
            document.getElementById("ingame").innerHTML = "GAME OVER ";
            clearInterval(downloadTimer);
        } else if (timeleft === 0) {
            console.log(timeleft);
            gameOver();
        }
    }, 1000);
}
// Gameover function after timer depletes
function gameOver() {
    document.getElementById("play").style.backgroundColor = "green";
    document.getElementById("play").style.color = "white";
    win.innerHTML = 0;
    console.log("completed");

}

// Function that allows win/lose condition
function gameComplete() {
    console.log(win);
    if (win >= 8) {
        document.getElementById("ingame").innerHTML = "YOU WON";
        document.getElementById("countdowntimer").textContent = 0;
    } else {
        document.getElementById("ingame").innerHTML = "NOT QUITE FINISHED";
    }
}

// The function that the playAgainButton uses
function playAgain() {
    document.getElementById("play").style.backgroundColor = "#e6c700";
    document.getElementById("ingame").innerHTML = "TRY AGAIN";
    document.getElementById("finish").style.backgroundColor = "";
    document.getElementById("p6").style.backgroundColor = "";
    document.getElementById("p5").style.backgroundColor = "";
    document.getElementById("p4").style.backgroundColor = "";
    document.getElementById("p3").style.backgroundColor = "";
    document.getElementById("p2").style.backgroundColor = "";
    document.getElementById("p1").style.backgroundColor = "";
    document.getElementById("start").style.backgroundColor = "";
    var timeleft = 10;
    var downloadTimer = setInterval(function gameStart() {
        timeleft--;
        document.getElementById("countdowntimer").textContent = timeleft;
        if (timeleft < 0) {
            document.getElementById("ingame").innerHTML = "GAME OVER ";
            clearInterval(downloadTimer);
        } else if (timeleft === 0) {
            console.log(timeleft);
            gameOver();
        }
    }, 1000);
}