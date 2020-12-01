const neighbours = ['India', 'Pakistan', 'China'];

neighbours.push('Utopia');

neighbours.pop();

console.log(`${!neighbours.includes('Germany') ? 'Probably not a central European country :D' : ''}`);

const chinaIndex = neighbours.indexOf('China');

neighbours[chinaIndex] = 'Bhutan';

console.log(neighbours);