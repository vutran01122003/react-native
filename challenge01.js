let [markMass, markHeight] = [78, 1.69];
let [johnMass, johnHeight] = [92, 1.96];

function calculateBMI(mass, height) {
    return mass / Math.pow(height, 2);
}

let markBMI = calculateBMI(markMass, markHeight);
let johnBMI = calculateBMI(johnMass, johnHeight);

const markHSigherBMI = markBMI > johnBMI;

if (markHSigherBMI) console.log("Mark has a higher BMI than John")
else console.log("Mark has a shoter BMI than John");