var win = 0;
document.getElementById("start").addEventListener("click", displayDate);
document.getElementById("p1").addEventListener("click", displayDate1);
document.getElementById("p2").addEventListener("click", displayDate2);
document.getElementById("p3").addEventListener("click", displayDate3);
document.getElementById("p4").addEventListener("click", displayDate4);
document.getElementById("p5").addEventListener("click", displayDate5);
document.getElementById("p6").addEventListener("click", displayDate6);
document.getElementById("finish").addEventListener("click", displayDate7);

function displayDate() {
    document.getElementById("start").style.backgroundColor = "red";
    win++;
    console.log(win);
}

function displayDate1() {
    document.getElementById("p1").style.backgroundColor = "red";
    win++;
    console.log(win);
}

function displayDate2() {
    document.getElementById("p2").style.backgroundColor = "red";
    win++;
    console.log(win);
}

function displayDate3() {
    document.getElementById("p3").style.backgroundColor = "red";
    win++;
    console.log(win);
}

function displayDate4() {
    document.getElementById("p4").style.backgroundColor = "red";
    win++;
    console.log(win);
}

function displayDate5() {
    document.getElementById("p5").style.backgroundColor = "red";
    win++;
    console.log(win);
}

function displayDate6() {
    document.getElementById("p6").style.backgroundColor = "red";
    win++;
    console.log(win);
}

function displayDate7() {
    document.getElementById("finish").style.backgroundColor = "red";
    win++;
    console.log(win);
}
Countdown();

function Countdown() {
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
    console.log(win);
}

function gameComplete() {
    console.log(win);
    if (win >= 6) {
        document.getElementById("ingame").innerHTML = "YOU WON";
        document.getElementById("countdowntimer").textContent = 0;
    } else {
        document.getElementById("ingame").innerHTML = "NOT QUITE FINISHED";
    }
}

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


