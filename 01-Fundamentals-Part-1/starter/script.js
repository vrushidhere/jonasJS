const worldPopulation = 7900;

const percentageOfWorld1 = population => (population / worldPopulation) * 100;

const describePopulation = (country, population) => `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world.`

const ChinaPopulation = describePopulation('China', 1900);
const IndiaPopulation = describePopulation('India', 1500);
const NepalPopulation = describePopulation('Nepal', 12);

console.log(`
    China Description : ${ChinaPopulation},
    India Description : ${IndiaPopulation},
    Nepal Description : ${NepalPopulation},
`)