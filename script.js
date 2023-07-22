function getComputerChoice()
{
    let index = (Math.floor(Math.random() * 3));
    let choiceString = ["rock", "paper", "scissor"];
    return choiceString[index].toLowerCase();
}


function playRound(playerSelection)
{
    let outcome;


    let computerSelection = getComputerChoice();
    console.log("Computer chose " + computerSelection)
    if(playerSelection === "rock" && computerSelection === "scissor" )
    {
        outcome = "win";
        return outcome;
    }
    else if(playerSelection === "scissor" && computerSelection === "paper"){
        outcome = "win"
        return outcome;
    }else if(playerSelection === "paper" && computerSelection === "rock"){

        outcome = "win"
        return outcome;
    }
    else if(playerSelection === computerSelection){

        return outcome = "draw";
    }
    else{
        outcome = "lose";
        return outcome;
    }

}

    let playerScore = 0;
    let computerScore = 0;
    let draws = 0;
    let message;
    let outcome = getPlayerSelection();
    if(playerScore < 5 || computerScore < 5)
    { 
        if(outcome === "win")
        {
            console.log("You win this round");
            playerScore++;
        }else if(outcome === "lose"){

            console.log("You lose this round");
            computerScore++;
        }else{
            console.log("You draw this round");
            draws++;
        }  
        console.log(playerScore);
    }

    if(playerScore > computerScore)
    {
        message = "You win!";
    }else if(playerScore < computerScore)
    {
        message = "You lose";
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
    displayResult.textContent = playRound(playerSelection);
});


btnTwo.addEventListener('click', () => {
    playerSelection = "paper";
    displayResult.textContent = playRound(playerSelection);
    console.log(playerSelection);
});


btnThree.addEventListener('click',() => {
    playerSelection = "scissor";
    displayResult.textContent = playRound(playerSelection);
});

container.appendChild(displayResult);
