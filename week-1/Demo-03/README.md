# Lab 03

## Instructions

Continue to build off of your lab 02 by adding additonal functionality to your About Me Guessing Game. Work in the same repository as you did for Lab 2, and modify your README.md file to describe your project with the new features you are adding.

1. As a user, I would like to view a series of data related to the site owners interest so that the I can quickly view more information about them.
   [X] - Create a "Top Ten" at the bottom of your HTML page as an ordered list in HTML. Some ideas that you can include could be top ten movies, top ten favorite places, or top ten places to visit. You may choose to do whatever top ten list that you wish.
   [X]- Convert your work experience and education summary into an unordered list using HTML

1. As a user, I would like to be guided to an answer through a series of feedback responses so that I can learn more about the site owner.
   [X] - Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
   [X] - Indicates through an alert if the guess is "too high" or "too low".
   [X] - It should give the user exactly four opportunities to get the correct answer.
   [X] - After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.

1. As a user, I would like to guess the answer to a question that could have many possibilities so that I can have fun with with a guessing game.
   [X] - Add a 7th question that has multiple possible correct answers that are stored in an array.
   [X] - Give the user 6 attempts to guess the correct answer.
   [X] - The guesses will end once the user guesses a correct answer or they run out of attempts.
   [X] - Display all the possible correct answers to the user.
   [X] - Consider using a loop of some sort for this question.

1. As a user, I would like to know my final score so that I can know how well I did.
   [X] - Keep track of the total number of correct answers. At the end tell them how many they got correct out of the 7 questions asked.

[X] In addition to the user stories stated above, continue to use console.logs throughout the code to track the questions that are being asked to the user, and add addtional CSS to style your HTML page.  


Stay within scope of what was taught so far in class. Do not write functions within your application. Avoid the use of "helper" methods such as `.includes()` and [X]`.join()`. Work with the instructional staff directly if you have questions about this requirement. 

### Stretch Goals

After completing all of the requirements listed above, you may optionally challenge yourself further by implementing some or all of the following into your application.

- Attempt to make your code more DRY by putting all of the questions, answers, and responses to the first five yes/no questions into arrays (or even one huge multidimensional array), and modifying the game logic such that a 'for' loop will control the flow from question to question.
[X] - Make the number-guessing question use a random number as its correct answer.
