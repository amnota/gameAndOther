
let number1 = Math.floor((Math.random() * 10)+1);
let number2 = Math.floor((Math.random() * 10)+1); 

const form = document.getElementById("myIdForm");
let userAns = document.getElementById("myInput");
const submitBtn = document.querySelector("#submitBtn");
const scoreText = document.getElementById("myScore");
const correctAns = number1 * number2;
let score = 0;

userAns = Number(userAns);

document.getElementById("myHeader").innerHTML = `what is ${number1} multiply by ${number2}`;


form.addEventListener("submit", (event) => {
  event.preventDefault();
    if (userAns === correctAns) {
    score++;
    console.log(score);
  } else {
    score--;
    console.log(score);
  }

  scoreText.textContent = score;
});

 /* ยังทำให้ score แสดงที่ console ไม่ได้ ไม่รู้เกิดจาก type ของ input ไหม */
