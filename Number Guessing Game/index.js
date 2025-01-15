const minNum = 0;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1));

console.log(answer);

let attempts = 0;

document.getElementById('submit-btn').addEventListener('click', function() {
    let guessInput = document.getElementById('guess-input');
    let guess = Number(guessInput.value);
    let feedback = document.getElementById('feedback');
    let attemptsDisplay = document.getElementById('attempts');

    if (isNaN(guess) || guess < minNum || guess > maxNum) {
        feedback.textContent = `Please enter a number between ${minNum} and ${maxNum}.`;
    } else {
        attempts++;
        if (guess < answer) {
            feedback.textContent = `Number too low, try again!`;
        } else if (guess > answer) {
            feedback.textContent = `Number too high, try again!`;
        } else {
            feedback.textContent = `Congrats! You found ${answer}. It took you ${attempts} attempts.`;
        }
    }

    attemptsDisplay.textContent = `Attempts: ${attempts}`;
    guessInput.value = '';
});
