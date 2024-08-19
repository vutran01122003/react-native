let [markMass, markHeight] = [60, 1.8];
let [johnMass, johnHeight] = [80, 1.9];

function calculateBMI(mass, height) {
    return mass / Math.pow(height, 2);
}

let markBMI = calculateBMI(markMass, markHeight);
let johnBMI = calculateBMI(johnMass, johnHeight);

const markHigherBMI = markBMI > johnBMI;

if (markHigherBMI) console.log("Mark has a higher BMI than John")
else console.log("Mark has a shoter BMI than John");