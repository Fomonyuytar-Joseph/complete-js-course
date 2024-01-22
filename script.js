'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};



console.log(restaurant.order(2, 0));








const arr = [1, 2, 3];
const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;

console.log(main, secondary);
[main, secondary] = [secondary, main];

//  let temp = main;
//   main = secondary;
//   secondary = temp;

console.log(main, secondary);
