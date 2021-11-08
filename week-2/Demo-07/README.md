# Lab 07


## Instructions

[X]1. Create a new branch for today's lab. Make sure it has all of your changes from lab 06 so that you can extend the functionality.

[X]1. Replace all of your object literals for the salmon cookie stand with a single constructor function that, when called with the 'new' keyword, it creates a new instance.

[X]1. Replace the lists of your data for each store and  build a single table of data instead. It should look similar to the following:

 [X]   Display each stores data in a table format similar to what is below. Break each column by the hour and  
 [X] complete each row with a "Daily Location Total".

|         | 6:00am | 7:00am | 8:00am | 9:00am | 10:00am | 11:00am | 12:00pm | 1:00pm | 2:00pm | 3:00pm | 4:00pm | 5:00pm | 6:00pm | 7:00pm | Daily Location Total |
| ------- | ------ | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | -------------------- |
| Seattle |        |        |        |        |         |         |         |        |        |        |        |        |        |        |
| Tokyo   |        |        |        |        |         |         |         |        |        |        |        |        |        |        |
| Dubai   |        |        |        |        |         |         |         |        |        |        |        |        |        |        |
| Paris   |        |        |        |        |         |         |         |        |        |        |        |        |        |        |
| Lima    |        |        |        |        |         |         |         |        |        |        |        |        |        |        |
| Totals  |        |        |        |        |         |         |         |        |        |        |        |        |        |        |

[X] 1. Each cookie stand location should have a separate render() method that creates and appends its row to the table
[X] 1. The header row and footer row are each created in their own stand-alone function
[X] > NOTE: Please use a header cell for both the header row ( containing store hours ), 
[X] and the footer row ( hourly and grand totals across all stores ).

### Stretch Goals

-[X]  Continue to work on design aspects of the public-facing page.
- Make a style guide, using [this one](http://everlast.com/style-guide) as a model.
- Create a second table that will help Pat manage staffing. Using the basic rubric that single Salmon Cookie Tosser can serve 20 customers per hour, and that each location should have a minimum of two Salmon Cookie Tossers on shift at all times, calculate how many Salmon Cookie Tossers are needed at each location each hour.
- Research into Pat's customer traffic has shown that the hours of 8am, 11am, and 3pm tend to have more customers than other hours, and that the hours with the least customers are 1pm and 6pm. Apply a control curve to the projected sales numbers to reflect those daily ebbs and flows. The following array represents the percentage of maximum traffic that occurs during each of the hours from 6am to 8pm, and can be used to scale the projected hourly customer traffic into more accurate values: