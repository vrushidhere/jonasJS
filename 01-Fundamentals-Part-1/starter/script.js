const bill = [125, 555, 44];

const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const tip = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];

console.log(tip);

//console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);