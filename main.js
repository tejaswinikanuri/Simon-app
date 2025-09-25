let gameSeq = [];
let userSeq = [];
let color = ["yellow","purple","green","red"];

let level = 0;
let started = false;
let h2 = document.querySelector("h2");

document.addEventListener("keypress",function() {
    if(started == false) {
        console.log("game is started");
        started = true;

        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    console.log(randIdx)
    let randColor = color[randIdx];
    gameSeq.push(randColor); 
    let randBtn = document.querySelector(`.${randColor}`);
    btnFlash(randBtn);
}

function checkSeq (idx) {
    if(userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelUp,1000);
        }
        
    } else {
        h2.innerHTML= `Game Over! Press any key to start. Your score is ${level}.`;
        reset();
        document.body.classList.add("redBg");
        setTimeout(function() {
            document.body.classList.remove("redBg");
        },250);
    }
}

function btnPress () {
    let btn = this;
    btnFlash(btn);

    userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    checkSeq(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click",btnPress);
}

function reset() {
    level = 0;
    userSeq = [];
    gameSeq = [];
    started = false;
}