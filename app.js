// get player choice
let playerChoice = () => {
  let answer = prompt(
    "What will you choose?(Rock, Paper, or Scissors)"
  ).toLowerCase();
  return answer;
};
// get computer choice
let computerChoice = () => {
  let choices = ["paper", "rock", "scissors"];
  let choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
};

// pick winner
let winner = (playerChoice, computerChoice) => {
  if (playerChoice == computerChoice) {
    alert("Its a draw");
  } else if (playerChoice == "paper") {
    computerChoice == "rock" ? alert("You Win!") : alert("You Lose :(");
  } else if (playerChoice == "rock") {
    computerChoice == "scissors" ? alert("You Win!") : alert("You Lose :(");
  } else if (playerChoice == "scissors") {
    computerChoice == "paper" ? alert("You Win!") : alert("You Lose :(");
  }
};

function game() {
  winner(playerChoice(), computerChoice());
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
