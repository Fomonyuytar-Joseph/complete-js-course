'use strict';

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎊 Correct Number';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 16;

console.log(document.querySelector('.guess').value);


document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
