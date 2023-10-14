//get player choice
let playerChoice = () => {
  let answer = prompt(
    "What will you choose?(Rock, Paper, or Scissors)"
  ).toLowerCase();
  return answer;
};
//get computer choice
let computerChoice = () => {
  let choices = ["paper", "rock", "scissors"];
  let choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
};

// pick winner
let winner = () => {
  let playerScore = 0;
  let computerScore = 0;
  let winningScore = 1;
  while (playerScore < winningScore && computerScore < winningScore) {
    let player = playerChoice();
    let computer = computerChoice();
    if (player == computer) {
      alert("its a draw");
    } else if (player == "paper") {
      computer == "rock" ? playerScore++ : computerScore++;
    } else if (player == "rock") {
      computer == "scissors" ? playerScore++ : computerScore++;
    } else if (player == "scissors") {
      computer == "paper" ? playerScore++ : computerScore++;
    }
    alert(`The score is Player:${playerScore} Computer:${computerScore}`);
  }
  if (playerScore == winningScore) {
    console.log("you won");
  } else if (computerScore == winningScore) {
    console.log("Computer wins! Better luck next time!");
  }
};

function game() {
  winner();
  let playAgain = prompt("Do you want to play again?(yes/no)");
  let running = true;
  while (running) {
    if (playAgain == "yes") {
      winner(playerChoice(), computerChoice());
      playAgain = prompt("Do you want to play again?(yes/no)");
    } else {
      running = false;
      alert("Thank you for playing");
    }
  }
}

game();
