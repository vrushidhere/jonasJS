const population = [12,14,87,20];
const worldPopulation = 790;
const percentageOfWorld1 = population => (population / worldPopulation) * 100;
const percentage2 = [];
for(i = 0; i < population.length; i++){
    const percentArray = percentageOfWorld1(population[i]);
    percentage2.push(percentArray);
}
console.log(percentage2);