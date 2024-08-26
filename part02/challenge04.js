const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(bill) {
    if (bill < 50) {
        return bill * 0.2;
    } else if (bill >= 50 && bill <= 200) {
        return bill * 0.15;
    } else {
        return bill * 0.1;
    }
}

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    const total = bills[i] + tip;

    tips.push(tip);
    totals.push(total);
}

console.log('Bills:', bills);
console.log('Tips:', tips);
console.log('Totals:', totals);
