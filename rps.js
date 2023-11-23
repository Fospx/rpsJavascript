// Javascript

function getComputerChoice()
{
    const rpsArray = ['rock', 'paper', 'scissor'];
    const compChoice = (rpsArray[(Math.floor(Math.random() * rpsArray.length))])
    return compChoice;
}
// playround var
let playerWins = 0;
let compWins = 0;
function playRound(playerSelection, computerSelection)
{
    if (playerSelection == computerSelection)
    {
        return "It's a Tie";
    }
    else if ((playerSelection == 'rock' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissor' && computerSelection == 'paper'))
    {
        playerWins += 1;
        return "you won";

    }
    else
    {
        compWins += 1;
        return "You Lost " + computerSelection + " beats " + playerSelection;
    }
}
// game var
const matchAmmount = [0,1,2,3,4]
const game = () => {
    for (let i = 0; i < matchAmmount.length; i++)
    {
        const playerSelection = prompt().toLowerCase();
        const computerSelection = getComputerChoice();
        console.log("Computer chose: " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }
    console.log("you won " + playerWins + " time/s");
    console.log(whoWon(playerWins, compWins));
    

}
// checks to see who won
const whoWon = (player, computer) => {
    if (player > computer)
    {
        return "The Player Won";
    }
    else
    {
        return "The Computer Won";
    }
}
// starts the game
game();































// An arry with 
// function getComputerChoice(){
//     rpsArray = ['rock', 'paper', 'scissors'];
//     computerChoice = (rpsArray[(Math.floor(Math.random() * rpsArray.length))]);
//     return computerChoice;
// }

// function playRound(playerSelection, computerSelection){
    
//     // DRAW CONDITIONS
//     if (playerSelection === computerSelection)
//     {
//         return "It's a tie";
//     }
//     // WIN CONDITIONS
//     else if ((playerSelection === 'rock' && computerSelection === 'scissors') || 
//     (playerSelection === 'paper' && computerSelection === 'rock') || 
//     (playerSelection === "scissors" && computerSelection === 'paper'))
//     {
//         return "you win";
//     }
//     else {
//         return "You Lose! " + computerSelection + " beats " + playerSelection;
//     } 
 
// }

// const playerSelection = "paper"
// const computerSelection = getComputerChoice();
// console.log("computers choice: " + computerSelection);
// console.log(playRound(playerSelection, computerSelection));







