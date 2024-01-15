'use strict';


//select the butto and return element and then add event listener
document.querySelector('.check').addEventListener('click',function (){
    console.log(document.querySelector('.guess').value);
    document.querySelector('.message').textContent = '🎊 Correct Number!';
})



// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎊 Correct Number';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 16;

// console.log(document.querySelector('.guess').value);


// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
