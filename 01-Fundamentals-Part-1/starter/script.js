const worldPopulation = 7900;

// const percentageOfWorld1 = function(population) {
//     return ( population / 7900 ) * 100;
// }

// const percentageOfWorld2 = function(population) {
//     return ( population / 7900 ) * 100;
// }

const percentageOfWorld3 = population => (population / worldPopulation) * 100;

const ChinaPopulation = percentageOfWorld3(1900);
const IndiaPopulation = percentageOfWorld3(1500);
const NepalPopulation = percentageOfWorld3(12);

console.log(`
    China Population : ${ChinaPopulation}%,
    India Population : ${IndiaPopulation}%,
    Nepal Population : ${NepalPopulation}%,
`)