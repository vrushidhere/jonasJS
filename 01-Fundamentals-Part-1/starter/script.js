const myCountry = {
    country: 'India',
    capital: 'Delhi',
    language: 'Hindi',
    population: 125,
    neighbours: ['Pakistan', 'Bhutan', 'China', 'Nepal', 'Bangladesh']
}

console.log(`
${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries
and a capital called ${myCountry.capital}.'
`);

console.log(myCountry.population += 2);

console.log(myCountry['population'] -= 2);