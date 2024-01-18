'use strict';

class Account {
  constructor(owner,currency,pin){
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    //protected property
    this._movements=[];
    this.locale=navigator.language;
     console.log(`Thanks for opening an account: ${this.owner}`);
}


//public interface
getMovements(){
  return this._movements;
}


getPIN(){
  return this._pin;
}


//public interface 
deposit(val){
  this._movements.push(val)
}

withdraw(val){
  this.deposit(-val)
}

_approveLoan(val){
  return true;
}


requestLoan(val){
  if(this.approveLoan(val)){
    this.deposit(val);
    console.log(`loan approved of ${this.val} cfa`);
  }
}


}

const acc1 = new Account('Joseph','CFA',1111);
acc1.deposit(250);
acc1.withdraw(140);
acc1._approveLoan(1323);
acc1.requestLoan(1000);

console.log(acc1.getMovements());

console.log(acc1);

console.log(acc1._pin);



























// class Person {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   //methods will be added to .prototype property og the PersonCl class
//   calcAge() {
//     console.log(2024 - this.birthYear);
//   }

// }


// class Student extends Person{
//     constructor(firstName,birthYear,course){
//       //aLways needs to happen first the  call to parent class constructor then we can access the this keyword
//         super(firstName,birthYear);
//         this.course = course;
//     }

//     introduce(){
//       console.log(`My first name is ${this.firstName} and I study ${this.course}`);
//     }


//     calcAge(){
//       console.log(`I feel ${2037- this.birthYear} today`);
//     }
// }


// const max = new Student('Max',2013,'Physics');
// console.log(max);
// max.calcAge();
















// const Person =  function(firstName,birthYear){
//     this.firstName = firstName;
//     this.birthYear= birthYear;

// }


// Person.prototype.calcAge=function(){
//     console.log(2024 - this.birthYear);
// }


// const Student = function(firstName,birthYear,course){
//    Person.call(this,firstName,birthYear);
//    this.course = course;

// }


// Student.prototype=Object.create(Person.prototype);


// Student.prototype.introduce=function(){
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// }


// const joe = new Student('Joe',2003,'Math');


// console.log(joe);
// joe.calcAge();
// joe.introduce();




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





// class PersonCL {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   //methods will be added to .prototype property og the PersonCl class
//   calcAge() {
//     console.log(2024 - this.birthYear);
//   }

//   greeting() {
//      console.log(`Hey ${this.firstName}`);
//   }

//   get age(){
//     return 2024-this.birthYear;
//   }
// }


// const christy = new PersonCL('Christy', 2004);


// console.log(christy.age);
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
