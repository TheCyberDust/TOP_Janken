let playerScore = 0;
let computerScore = 0;
let playerChoice, computerChoice, iterator;

function getComputerChoice() {
    computerChoice = Math.floor((Math.random() * 9));
    if (computerChoice <= 2) {
        computerChoice = 'rock';
    } else if (computerChoice >=3 && computerChoice <= 5) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }
    return computerChoice;
}

function getPlayerChoice() {
    playerChoice = prompt('Make your choice!\n Rock, Paper, or Scissors?');
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice == 'rock' || playerChoice == 'paper' || playerChoice == 'scissors') {
       return playerChoice;
    } else {
        playerChoice = 'invalid';
        return playerChoice;
    }
}

function playRound(player, computer) {
    if (playerChoice == computerChoice) {
        console.log(`It\'s a tie!\nYou and your opponent both chose ${playerChoice}!`)
        playerChoice = 'no_score';
    } else {
        if (playerChoice == 'rock' && computerChoice == 'scissors' || playerChoice == 'paper' && computerChoice == 'rock' || playerChoice == 'scissors' && computerChoice == 'paper') {
            console.log(`You Win!\nYou chose ${playerChoice} which beats ${computerChoice}!`);
            playerScore += 1;
        } else if (playerChoice == 'invalid') {
            console.log(`Sorry, You chose something ${playerChoice}.  This round will not count, try again.`);
        } else {
            console.log(`Sorry, your opponent wins.\nYou chose ${playerChoice} which loses to ${computerChoice}.`);
            computerScore += 1;
        }
    }
}

function winCondition() {
    //Winner is the first to win 3 of 5 games
    if (playerScore == 3) {
        iterator = 6;console.log(`Congratulations!  You won this match!\nFinal Scores - Player: ${playerScore}, Opponent: ${computerScore}.`);
    } else if (computerScore == 3) {
        iterator = 6;console.log(`Better luck next time!\nFinal Scores - Opponent: ${computerScore}, Player: ${playerScore}.`);
    } else 
        console.log('Best 3 out of 5!');
}

function game() {
    for (iterator = 1; iterator <= 5; iterator++) {
        console.log(`Round ${iterator} of 5!`);
        playRound(getPlayerChoice(), getComputerChoice());
        if (playerChoice == 'invalid' || playerChoice == 'no_score') {
            iterator--;
        } else
            console.log(`Player Score: ${playerScore}.\nOpponent Score: ${computerScore}.`)
    winCondition();
    }

}

game();
