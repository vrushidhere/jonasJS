const worldPopulation = 7900;

const percentageOfWorld1 = function(population) {
    return ( population / worldPopulation ) * 100;
}

const percentageOfWorld2 = function(population) {
    return ( population / worldPopulation ) * 100;
}

const ChinaPopulation = percentageOfWorld1(1900);
const IndiaPopulation = percentageOfWorld1(1500);
const NepalPopulation = percentageOfWorld1(12);

console.log(`
    China Population : ${ChinaPopulation}%,
    India Population : ${IndiaPopulation}%,
    Nepal Population : ${NepalPopulation}%,
`)