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

// const nameJ = new Set('jonas');

ordersSet.add('Garlic Bread');
console.log(ordersSet.has('Garlic Bread'));

ordersSet.delete('Garlic Bread');
console.log(ordersSet.has('Garlic Bread'));

// ordersSet.clear();
// console.log(ordersSet);

for (const orderItem of ordersSet) {
  console.log(orderItem); // it doesn't repeat the items, removes duplicates
}

const staff = ['waiter', 'manager', 'waiter', 'chef', 'waiter', 'chef'];

const uniqueStaff1 = new Set(staff); // to get array as output we use spread operator
const uniqueStaff = [...new Set(staff)]; // to get array as output we use spread operator
console.log(uniqueStaff);
console.log(uniqueStaff1.size); // we can get the size of set but not after we spreaded into an array
