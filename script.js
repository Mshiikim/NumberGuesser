let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Random number generator for secret number. Range 0-10
const generateTarget = () => {
    return Math.floor(Math.random(9) * 10);
};

// Function to check user input is within allowed range.
const checkUserInput = (input) => {
    if (input < 0 || input > 9){
        alert('Your guess is outside the proper range and your chances of winning are greatly diminished.')
    }
};


// Function to determine the winner each round. Human wins on ties.
const compareGuesses = (humanGuess, comGuess, secretNum) => {
    let humDiff = Math.abs(secretNum - humanGuess);
    let comDiff = Math.abs(secretNum - comGuess);
        if (humDiff == comDiff || humDiff < comDiff){
            return true;
        } else {
            return false;
        }
};

// Function to update scores.
const updateScore = winner => {
    if (winner === 'human'){
        humanScore ++;
    } else {
        computerScore ++;
    }
};

// Function to update the currentRoundNumber.
const advanceRound = () => {
    currentRoundNumber ++;
};