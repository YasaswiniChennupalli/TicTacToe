let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newBtn = document.querySelector(".new-btn");
let winmsg = document.querySelector(".winnermsg");
let turnO = true;//playerO,playerX
let p1 = prompt("Enter Player 1");
let p2 =prompt("Enter Player 2");

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]  
];

const resetGame = () =>{
    turnO=true;
    enableBoxes();
    winmsg.classList.add("hide");
    newBtn.classList.add("hide");
}


boxes.forEach((box)  => {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){ //playerO
            box.innerText="O";
            turnO = false;
        }
        else { //playerX
            box.innerText="X";
            turnO = true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText="";
    }
}

const show = (winner) => {
    winmsg.classList.remove("hide");
    winmsg.innerText = `Winner is ${winner}`;
    newBtn.classList.remove("hide");
    disableBoxes();
}
const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        
    if(pos1Val!="" && pos2Val!="" && pos3Val!="") {
        if(pos1Val===pos2Val && pos2Val===pos3Val){
            console.log("Winner");
            if(pos1Val==="X") {
                show(p1);
            }
            else {
                show(p2);
            }
        }
    }
    }
};

reset.addEventListener("click",resetGame);
newBtn.addEventListener("click",resetGame);
