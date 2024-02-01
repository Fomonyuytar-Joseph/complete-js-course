'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    // template literals
    const html = ` <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

const calcDisplayBalance = movements => {
  const balance = movements.reduce((acc, cur) => acc + cur, 0);

  labelBalance.textContent = `${balance} CFA`;
};

calcDisplayBalance(account1.movements)

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toUpperCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

console.log(createUsernames(accounts));
// console.log(accounts);


/////////////////////////////////////////////////
/////////////////////////////////////////////////
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const max = movements.reduce((acc, mov, i, arr) => {
if(acc > mov){
  return acc;
}else {
  return mov
}
}, movements[0]);


console.log(max);

var person = {
  name: 'Nicholas',
  sayName: function () {
    console.log(this.name);
  },
}; 

person.sayName(); 



// const deposits = movements.filter(mov => mov > 0);

// console.log(deposits);

// const withdrawals = movements.filter(mov => mov < 0);

// console.log(withdrawals);
// const euroToUsd = 1.1;
// const movementsUSD = movements.map(mov => {
//   return mov * euroToUsd;
// });

// console.log(movements);
// console.log(movementsUSD);

//coding challenge

// const checkDogs= (firstArr,secondArr)=>{
//   let firstDogArr = firstArr.slice(1,3)
//   let secondDogArr = secondArr.slice(1,3)

//    firstDogArr.forEach((dog, index)=>{
//       let  age= dog >=3 ? 'is an adult':'is still a puppy'
//       let message = `The dog number ${index+1} ${age} and is ${dog} years old`
//        console.log(message);
//    })
//    secondDogArr.forEach((dog,index)=>{
//            let age = dog >= 3 ? 'is an adult' : 'is still a puppy';
//            let message = `The dog number ${
//              index + 1
//            } ${age} and is ${dog} years old`;
//            console.log(message);
//    })

//   // console.log(firstDogArr,secondDogArr);
//   // console.log(firstArr,secondArr);
// }

// checkDogs([3,5,2,12,7],[4,1,15,8,3])
