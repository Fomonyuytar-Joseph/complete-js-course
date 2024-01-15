'use strict';


//select the butto and return element and then add event listener
document.querySelector('.check').addEventListener('click',function (){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess , typeof guess);


    if(!guess){
     document.querySelector('.message').textContent = ' ⚠️ No Number';   
    }

    
})



// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎊 Correct Number';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 16;

// console.log(document.querySelector('.guess').value);


// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
