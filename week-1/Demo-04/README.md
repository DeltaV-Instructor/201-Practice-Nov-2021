## Instructions


### 1. How To Get Code Ready For Work

- [X] Start working on the code! hee hee just kidding..

### 2. Extend and Refine


- [X] Move the logic for all questions into functions: Today we learned about functions, and now we'll move the logic for the individual questions into separate functions, and call those functions to run the game.

- [X] In its most basic sense, this is pretty simple and straightforward: 'wrap' the logic and variables for a given question with `function someFuncNameYouChoose() {` at the beginning, and add a closing curly brace `}` at the end. To make the function execute, just call it afterwards: `someFuncNameYouChoose();` After completing this step the game should behave exactly as it did before. **a-c-p**


### 3. Push to GitHub; Make a Pull Request

- [X] Once everything is finished, and the Driver has done the last edits and pushed them to GitHub, it's time to send the edited code to the owner (who has been in the Navigator role the whole time, of course). We do this with a GitHub feature called a ***Pull Request***, which we generally refer to as a **PR**.

- [X] From the Driver's repo that is a fork of the Navigator's repo, hit the green button that says 'Create pull request'.

- [X] Follow the remaining steps as described onscreen and as shown here: <https://help.GitHub.com/articles/using-pull-requests>. 

- [X] The owner of the code (the Navigator) then goes to their GitHub repo for the project and accepts the pull request. After that, in terminal on their laptop, while in the game directory, enter the command 'git pull origin main' to retrieve the modified code from GitHub.


### 4. Pair Programming Basics

* [X] In pair programming, there are two developers working on a single body of code on a single computer.


### Stretch Goals

1. Work from collections of like data: [X] Create 3 arrays, one for each of: your questions, the correct answers, and the two possible responses. (The same applies if you've added in any other pieces to the questions besides the most basic structure.) Replace that content in the functions by accessing the arrays.

1. Make it DRY: [X] Reduce the yes/no questions from five functions to one function, and then use a 'for' loop to iterate through the arrays and call the function for each question.  

1. Code review: Take time to explore each other's CSS and talk about how it is organized and what it is doing. Make suggestions for how it can be improved. Integrate your partner's suggestions to improve your own styling.

1. Improve accessibility: Collaborate on achieving better scores on accessibility audits. Include a screenshot of your new audit score in your README.md file.
