//1.DELARED ALL VARIABLE THAT WE NEED
const cells = document.querySelectorAll(".cell");
const startBtn = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");
const winCondition = [
    [0, 1, 2],
    [3, 3, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false; 

//2.CREATE ALL FN THAT NEED
initializeGame();

function initializeGame(){//2.1
    cells.forEach(cell => cell.addEventListener("click", cellClick));
    restartBtn.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer}'s turn`;
    running = true;

}
function cellClick(){//2.2
    const cellIndex = this.getAttribute("cellIndex");

    if(options[cellIndex]!= "" || !running){
        return;
    }
    updateCell(this, cellIndex);
    checkWinner();
}
function updateCell(cell, index){//2.3
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;

}
function changePlayer(){//2.4
    currentPlayer = (currentPlayer == "X")? "O" : "X";
    statusText.textContent = `${currentPlayer}'s turn`;

}
function checkWinner(){//2.5
    let roundWon = false;
    
    for(let i = 0; i < winCondition.length; i++){
        const condition = winCondition[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            roundWon = true;
            break;
        }
    }
    if(roundWon){
        statusText.textContent = `${currentPlayer} win!`;
        running = false;
    }
    else if (!options.includes("")){
        statusText.textContent = `Draw!`;
        running = false;
    }
    else{
        changePlayer();
    }
}
function restartGame(){//2.6
    currentPlayer = "X";
    let options = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
}
