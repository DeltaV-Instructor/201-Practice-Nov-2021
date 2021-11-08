# Lab 09
## Instructions

[X]Today you will be adding a form to your existing cookie stand project so that you can add new locations to the table by simply inputting their information with the form.

[X]- Create a new HTML form to accept the information for a new cookie stand. Be sure to utulize the `<fieldset>` tag to help you style it.  

[X] - Upon submission of the HTML form, create an event handler that creates a new instance of a cookie stand that appends to the table upon form submission.

[X] - Use the constructor function as your guide to determine what input fields your form needs (hint: also consider what is passed in when creating instances!).

[X] - If not complete from lab 7, write a stand-alone function to generate a footer row which will display the total number of cookies sold per hour for all locations. When a new store is added using your form, the totals in the footer row should update to include these new sales numbers.

[X] - Anywhere you have repeated chunks of code, apply some DRY principles. Generally, once some chunk of code is appearing for a 3rd time or so, that's when you want to consider refactoring.

[X] - Validate your html through [HTML5 validation](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation).

[X] - Confirm that your code is following the single responsibility rule. Each function should only do one thing, with the capability to break it out further as needed.

## Stretch Goals

- Give your input form functionality to update the data for a location that is already in the table. This is going to require some additional pieces, such as:
  - Some kind of `if` statement to test whether the inputted cookie stand location name matches one that is already in the table (or other mechanism to indicate which location to update)
  - The new input numbers need to be run through the calculation methods as with the original creation of the instances
