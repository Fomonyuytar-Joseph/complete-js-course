'use strict';

//Getters and setters
// const account ={
//   owner:'Joseph',
//   movements:[200,456,213,12,23],

//  get latest(){
//          return this.movements.slice(-1).pop();
//   },

//   set latest(mov){
//     this.movements.push(mov);
//   }

// }


// console.log(account.latest);
// account.latest=45;
// console.log(account.movements)





class PersonCL {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  //methods will be added to .prototype property og the PersonCl class
  calcAge() {
    console.log(2024 - this.birthYear);
  }

  greeting() {
     console.log(`Hey ${this.firstName}`);
  }

  get age(){
    return 2024-this.birthYear;
  }
}


const christy = new PersonCL('Christy', 2004);


console.log(christy.age);
// console.log(christy);
// christy.calcAge();

// //adding metthod manually ,the methods will be added to .prototype property 
// // PersonCL.prototype.greet = function () {
// //   console.log(`Hey ${this.firstName}`);
// // };

// christy.greet();

// const Person =  function(firstName,birthYear){
//     this.firstName = firstName;
//     this.birthYear= birthYear;

// }

// const joseph= new Person('Joseph',2000 );
// // console.log(joseph);

// const mikelia = new Person('Mikelia',2004)
// // console.log(mikelia instanceof Person);

// console.log(Person.prototype);

// //Protoypes
// Person.prototype.calcAge=function(){
//     console.log(2024 - this.birthYear);
// }

// joseph.calcAge();

// console.log(joseph);
// console.log(Person.prototype.isPrototypeOf(joseph));

// //set properties on prototype

// Person.prototype.species = 'Homo sapiens';
// console.log(joseph.species);
// console.log(joseph.hasOwnProperty('firstName'));
// console.log(joseph.__proto__.__proto__);
// console.log(joseph.__proto__.constructor );
// //Homo sapiens

// //select the butto and return element and then add event listener
// document.querySelector('.check').addEventListener('click',function (){
//     const guess = Number(document.querySelector('.guess').value);
//     console.log(guess , typeof guess);

//     if(!guess){
//      document.querySelector('.message').textContent = ' ⚠️ No Number';
//     }

// })

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎊 Correct Number';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 16;

// console.log(document.querySelector('.guess').value);

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
