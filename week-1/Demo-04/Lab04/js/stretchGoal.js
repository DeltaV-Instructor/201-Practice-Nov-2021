'use strict';
console.log('stretchGoal.js file is connected to our index.html');

let userNameToUpperCase;

function startApp(){
  let userName = prompt('Hello, what is your name?');
  userNameToUpperCase = userName.toUpperCase();
  alert('Hello, ' + userNameToUpperCase);
  alert('Here are five questions to get to know me better..... Answer y or n, Ready Go!');
}
startApp();




let yourQuestions = ['Do I have two sons over 21 years old?, Please answer yes or no.', 'Do I have an Airbnb property?', 'Is Glass my preferred media for creating art?','Do I like Entity Framework enough to switch to PC?','Will I own a Coffee House that sells Pizza?','Guess a number between 1 and 10'];
let correctAnswers = [
  'Right: Yes, it is true, I have two Sons, 21 and over.', 
  'Right: Yes, it is true, I will have an Airbnb property in 2023. When I finish renovating my current abode.',
  'Right: Yes, it is true, I have been doing glass work since 2000.',
  'Right: Yes, maybe, I really like when things work, and .net stuff is pretty cool on PC.',
  'Right: Yes, maybe, for my last job, I would like to run a pizzeria... Cause Pizza.'
];
let incorrectAnswers = [
  'Wrong: No, I do have two Sons, 21 and over.',
  'Right: No, is also true, while it is set up online, the property is not active. Its in WIP',
  'Wrong: No, I do use glass as a media to form my art work.',
  'Wrong: No, unless, I was provided a work PC, then yes I would work on one.',
  'Wrong: No, unless, there were good coffee houses around.'
];
let twoResponses = ['Y','N','Your guess is too high. Try again.','Your guess is too low. Try again.','Wow you guessed it thats great!'];



// console.log('yourQuestions Array', yourQuestions);
// console.log('correctAnswers Array', correctAnswers);
// console.log('incorrect Answers', incorrectAnswers);
// console.log('twoResponses Array', twoResponses);



function runQuestionaire(){

  //run questions one through five
  for(let i = 0; i < yourQuestions.length - 1; i++){
    let userResponse = prompt(yourQuestions[i]).toUpperCase();
    console.log('user response',userResponse);
    // console.log('correct answer 3',correctAnswers[3]);
    if(userResponse === twoResponses[0]){
      console.log('we are here');
      alert(correctAnswers[i]);
    } else if(userResponse === twoResponses[1]){
      alert(incorrectAnswers[i]);
    } else {
      alert('Please respond with y or n.');
    }
  }

  //run question six
let randomNumber = 5;

// let randomNumber = Math.floor(Math.random() * 10);
let userGuessCount = 0;
while(userGuessCount < 4){
  userGuessCount++;
  let userGuess = parseInt(prompt(yourQuestions[5]));
  console.log('user guess', userGuess);
  if(userGuess > randomNumber){
    alert(twoResponses[2]);
  } else if(userGuess < randomNumber){
    alert(twoResponses[3]);
  } else if (userGuess === randomNumber){
    alert(twoResponses[4]);
  }
}

  //run question seven



}



runQuestionaire();
