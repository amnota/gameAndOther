//1.DECLEARED THAT NEEDED 
//1.1 get element from html doc
const gameBoard = document.querySelector("#gameBoard");//that our canvas
const ctx = gameBoard.getContext("2D");//to paint the canvas we have to get the context*past "2D" as arr
const scoreText = document.querySelector("#scoreText");//stored score text as variable
const resetBtn =document.querySelector("#resetBtn");
//1.2 create variable to hold ..of our game board
const gameWidth = gameBoard.width;//W and H is atribute we assign at canvas ถ้าเรา declared W H at css it's not avialable fos js
const gameHeight = gameBoard.height;
const boardBackground = "white";
const snakeColor = "lightgreen";
const snakeBoarder = "black";
const foodColor = "red";
const unitSize = 25;
let running = false;// we will examine our game running or not
let xVelocity = unitSize;//how far we move on the x axis every single game tick, and set = unitSize that mean 25 px if x is + number it's will be move to the right
                                                                                                                 // if x is - number will move to the left
let yVelocity = 0;// = 0 mean we not moving up or down*just to begin of the game we just be moving to the right
                 // but if move "up" set  yVelocity = -unitSize
                //      if move "down" set  yVelocity = unitSize
let foodX;//coordinate for food it will be "X" and "Y" and we will cal random later
let foodY;
let score = 0;
let snake = [//snake it will be an array of part; below show cooordinate of each body part
    {x:unitSize * 4, y:0},//A.this 4 of body part of snake การ * แต่ละครั้งคือเขยิบๆมา ถ้าไม่ * มันจะคือพื้นที่เดิมซ้ำๆ
    {x:unitSize * 3, y:0},
    {x:unitSize * 2, y:0},
    {x:unitSize , y:0},
    {x:0, y:0}//B.the tail it start at top left corner 
];
//2.ADD EVENTLISTENER 
window.addEventListener("keydown", changeDirection);//add event list to our window to listen for key event; pastchangeDirection()as a callback
resetBtn.addEventListener("click", resetGame);//add eventlist to  reset button; invoke the resetGame()

gameStart();
createFood();


//3.DECLARED FUNTION THAT NEED
function gameStart(){};
function nextTick(){};
function clearBoard(){};//for re-painting the board
function createFood(){//find the randon place within our game board to placed a food item
    function randomFood(min, max){
        const randNum = Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize;
        return randNum;
    }
    foodX = randomFood(0, gameWidth - unitSize);
    foodY = randomFood(0, gameWidth - unitSize);

};

function moveSnake(){};
function drawSnake(){};
function changeDirection(){};
function checkGameOver(){};
function displayGameOver(){};
function resetGame(){};

