const myCountry = {
    country: 'India',
    capital: 'Delhi',
    language: 'Hindi',
    population: 125,
    neighbours: ['Pakistan', 'Bhutan', 'China', 'Nepal', 'Bangladesh'],
    describe: function() {
        this.countryName = this.country;
        return `${this.country} has ${this.population} million ${this.language}-speaking people, 
        ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
    },
    checkIsland: function() {
        this.isIsland = this.neighbours.length === 0 ? true : false;
    }
};

console.log(myCountry.describe());