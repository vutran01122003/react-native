const dolphinsScores1 = [96, 108, 89];
const koalasScores1 = [88, 91, 110];

const dolphinsScores2 = [97, 112, 101];
const koalasScores2 = [109, 95, 123];

const dolphinsScores3 = [97, 112, 101];
const koalasScores3 = [109, 95, 106];

function calculateAverage(scores) {
    const total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}

function determineWinner(dolphinsScores, koalasScores, minimumScore = 0) {
    const dolphinsAverage = calculateAverage(dolphinsScores);
    const koalasAverage = calculateAverage(koalasScores);

    if (dolphinsAverage > koalasAverage && dolphinsAverage >= minimumScore) {
        console.log("Dolphins win the trophy!");
    } else if (koalasAverage > dolphinsAverage && koalasAverage >= minimumScore) {
        console.log("Koalas win the trophy!");
    } else if (
        dolphinsAverage === koalasAverage &&
        dolphinsAverage >= minimumScore &&
        koalasAverage >= minimumScore
    ) {
        console.log("It's a draw!");
    } else {
        console.log("No team wins the trophy.");
    }
}

console.log("Data 1:");
determineWinner(dolphinsScores1, koalasScores1);

console.log("\nData Bonus 1:");
determineWinner(dolphinsScores2, koalasScores2, 100);

console.log("\nData Bonus 2:");
determineWinner(dolphinsScores3, koalasScores3, 100);