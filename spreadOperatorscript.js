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

const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr); // this breaks array into individual elements

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

const jonas = 'jonas';
const jonasLetters = [...jonas, '', 'S.'];
console.log(jonasLetters);

const newRestaurant = {
  foundedIn: 1998,
  founder: 'john',
  ...restaurant,
  greeting: function () {
    console.log(this.favourite + ' is amazing');
  },
};
newRestaurant.favourite = 'pizza';
console.log(newRestaurant);
console.log(newRestaurant.greeting());
