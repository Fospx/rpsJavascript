// Javascript

function getComputerChoice()
{
    rpsArray = ['rock', 'paper', 'scissor'];
    compChoice = (rpsArray[(Math.floor(Math.random() * rpsArray.length))])
    return compChoice;
}





























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







