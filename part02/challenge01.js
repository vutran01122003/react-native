const dolphinsScores1 = [44, 23, 71];
const koalasScores1 = [65, 54, 49];

const dolphinsScores2 = [85, 54, 41];
const koalasScores2 = [23, 34, 27];

const calcAverage = (scores) => scores.reduce((sum, score) => sum + score, 0) / 3;

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins...');
    }
};

const avgDolphins1 = calcAverage(dolphinsScores1);
const avgKoalas1 = calcAverage(koalasScores1);
checkWinner(avgDolphins1, avgKoalas1);

const avgDolphins2 = calcAverage(dolphinsScores2);
const avgKoalas2 = calcAverage(koalasScores2);
checkWinner(avgDolphins2, avgKoalas2);