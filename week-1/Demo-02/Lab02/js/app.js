'use strict';
console.log('app.js file is connected to our index.html');



let userName = prompt('Hello, what is your name?');
let userNameToUpperCase = userName.toUpperCase();
console.log('userName', userNameToUpperCase);

alert('Hello, ' + userName + ' here is your name upper case. ' + userNameToUpperCase);
alert('Here are five questions to get to know me better..... Answer y or n, Ready Go!');
//5 yes or no questions.
let questionOne = prompt('Do I have two sons over 21 years old?, Please answer yes or no');
let questionOneToUpperCase = questionOne.toUpperCase();
console.log('Question One', questionOneToUpperCase);

if(questionOneToUpperCase === 'Y' || questionOneToUpperCase === 'YES'){
  alert('Right: Yes, it is true, I have two Sons, 21 and over.');
} else if(questionOneToUpperCase === 'N' || questionOneToUpperCase === 'NO'){
  alert('Wrong: No, I do have two Sons, 21 and over.');
} else {
  alert('Something blew up, Please enter yes or no.');
}

//Question Two
let questionTwo = prompt('Do I have an Airbnb property?');
let questionTwoToUpperCase = questionTwo.toUpperCase();
console.log('Question Two', questionTwoToUpperCase);

if(questionTwoToUpperCase === 'Y' || questionTwoToUpperCase === 'YES'){
  alert('Right: Yes, it is true, I will have an Airbnb property in 2023. When I finish renovating my current abode.');
} else if(questionTwoToUpperCase === 'N' || questionTwoToUpperCase === 'NO'){
  alert('Right: No, is also true, while it is set up online, the property is not active. Its in WIP');
} else {
  alert('Something blew up, Please enter yes or no.');
}

//Question Three
let questionThree = prompt('Is Glass my preferred media for creating art?');
let questionThreeToUpperCase = questionThree.toUpperCase();
console.log('Question Three', questionThreeToUpperCase);

if(questionThreeToUpperCase === 'Y' || questionThreeToUpperCase === 'YES'){
  alert('Right: Yes, it is true, I have been doing glass work since 2000.');
} else if(questionThreeToUpperCase === 'N' || questionThreeToUpperCase === 'NO'){
  alert('Wrong: No, I do use glass as a media to form my art work.');
} else {
  alert('Something blew up, Please enter yes or no.');
}

//Question Four
let questionFour = prompt('Do I like Entity Framework enough to switch to PC?');
let questionFourToUpperCase = questionFour.toUpperCase();
console.log('Question Four', questionFourToUpperCase);

if(questionFourToUpperCase === 'Y' || questionFourToUpperCase === 'YES'){
  alert('Right: Yes, maybe, I really like when things work, and .net stuff is pretty cool on PC.');
} else if(questionFourToUpperCase === 'N' || questionFourToUpperCase === 'NO'){
  alert('Wrong: No, unless, I was provided a work PC, then yes I would work on one.');
} else {
  alert('Something blew up, Please enter yes or no.');
}

//Question Five
let questionFive = prompt('Will I own a Coffee House that sells Pizza?');
let questionFiveToUpperCase = questionFive.toUpperCase();
console.log('Question Five', questionFiveToUpperCase);

if(questionFiveToUpperCase === 'Y' || questionFiveToUpperCase === 'YES'){
  alert('Right: Yes, maybe, for my last job, I would like to run a pizzeria... Cause Pizza.');
} else if(questionFiveToUpperCase === 'N' || questionFiveToUpperCase === 'NO'){
  alert('Wrong: No, unless, there were good coffee houses around.');
} else {
  alert('Something blew up, Please enter yes or no.');
}


alert('Thanks for playing the game of about me.' + userName);
