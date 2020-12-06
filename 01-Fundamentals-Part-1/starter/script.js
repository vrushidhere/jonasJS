const bill = [125, 555, 44, 33, 24, 78, 44, 900, 120, 342, 456, 34];

const tips = [];

const totals = [];

const calcTip = function (billAmount) {
  return billAmount >= 50 && billAmount <= 300
    ? billAmount * 0.15
    : billAmount * 0.2;
};

for (let i = 0; i < bill.length; i++) {
  const tip = calcTip(bill[i]);
  tips.push(tip);
  totals.push(tip + bill[i]);
}

console.log(tips);
console.log(totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
  console.log(sum);
};

console.log(calcAverage(totals));

//console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

const ling = 'only';
