function calculateTip(value) {
    let tip = 0;
    if (50 <= value <= 300) {
        tip = 0.15;
    } else {
        tip = 0.2;
    }

    console.log(`The bill was ${value}, the tip was ${value*tip}, and the total value ${value*(1+tip)}`);
}

calculateTip(275);