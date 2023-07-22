function getComputerChoice()
{
    let index = (Math.floor(Math.random() * 3));
    let choiceString = ["rock", "paper", "scissor"];
    return choiceString[index].toLowerCase();
}

let playerScore = 0;
let computerScore = 0;
let draws = 0;
function playRound(playerSelection)
{
    let outcome;
    let computerSelection = getComputerChoice();
    console.log("Computer chose " + computerSelection)

    if(playerScore < 5 && computerScore < 5)
    {
        if(playerSelection === "rock" && computerSelection === "scissor" )
        {
            outcome = "win";
            
            playerScore++;
        }
        else if(playerSelection === "scissor" && computerSelection === "paper"){
            outcome = "win";
            
            playerScore++;
        }else if(playerSelection === "paper" && computerSelection === "rock"){

            outcome = "win";

            playerScore++;
        }
        else if(playerSelection === computerSelection)
        {

            outcome = "draw";
            draws++;
        }
        else{
            outcome = "lose";
            computerScore++;
        }
  
    }
    if(playerScore === 5)
    {
        displayResult.textContent = "You win the game";
    }else if(computerScore === 5) 
    {
        displayResult.textContent = "You lose";
    }else{
        displayResult.textContent = "Your score: " + playerScore + " | Computer Score: " + computerScore + " | Draws: " + draws;
    }
    console.log(outcome + " " + playerScore);
}

container = document.querySelector('.container');
const displayResult = document.querySelector('.display');


const btnOne = document.querySelector(".rock");
const btnTwo = document.querySelector(".paper");
const btnThree = document.querySelector(".scissor");


let playerSelection;
btnOne.addEventListener('click', () => {
    playerSelection = "rock";
    playRound(playerSelection);
});

btnTwo.addEventListener('click', () => {
    playerSelection = "paper";
    playRound(playerSelection);
    
});

btnThree.addEventListener('click',() => {
    playerSelection = "scissor";
    playRound(playerSelection);
});
