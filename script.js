'use strict';

 const openingHours = {
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
 };






const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },


  //es6 enhanced object literals
  openingHours,

  oderDelivery: function({mainIndex,starterIndex,time,address}){
       console.log(
         `order received ${this.starterMenu[starterIndex]} to ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
       );
  },


  //es6 enhanced object literals to write methods
  orderPizza(mainIng,...otherIng){
                console.log(mainIng);
                console.log(otherIng);
  }
};

if (restaurant.openingHours.mon) {console.log(restaurant.openingHours.mon.open);}


//with optional chaining
console.log(restaurant.openingHours?.mon?.open);

 

const days =['mon','tue','wed','thu','fri','sat','sun'];

for (let day of days){
  const open= restaurant.openingHours[day]?.open ?? 'closed'
  console.log(`On ${day} we open at ${open}`);
}


//Arrays
const users =[{name:'Jonas',email:'aL0fO@example.com'},{name:'Jessica',email:'jessica@a.com'}];



console.log(users[2]?.name ?? 'User array empty');

  //three new ways to write objects in es6









