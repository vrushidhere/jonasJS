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
};

//destructuring arrays
// let [main, , secondary] = restaurant.categories;
// [main, secondary] = [secondary, main]; //mutating variables
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(`Starter: ${starter}, Main Course: ${mainCourse}`);

//nested structure
// const nested = [1, 2, [3, 4]];
// const [i, , [j, k]] = nested; // hole inside array skips an element
// console.log(i, j, k);

//default values // assuming an array on right side coming through api
// const [p, q, r] = [8, 9]; // r will return undefined as it don't have value to be assigned
// const [p = 1, q = 1, r = 1] = [8, 9]; // this time it wil not return undefined as we are setting default value to 1
// console.log(p, q, r);

//object destructuring
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//new variable names assignment
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// defualt values with new variable assignment
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj); // wrap in paranthesis to resolve issue of object assignment
console.log(a, b);

//nested object
const {
  fri: { open: o, close: c },
} = restaurant.openingHours;
console.log(o, c);

//adding object
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'chane k khete me',
//   mainIndex: 2,
//   starterIndex: 2,
// });
// default values in object function
restaurant.orderDelivery({
  mainIndex: 1,
});
