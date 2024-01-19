'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

document.querySelector('.number').textContent = secretNumber;

const dispplayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.guess').value = '';
  score = 20;
  document.querySelector('.score').textContent = score;
  dispplayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});

//select the butto and return element and then add event listener
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);


  //when there is no input
  if (!guess) {
    dispplayMessage('⚠️ No Number');

    //when player wins
  } else if (guess === secretNumber) {
    dispplayMessage('🎉 Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess != secretNumber) {
    if (score > 1) {
      dispplayMessage(guess > secretNumber ? 'Too high !⬆️' : 'Too low !📉');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      dispplayMessage('🔥 You lost the game !');
    
      document.querySelector('.score').textContent = 0;
    }
  }
});

// class Car {
//   constructor(model, speed) {
//     this.model = model;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.model} is going at ${this.speed}km/h`);
//   }
//   break() {
//     this.speed -= 10;
//     console.log(`${this.model} is going at ${this.speed}km/h`);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// class EVCar extends Car {
//   constructor(model, speed, charge) {
//     super(model, speed);
//     this.charge = charge;
//   }

//   chargeBattery(chargeTo) {
//     this.charge = chargeTo;
//   }

//   accelerate() {
//     this.speed += 10;
//   }
// }

// const ford = new Car('Ford',120);
// console.log(ford.speedUS);
// ford.speed = 50;
// ford.accelerate();
// ford.break();

// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this._pin = pin;
//     //protected property
//     this._movements = [];
//     this.locale = navigator.language;
//     console.log(`Thanks for opening an account: ${this.owner}`);
//   }

//   //public interface
//   getMovements() {
//     return this._movements;
//   }

//   getPIN() {
//     return this._pin;
//   }

//   //public interface
//   deposit(val) {
//     this._movements.push(val);
//     return this;
//   }

//   withdraw(val) {
//     this.deposit(-val);
//     return this;
//   }

//   _approveLoan(val) {
//     return true;
//   }

//   requestLoan(val) {
//     if (this.approveLoan(val)) {
//       this.deposit(val);
//       console.log(`loan approved of ${this.val} cfa`);
//       return this;
//     }
//   }
// }

// const acc1 = new Account('Joseph', 'CFA', 1111);
// acc1.deposit(300).deposit(500).withdraw(50).requestLoan(300);
// console.log(acc1.getMovements());
// // acc1.deposit(250);
// // acc1.withdraw(140);
// // acc1._approveLoan(1323);
// // acc1.requestLoan(1000);

// // console.log(acc1.getMovements());

// // console.log(acc1);

// console.log(acc1._pin);

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
