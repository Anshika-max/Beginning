let h2 = document.querySelector("h2");

let gameseq=[];
let userseq=[];

let start = false;
let level=0;
let count=0;

let btns = ["yellow","red","purple","green"];

document.addEventListener("keypress",function(){
    if(start == false)
    {
        console.log("Game is started.");
        start = true;

        levelup();
    }
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelup(){

    level++;
    h2.innerText=`Level ${level}`;

    userseq = [];   //for repeated value check

    let random = Math.floor(Math.random()*4);
    let color =  btns[random];
    let ranbtn = document.querySelector(`.${color}`);
    gameseq.push(color);
    console.log(gameseq);
    gameflash(ranbtn);
}

function btnpress(){
    let btn = this;
    userflash(btn);

    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    checkAns(userseq.length-1);
}

let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn)
{
    btn.addEventListener("click",btnpress);
}

function checkAns(idx){
    if(userseq[idx]===gameseq[idx])
    {
        if(userseq.length==gameseq.length)
        {
            setTimeout(levelup,1000);
        }
    }
    else{
        let score=level-1;
        max_score(score);
        reset();
        let body=document.querySelector("body");
        body.classList.add("out");
        setTimeout(function(){
            body.classList.remove("out");
        },100);
        // body.style.backgroundColor="white";
    }
}

function reset(){
    start=false;
    gameseq=[];
    userseq=[];
    level=0;
}

function max_score(score){
    if(score>=count)
    {
        h2.innerHTML=`Game Over !! YOUR SCORE IS <b>${level-1}</b> <br> Press any key to RESTART.<br> Your Highest SCORE IS ${score}`;
        count=score;
    }
    else
    {
        h2.append.innerText=`Game Over !! YOUR SCORE IS <b>${level-1}</b> <br> Press any key to RESTART.<br>highest SCORE IS ${count}`;
    }
}

