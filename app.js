const button = document.querySelectorAll(".choice");
const score = document.getElementById("score");
const result = document.getElementById("result");
// get computer choice
let computerChoice = () => {
  let choices = ["paper", "rock", "scissors"];
  let choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
};

// pick game
//while (playerScore < winningScore && computerScore < winningScore) {
let playerScore = 0;
let computerScore = 0;
let winningScore = 1;
let gameLoop = (playerChoice) => {
  let player = playerChoice;
  let computer = computerChoice();
  if (player == computer) {
    console.log("its a draw");
  } else if (player == "paper") {
    computer == "rock" ? playerScore++ : computerScore++;
  } else if (player == "rock") {
    computer == "scissors" ? playerScore++ : computerScore++;
  } else if (player == "scissors") {
    computer == "paper" ? playerScore++ : computerScore++;
  }
  score.innerHTML = `The score is Player:${playerScore} Computer:${computerScore}`;

  if (playerScore == winningScore) {
    result.innerHTML = "You Won";
  } else if (computerScore == winningScore) {
    result.innerHTML = "Computer wins! Better luck next time!";
  }
};
let test = (e) => {
  gameLoop(e.target.id);
};

button.forEach((i) => i.addEventListener("click", test));

// function game() {
//   game();
//   let playAgain = prompt("Do you want to play again?(yes/no)");
//   let running = true;
//   while (running) {
//     if (playAgain == "yes") {
//       game(playerChoice(), computerChoice());
//       playAgain = prompt("Do you want to play again?(yes/no)");
//     } else {
//       running = false;
//       console.log("Thank you for playing");
//     }
//   }
// }

//game();
