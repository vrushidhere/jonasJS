'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  // thu: { this original way can be replace with computed property name using es6 feature
  [weekdays[`${2 + 1}`]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //openingHours: openingHours, this is actual way, but we can use es6 feature object literal as below
  openingHours,

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    time = '22:00',
    address = 'kamothe',
    starterIndex = 1,
    mainIndex = 0,
  }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} to be delivered to ${address} at ${time}`
    );
  },
  //orderPizza: function (o, c) { this is actual way, but we can use es6 feature object literal as below
  orderPizza(o, c) {
    console.log(o, c);
  },
};

const ordersSet = new Set([
  'pizza',
  'Rossitto',
  'Pizza',
  'Pasta',
  'Pizza',
  'Rossitto',
]);

const rest = new Map();

rest.set('Name', 'Classico Italiano');
rest.set('speciality', 'Pasta');
rest.set(1, 'Itali').set(2, 'India'); //we can add multiple set, we say 'set chain'

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open')
  .set(false, 'we are closed');

rest.delete(2); // this we remove 2 key value from map
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest, rest.size);
// rest.clear(); // to remove map

console.log(
  `Restaurant: ${rest.get('Name')}, Have Speciality ${rest.get(
    'speciality'
  )}, And they says '${rest.get(true)}'`
);

const time = 11;
console.log(rest.get(time >= rest.get('open') && time < rest.get('close')));

rest.set([1, 2], 'test');

console.log(rest.get([1, 2])); // it will not retreive array from get method

const sampleArr = [1, 2];
rest.set(sampleArr, 'test');
console.log(rest.get(sampleArr)); // to retrieve array we can use this method by defning variable and call it inside get method

const question = new Map([
  ['question', 'what is the best programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again'],
]);

console.log(question);

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

const answer = Number(prompt('Your answer'));

console.log(question.get(question.get('correct') === answer));

//convert map to array
//console.log([...question]); // using spread operator we can get keys, values
console.log([...question.keys()]);
console.log([...question.values()]);
