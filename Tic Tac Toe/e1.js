let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newGame = document.querySelector("#new-btn");
let msgConstainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn = true; //playerX ,playerO

const winPattern = [
    [0,1,2],   //1
    [0,3,6],   //2
    [0,4,8],   //3
    [1,4,7],   //4
    [2,5,8],   //5
    [2,4,6],   //6
    [3,4,5],   //7
    [6,7,8],   //8
];

const resetGame = () =>
{
    turn = true;
    enableBoxes();
    msgConstainer.classList.add("hide");
}

//for alternative turn
boxes.forEach((box) =>{
    let c=0;
    box.addEventListener("click",() =>{
        if(turn===true)
        {
            box.innerText="X"; //player X 
            turn=false;
        }
        else
        {
            box.innerText="O";  //player Y
            turn=true;
        }
        box.disabled = true;
        checkWinner();
        c++;
    });
    if(c==9)
    {
        msg.innerText=`No one Won`;
    }
});

const disableBoxes = () =>
{
    for(let box of boxes)
    {
        box.disabled = true;
    }
};

const enableBoxes = () =>
    {
        for(let box of boxes)
        {
            box.disabled = false;
            box.innerText="";
        }
    };

const shoWinner = (winner) =>
{
    msg.innerText = `Congratulations, Winner is ${winner} `;
    msgConstainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () =>
{
    for(let pattern of winPattern)
    {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        
        if(pos1val!="" && pos2val!="" && pos3val!="")
        {
            if(pos1val === pos2val && pos2val === pos3val)
            {
                shoWinner(pos1val);
            }
        }
    }
};

newGame.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);


