'use strict';

;


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
  },
  orderPizza: function(mainIng,...otherIng){
                console.log(mainIng);
                console.log(otherIng);
  }
};

//spread because it is on the right hand side of the = operator
const arr = [1,2,...[3,4]]

const [a,b,...others]= [1,2,3,4,5];

console.log(others);

   
      const [pizza,,risotto,...otherFood]=[...restaurant.mainMenu,...restaurant.starterMenu]
      console.log(pizza,risotto,otherFood);


  //Objects
  const {sat,...weekdays}= restaurant.openingHours;

  console.log(weekdays);
   
//2) Functions
const add = function(...numbers){
console.log(numbers);
let sum = 0;
for(let num of numbers){
  sum += num 
}

console.log(sum);
}


add(2,3)
add(5,6,7,7,4)
add(3,5,6,3,2,6,4)


restaurant.orderPizza('mushrooms','onions','pizza')













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







