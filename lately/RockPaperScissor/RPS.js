//1.SELECT ALL ELEMENT THAT WE NEED FROM HTML DOC
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtn = document.querySelectorAll(".choiceBtn");

//2.CREATE 3 VARIABLE
let player; 
let computer;
let result;

//3.ITERATE OVER CHOICEBTN USING FOREACH 
choiceBtn.forEach(button => button.addEventListener("click",()=>{
    player = button.textContent;
    computerTurn();

//4.SET A TEXT WIHT CHOICE
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `computer: ${computer}`;
    resultText.textContent = checkWinner();
}));

//*A*declared computerTurn()
function computerTurn(){
    const randNum = Math.floor(Math.random()*3) +1;

    switch(randNum){
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSOR";
            break;   
    }
}
// *B DELACRED checkWinner()*
function checkWinner(){
    if(player == computer){
        return "Draw!";
    }
    else if(computer == "ROCK"){
        return (player == "PAPER") ? "YOU WIN!" : "YOU LOSE!";
    }
    else if(computer == "PAPER"){
        return (player == "SCISSOR") ? "YOU WIN!": "YOU LOSE!";
    }
    else if(computer == "SCISSOR"){
        return (player == "ROCK") ? "YOU WIN!" : "YOU LOSE!"
    }
}