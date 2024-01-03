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

const age = 15;
const isOldEnough= age >= 18;

if (isOldEnough) {
    console.log('Joseph is old enough to drive 🚗');
}else{
    const yearsLeft= 18 - age;
    console.log(`Joseph is too young ,wait another ${yearsLeft} years to drive`);
}