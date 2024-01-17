'use strict';
//OOP
'use strict';



const Person =  function(firstName,birthYear){
    this.firstName = firstName;
    this.birthYear= birthYear;



}



const joseph= new Person('Joseph',2000 );
// console.log(joseph);


const mikelia = new Person('Mikelia',2004)
// console.log(mikelia instanceof Person);

console.log(Person.prototype);

//Protoypes
Person.prototype.calcAge=function(){
    console.log(2024 - this.birthYear);
}


joseph.calcAge();

console.log(joseph);
console.log(Person.prototype.isPrototypeOf(joseph));


//set properties on prototype

Person.prototype.species = 'Homo sapiens';
console.log(joseph.species);
console.log(joseph.hasOwnProperty('firstName'));
console.log(joseph.__proto__.__proto__);
console.log(joseph.__proto__.constructor );
//Homo sapiens


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
