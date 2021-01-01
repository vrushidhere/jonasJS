'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
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
  },

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
  orderPizza: function (o, c) {
    console.log(o, c);
  },
};

console.log('-----OR-----');
// or operator always return first truthy value
console.log(3 || 'jonas');
console.log('' || 'jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || '' || 0 || 'Hello' || 23 || null);

// or operator can be replacement of ternary operator sometimes
const guest1 = restaurant.guests ? restaurant.guest : 10;
console.log(guest1);

const guest2 = restaurant.guest || 10;
console.log(guest2); // we can see how easy it is to write
// but what if restaurant.guest have 0 value, it will return 10 which is practically right but will give wrong output

console.log('-----AND-----');
// const andOpr = 0 && 'jonas'; // it will not process further falsy value
// const andOpr = 7 && 'jonas'; // it returns last value if all values are truthy
const andOpr = 7 && 0 && 'jonas';
console.log(andOpr); // if any of the value is falsy, whole statement is false

//if statement with &&
if (restaurant.orderPizza) {
  restaurant.orderPizza('mashroom', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mashroom', 'spinach');
