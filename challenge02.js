let [markMass, markHeight] = [95, 1.88];
let [johnMass, johnHeight] = [85, 1.76];

function calculateBMI(mass, height) {
    return (mass / Math.pow(height, 2)).toFixed(2);
}

let markBMI = calculateBMI(markMass, markHeight);
let johnBMI = calculateBMI(johnMass, johnHeight);

const markHSigherBMI = markBMI > johnBMI;

if (markHSigherBMI) console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`)
else console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);