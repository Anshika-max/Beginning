let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorebb =document.querySelector("#user-score");
const compScorebb =document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["rock","paper","scissor"];
    const random = Math.floor(Math.random()*3);
    return options[random];
}

const draw = () =>{
    console.log("Game was draw");
    msg.innerText="Draw Match";
    msg.style.backgroundColor="Black";

}

const playGame = (userchoice) =>{
    console.log("user choice = ",userchoice);
    const compChoice = genCompChoice();
    console.log("comp choice = ",compChoice);
    if(userchoice === compChoice)
    {
        draw();
    }
    else{
        let userWin = true;
        if(userchoice === "rock")
        {
            userWin = compChoice === "paper"?false:true;
        }
        else if(userchoice === "paper")
        {
            userWin = compChoice === "scissor"?false:true;
        }
        else
        {
            userWin = compChoice ==="rock"?false:true;
        }
        shoWinner(userWin,compChoice,userchoice);
    }
}

const shoWinner = (userWin,compChoice,userchoice) =>{
    if(userWin)
    {
        console.log("You Win");
        userScore++;
        userScorebb.innerText = userScore;
        msg.innerText=`You Win! Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor="Green";
    }
    else
    {
        compScore++;
        compScorebb.innerText = compScore;
        console.log("You Lost");
        msg.innerText=`You Lost! ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";

    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});