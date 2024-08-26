let amountCount = 20;
let secretNumber = Math.floor(Math.random() * amountCount);

document.querySelector('.number').textContent = '?';
document.querySelector('.amount_guess').textContent = amountCount;
document.querySelector('body').style.backgroundColor = '#222';
document.querySelector('.number').style.width = '15rem';

function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if (amountCount === 0) {
        onResetGame();
        return;
    }

    if (guess > secretNumber) {
        document.querySelector('.amount_guess').textContent = --amountCount;
        document.querySelector('.notify_guess').textContent = 'too high';
    } else if (guess < secretNumber) {
        document.querySelector('.amount_guess').textContent = --amountCount;
        document.querySelector('.notify_guess').textContent = 'too low';
    } else {
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.notify_guess').textContent = 'corret';
    }
});

const onResetGame = () => {
    secretNumber = Math.floor(Math.random() * amountCount);
    secretNumber = 5;

    document.querySelector('.number').textContent = '?';
    document.querySelector('.amount_guess').textContent = amountCount;
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
};

document.querySelector('.again').addEventListener('click', onResetGame);
