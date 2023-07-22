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
        displayResult.textContent = outcome + "Your score: " + playerScore + " | Computer Score: " + computerScore + " | Draws: " + draws;

    }


    console.log(outcome + " " + playerScore);
}

container = document.querySelector('.container');
const displayResult = document.createElement('div');

const btnOne = document.createElement('button');
btnOne.textContent = "rock";
container.appendChild(btnOne);

const btnTwo = document.createElement('button');
btnTwo.textContent = "paper";
container.appendChild(btnTwo);

const btnThree = document.createElement('button');
btnThree.textContent = "Scissor";
container.appendChild(btnThree);

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

container.appendChild(displayResult);
