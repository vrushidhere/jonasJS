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

const properties = Object.keys(openingHours);

let openStr = `we are open on ${properties.length} days : `;

for (let day of properties) {
  openStr += `${day}, `;
  // console.log(openStr);
}
console.log(openStr);

const values = Object.values(openingHours);

console.log(values);

const allProperties = Object.entries(openingHours); // entires provide all key values in the form of array
for (let [propertyName, { open, close }] of allProperties) {
  // we are using destructuring to get key values seperated variables
  console
    .log
    // `Restaurant is open on ${propertyName}, it opens on: ${open}, closes on: ${close} `
    ();
}
console.log(allProperties);
