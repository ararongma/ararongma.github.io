let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice)
{
    const choices = ['Rock', 'Paper', 'Scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result;
    if (!playerChoice)  
        result = "Rock, Paper, Scissors";
    else if (playerChoice === computerChoice) 
        result = "Draw!";
    else if ((playerChoice === "Rock" && computerChoice === "Scissors") || (playerChoice === "Paper" && computerChoice === "Rock") || (playerChoice === "Scissors" && computerChoice === "Paper"))
    {
        result = "You win!";
        playerScore++;
    }
    else
    {
        result = "You lose!";
        computerScore++;
    }
    document.getElementById("result").innerHTML = result; 
    document.getElementById("computerChoice").innerHTML = `The computer choose:  ${computerChoice}`; 
    document.getElementById("score").innerHTML = `Player: ${playerScore} - Computer: ${computerScore}`; 
}