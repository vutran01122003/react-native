function calculateTip(value) {
    return 50 <= value <= 300 ? value * 0.15 : value * 0.2
}

const bills = [125, 555, 44];

const tips = bills.map((bill) => {
    return calculateTip(bill)
});

console.log(tips);

const total = bills.map((bill, index) => {
    return bill + tips[index];
}, 0);

console.log(total);