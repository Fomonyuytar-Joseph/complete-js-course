'use strict';


const arr = [7 ,8 ,9];

const newArr =[1,2,3 ,...arr];
console.log(newArr);
console.log(...newArr);


//iterables
const str = 'Joseph';

const letters = [...str,'','S.']

console.log(letters);


const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
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

  oderDelivery: function({mainIndex,starterIndex,time,address}){
       console.log(
         `order received ${this.starterMenu[starterIndex]} to ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
       );
  }
};

const newResturant = { founded: 2000, ...restaurant, founder: 'joseph' };

console.log(newResturant);

// restaurant.oderDelivery({
//   time:'22:30',
//   address:'buea',
//   mainIndex:2,
//   starterIndex:2,
// })



// const {name ,openingHours,categories} = restaurant;

// const {name:restaurantName,openingHours:hours,categories:tags}=restaurant

// const {menu=[],starterMenu:starters = []}=restaurant

// console.log(menu,starters);


// //Mutating variables
// let a= 111;
// let b =999;

// const  obj = {a:23,b:27,c:14};

// ({a,b}=obj)
// console.log(a,b);

// //nested objects
// const {fri:{open:o,close:c}}=openingHours;
// console.log(open,close);







