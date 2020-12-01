const populations = [10,12,15,24];
console.log(`${populations.length === 4}`);

const totalPopulation = populations.reduce((a, b) => a + b, 0);

// console.log(populations[0]/totalPopulation * 100 + '%')
// console.log(populations[1]/totalPopulation * 100 + '%')
// console.log(populations[2]/totalPopulation * 100 + '%')
// console.log(populations[3]/totalPopulation * 100 + '%')

for(i = 0 ; i < populations.length; i++ ) {
    console.log(i);
    console.log(populations[i]/totalPopulation * 100 + '%');
}