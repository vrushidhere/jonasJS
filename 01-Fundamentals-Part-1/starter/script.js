function describeCountry(country, population, capitalCity){
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const findlandDescription = describeCountry('Finland', 6, 'Helsinki');
const IndiaDescription = describeCountry('India', 125, 'Delhi');
const NepalDescription = describeCountry('Nepal', 2.5, 'Kanthmandu');

console.log(`
${findlandDescription}, 
${IndiaDescription}, 
${NepalDescription}.
`);