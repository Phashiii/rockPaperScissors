function getComputerChoice()
{
    let index = (Math.floor(Math.random() * 3));
    let choiceString = ["rock", "paper", "scissor"];
    return choiceString[index].toLowerCase();
}
function playRound()
{
    let outcome;
    let playerSelection = prompt("Type Rock, Paper or Scissors:").toLowerCase();
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

function playGame()
{
    let rounds = 5;
    let playerScore = 0;
    let computerScore = 0;
    let draws = 0;
    let message;

    while(rounds > 0)
    {      
        let outcome = playRound(); 
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
        rounds--;
        console.log("Round: " + rounds);
    }
    if(playerScore > computerScore)
    {
        message = "You win!";
    }else if(playerScore < computerScore)
    {
        message = "You lose";
    }else{
        message = "Draw";
    }

    return message;
}

console.log(playGame());


/*const playerSelection =  "paper"
const computerSelection = getComputerChoice();
*/