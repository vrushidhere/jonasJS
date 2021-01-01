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

const openMonday = openingHours.mon?.open || 'closed';
//using or operator for else condition and
//? to check if openingHours Object have mon property
console.log(openMonday);

const openSaturday = openingHours.sat?.open ?? 'closed';
// to solve the problem with 0, which returns falsy value and returns closed even when sat property is available, we can use nullish operator
console.log(openSaturday);

// for (let day of weekdays) {
//   let weeklyavailable = restaurant.openingHours[day]?.open || 'closed';

//   let outputStr = `restaurant is ${weeklyavailable}`;
//   console.log(outputStr);
// }

for (let day of weekdays) {
  const outputStr = restaurant.openingHours[day]
    ? `restaurant is open on ${day} at ${restaurant.openingHours[day].open}`
    : `restaurant is closed on ${day}`;
  console.log(outputStr);
}
