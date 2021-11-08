'use strict';
console.log('app.js file is connected to our index.html');



let userName = prompt('Hello, what is your name?');
let userNameToUpperCase = userName.toUpperCase();
console.log('userName', userNameToUpperCase);

alert('Hello, ' + userName + ' here is your name upper case. ' + userNameToUpperCase);
alert('Here are five questions to get to know me better..... Answer y or n, Ready Go!');

function runQuestionaire(){
  questionOne();
  questionTwo();
  questionThree();
  questionFour();
  questionFive();
  questionSix();
  questionSeven();
}

function questionOne(){
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
}
function questionTwo(){
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
}
function questionThree(){
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
}
function questionFour(){
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
}
function questionFive(){
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
}

function questionSix(){
  //Question Six Guessing game.
  //https://www.w3schools.com/js/js_random.asp
  let randomNumber = Math.floor(Math.random() * 10);
  // let randomNumber = 5;
  console.log('rando number', randomNumber);
  let userGuessCount = 0;
  // let userGuess = parseInt(prompt('Guess a number between 1 and 10.'));
  // console.log(typeof(userGuess));
  while(userGuessCount < 4){
    userGuessCount = userGuessCount + 1;
    // console.log('while loop');
    // console.log('in the while and count up: ', userGuessCount);
    let userGuess = parseInt(prompt('Guess a number between 1 and 10.'));
    if(userGuess > randomNumber){
      alert('Your guess is too high. Try again.');
      continue;
    } else if(userGuess < randomNumber){
      alert('Your guess is too low. Try again.');
      continue;
    } else if (userGuess === randomNumber){
      alert('Wow you guessed it thats great!');
      break;
    }
  }
  alert('You guessed ' + userGuessCount + ' times out of 4, nice work.');
  alert('The correct answer was ' + randomNumber);
}

function questionSeven(){
  //Question 7
  let answerArray = ['Pizza','Granola', 'Coffee', 'Tortilla Chips', 'Cashews', 'Gala Apple', 'Honey'];
  // console.log('Here is the Array ', answerArray);
  let attempts = 0;
  let turnsTaken = 0;
  let correctAnswers = 0;
  let userMatch = false;
  while(attempts < 6){
  // console.log('in the while');
  // console.log('attempts', attempts);
    let userAnswer = prompt('Can you guess some of the foods in my pantry?');
    // console.log('user Answer',userAnswer);
    // console.log('These are attempts: ', attempts);
    for(let x = 0; x <= answerArray.length; x++){
      if(userAnswer === answerArray[x]){
        alert('You have correctly identified a food item in my pantry, well done.');
        correctAnswers += 1;
        userMatch = true;
        attempts = 6;
        turnsTaken++;
        break;
      }
    }
    if(userMatch === false){
      alert('That is not a food in my house.');
      turnsTaken++;
    }
    // console.log('are we here?', userAnswer);
    if(attempts < 5){
      alert(userAnswer + ' was your answer lets try a one more time.');
    }
    // https://stackoverflow.com/questions/6682951/why-is-looping-through-an-array-so-much-faster-than-javascripts-native-indexof
    // console.log(answerArray.indexOf(userAnswer) >= 0); returns true if in the array
    //   if(answerArray.indexOf(userAnswer) >= 0){
    //     alert('You have correctly identified a food item in my pantry, well done.');
    //     correctAnswers += 1;
    //     attempts++;
    //     console.log('adding the correct answer.',correctAnswers);
    //   } else {
    //     alert('You guessed inncorrectly. ' + userAnswer + ' is not in my Pantry.');
    //     attempts++;
    //   }
    //   alert('You have attempted ' + attempts + ' times out of 6 chances.');
    attempts++;
  }
  // console.log('answers after for loop', answers);
  alert('Your guessed ' + correctAnswers + ' out of 7 items in only ' + turnsTaken + ' turns.');
  alert('Here is the list of foods in my Pantry. The foods are ' + answerArray.join(','));
  alert('Thanks for playing the game of about me.' + userName);
}




runQuestionaire();


