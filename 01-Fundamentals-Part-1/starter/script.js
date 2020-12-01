'use strict';
const calcAverage = (firstScore, secondScore, thirdScore) => (firstScore + secondScore + thirdScore) / 3;

const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

const checkWinner = function(avgDolphins, avgKoalas) {
    (avgDolphins >= 2 * avgKoalas) ? console.log(`Dolphins wins( ${avgDolphins} vs. ${avgKoalas})`) : '';
    (avgKoalas >= 2 * avgDolphins) ? console.log(`Koalas wins( ${avgKoalas} vs. ${avgDolphins})`) : '';
}

checkWinner(avgDolphins, avgKoalas);
