'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
//Functions
//default parameters

// BANKIST APP

// Data
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// // Elements
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

// const displayMovements = function (movements, sort = false) {
//   const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

//   movs.forEach(function (mov, i) {
//     const type = mov > 0 ? 'deposit' : 'withdrawal';
//     // template literals
//     const html = ` <div class="movements__row">
//           <div class="movements__type movements__type--${type}">${
//       i + 1
//     } ${type}</div>
//           <div class="movements__value">${mov}</div>
//         </div>`;

//     containerMovements.insertAdjacentHTML('afterbegin', html);
//   });
// };

// const calcDisplayBalance = acc => {
//   acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);

//   labelBalance.textContent = `${acc.balance} CFA`;
// };

// const createUsernames = function (accs) {
//   accs.forEach(function (acc) {
//     acc.username = acc.owner
//       .toLowerCase()
//       .split(' ')
//       .map(name => name[0])
//       .join('');
//   });
// };

// const calcDisplaySummary = function (acc) {
//   const incomes = acc.movements
//     .filter(mov => mov > 0)
//     .reduce((acc, mov) => acc + mov, 0);
//   labelSumIn.textContent = `${incomes}€`;

//   const out = acc.movements
//     .filter(mov => mov < 0)
//     .reduce((acc, mov) => acc + mov, 0);
//   labelSumOut.textContent = `${Math.abs(out)}€`;

//   const interest = acc.movements
//     .filter(mov => mov > 0)
//     .map(deposit => (deposit * acc.interestRate) / 100)
//     .filter((int, i, arr) => {
//       // console.log(arr);
//       return int >= 1;
//     })
//     .reduce((acc, int) => acc + int, 0);
//   labelSumInterest.textContent = `${interest}€`;
// };

// createUsernames(accounts);

// const updateUI = function (acc) {
//   //display movements
//   displayMovements(acc.movements);

//   //display balance
//   calcDisplayBalance(acc);

//   //display summary
//   calcDisplaySummary(acc);
// };

// //Event handler
// let currentAcount;
// btnLogin.addEventListener('click', function (e) {
//   e.preventDefault();
//   currentAcount = accounts.find(
//     acc => acc.username === inputLoginUsername.value
//   );
//   console.log(currentAcount);

//   if (currentAcount?.pin === Number(inputLoginPin.value)) {
//     labelWelcome.textContent = `Welcome to ${
//       currentAcount.owner.split(' ')[0]
//     }`;
//   }
//   containerApp.style.opacity = 100;

//   //clear input fields
//   inputLoginUsername.value = inputLoginPin.value = '';
//   //make the field lose it focus
//   inputLoginPin.blur();

//   //display movements
//   displayMovements(currentAcount.movements);

//   //display balance
//   calcDisplayBalance(currentAcount);

//   //display summary
//   calcDisplaySummary(currentAcount);
// });

// btnTransfer.addEventListener('click', function (e) {
//   e.preventDefault();
//   const amount = Number(inputTransferAmount.value);
//   const receiverAcc = accounts.find(
//     acc => acc.username === inputTransferTo.value
//   );

//   inputTransferAmount.value = inputTransferTo.value = '';
//   if (
//     amount > 0 &&
//     receiverAcc &&
//     currentAcount.balance >= amount &&
//     receiverAcc.username !== currentAcount.username
//   ) {
//     currentAcount.movements.push(-amount);
//     receiverAcc.movements.push(amount);

//     //update UI
//     updateUI(currentAcount);
//   }
// });

// btnLoan.addEventListener('click', function (e) {
//   e.preventDefault();
//   const amount = Number(inputLoanAmount.value);
//   if (amount > 0 && currentAcount.movements.some(mov => mov >= amount * 0.1)) {
//     //add movement
//     currentAcount.movements.push(amount);
//     //update UI
//     updateUI(currentAcount);
//     inputLoanAmount.value = inputLoanAmount.value = '';
//   }
// });

// btnClose.addEventListener('click', function (e) {
//   e.preventDefault();

//   if (
//     inputCloseUsername.value === currentAcount.username &&
//     Number(inputClosePin.value) === currentAcount.pin
//   ) {
//     let index = accounts.findIndex(
//       acc => acc.username === currentAcount.username
//     );

//     //delete account
//     accounts.splice(index, 1);

//     //hide UI
//     containerApp.style.opacity = 0;
//   }

//   inputCloseUsername.value = inputClosePin.value = '';
// });

// let sorted = false;

// btnSort.addEventListener('click', function (e) {
//   e.preventDefault();
//   displayMovements(currentAcount.movements, !sorted);
//   sorted = !sorted;
// });

// console.log(accounts);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const owners = ['Jonas','Zach','Adam','Martha']
// console.log(owners.sort());
// console.log(movements);
//sort array in ascending order(from small to large numbers)
//return < 0 A will come before B(keep order)
//return > 0 B will come before A(switch order)

//ascending order
// console.log(movements.sort((a,b)=>{
// if(a>b){
//   return 1
// }
// if(b>a){
//   return -1
// }
// }));
// console.log(movements.sort((a,b)=>a-b));

// //descending order
// console.log(movements.sort((a,b)=>b-a));

// const x = new Array(7);
// x.fill(1,3,5);
// console.log(x);

//Array.from
// const y =Array.from({length:7},()=>1 )
// console.log(y);

// // _ is a throw a way value
// const z = Array.from({ length: 7 }, (_,i) => i+1);
// console.log(z);
// const greet = function(greeting){
//     return function(name){
//         console.log(` ${greeting} ${name}`)
//     }
// }
//
// const greetHey = greet('Hey')
// greetHey('Joseph')
// greet('Good evening')('James')

const camairco = {
  airline: 'Camairco',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked seat on ${this.airline} flight ${this.iataCode} ${flightNum} `
    );
    this.bookings.push({
      flight: `${this.iataCode} ${flightNum}`,
      name,
    });
  },
};

camairco.book(234, 'Joseph');

const turkishairways = {
  airline: 'TurkishAirways',
  iataCode: 'TA',
  bookings: [],
};

const book = camairco.book;
book.call(turkishairways, 23, 'Serena Williams');
console.log(turkishairways);

const bookTA = book.bind(turkishairways);
bookTA(23454, 'Steven Jones');

const bookTA23 = book.bind(turkishairways, 23);
bookTA23('Matha Cooper');
