'use strict';

//for loop


const joseph = ['Fomonyuytar','Joseph',2030,'programmer',['peter','James','John'],true]

let types =[];



// for (let i = 0; i<joseph.length ;i++){
//     console.log(joseph[i] ,typeof joseph[i]);

//     //filling types of arrays
//     // types[i]= typeof joseph[i];

//     types.push(typeof joseph[i]);
// }


// console.log(types);


const years = [1991,2007,1945,2003];

const birthYear=[];

for (let i = 0; i<years.length ;i++){
    birthYear.push(2024-years[i]);
}


console.log(birthYear);

//continue and break 
// console.log('--- ONLY STRINGS ---');      
// for (let i = 0; i < joseph.length; i++) {
//     if(typeof joseph[i] !== 'string') continue;
//   types.push(typeof joseph[i]);

// }


//continue and break 
console.log('--- BREAK WITH NUMBER ---');      
for (let i = 0; i < joseph.length; i++) {
    if(typeof joseph[i] === 'number') break;
  types.push(typeof joseph[i]);

}


console.log(types);



//objects

// const joseph ={
//     firstName: 'Joseph',
//     lastName:"josad",
//     birthYear:2000,
//     job:'teacher',
//     friends:['James','Peter','John'],
//     hasDriversLicense:true,
//     calcAge: function (){
//         this.age = 2024 - this.birthYear
//         return this.age;
      
//     }
    // calcAge: function (){
    //     // console.log(this);
    //     return 2024 - this.birthYear;
      
    // }
// };


// console.log(joseph.calcAge());
// console.log(joseph.age);

// console.log(joseph.age);
// console.log(joseph['calcAge'](2000));

// console.log(joseph);
// console.log(joseph.lastName);
// console.log(joseph['firstName']);

// arrays
// const friends = ['Micheal', 'Steven', 'Joseph'];

// const years = new Array(1991 ,1432, 2030 ,2022);
// console.log(friends);
// console.log(years);

//arrow functions
// const calcAge3 = birthYear => 2024 - birthYear;
// const age3 = calcAge3(2000);
// console.log(age3);


 













// function declaration are use when we used the function keyword
// function calcAge1(birthYear){
//     return 2024 - birthYear;

// }

// const age1 = calcAge1(1991);

// console.log(age1);


// const calcAge2 = function(birthYear){
//     return 2024 - birthYear;
// }

// const age2= calcAge2(1991);
// console.log(age2);




















// function logger (){
//     console.log('My name is Joseph');
// }


// //calling, running or invoking function
// logger();


// function fruitProcessor (apples , oranges){
//     console.log(apples , oranges);
// const juice = `Juice with ${apples} apples and ${oranges} oranges`;
// return juice;
     
// }

// const appleJuice =fruitProcessor(5,2);
// console.log(appleJuice);























// strict mode
// let hasDriversLicense = false;
// const passTest = true;
// if(passTest){
//     hasDriversLicense = true;
// }


// if (hasDriversLicense) console.log('I can drive :D');
 















// console.log('Jonas');

// let firstname = 'Fomonyuytar';
// console.log(typeof firstname)

// let age = 30;
// age =12;
// lastName= 'Joseph'

// let markWeight = 78;
// let johnWeight = 92;

// let markHeight = 1.69;
// let johnHeight = 1.95;

// //calculate the BMI
// let markBMI = markWeight / (markHeight ** 2);
// let johnBMI = johnWeight / (johnHeight ** 2);

// console.log(markBMI,johnBMI);
// //check if makrj bmi is higher than John
// console.log(markBMI > johnBMI);

//template literal
// let firstname = 'Fomonyuytar';
// let job = 'engineer';
// const birthyear = 1990;
// const year = 2037;

// const joseph = `I'm ${firstname}`

// console.log(joseph);

// const age = 15;
// const isOldEnough= age >= 18;

// if (isOldEnough) {
//     console.log('Joseph is old enough to drive 🚗');
// }else{
//     const yearsLeft= 18 - age;
//     console.log(`Joseph is too young ,wait another ${yearsLeft} years to drive`);
// }

// const birthYear = 1991;

//second coding challenge
// let markWeight = 78;
// let johnWeight = 92;

// let markHeight = 1.69;
// let johnHeight = 1.95;

// //calculate the BMI
// let markBMI = markWeight / (markHeight ** 2);
// let johnBMI = johnWeight / (johnHeight ** 2);

// console.log(markBMI,johnBMI);
// //check if makrj bmi is higher than John
// let isMarkBMIGreater = markBMI > johnBMI;
// if(isMarkBMIGreater){
//     console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
// }else{
//       console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`);
// }

//Type conversion
// let inputYear = '1991';
// console.log(Number(inputYear));
// console.log(inputYear + 20);

// let age =18;
// if(age === 18) console.log('You just became an adult');

// let favorite = prompt('What is your favorite number?');
// console.log(favorite);
// console.log(typeof favorite);
//switch case
// const day = 'monday';

// switch(day){
//     case 'monday':
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Do some sports');
//     default:
//         console.log('Not a valid day!');
// }

//ternary operator
// let age = 23;
// age >=18 ? console.log('I am an adult and can drive🍷'):
// console.log('I am a child and I cannot drive');

// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);

// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
