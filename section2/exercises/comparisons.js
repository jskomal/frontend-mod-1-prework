/*
In the exercises below, write your own code where indicated
to achieve the desired result.

One example is already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line. Look back
at the directions from Section 1 if you need a refresher on how to do that.
*/

//-------------------
// PART 1: Comparing variables
//-------------------

var numberTeachers = 4;
var numberStudents = 20;
var stringTeachers = "4";
var numberDogs = 0;

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
// this should log: true
console.log('Is numberTeachers less than numberStudents?', numberTeachers < numberStudents);

// YOU DO: log the result of the comparison: is numberTeachers equal to stringTeachers? (use the == operator)
// this should log: true
console.log('Is numberTeachers equal to stringTeachers?', numberTeachers == stringTeachers);
/*
Note: this is an example of type coercion. Although stringTeachers is a string and numberStudents is an integer,
this statement still evaluated to true. JavaScript forces the stringTeachers into an integer to
perform this evaluation
*/

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers? (use the === operator)
// this should log: false
console.log('Is numberTeachers stricly equal to stringTeachers?', numberTeachers === stringTeachers);
/*
Note: the strictly equal to operator compares the value of the variable in addition to the type of the variable.
since the numberTeachers is an integer value and the stringTeachers is a string value, although they are both equal to 4,
the comparison still evaluates to false.

In JavaScript, it is a best practice to use the strict comparison. It is said that, anytime a developer
thinks they _need_ to use the `==` loose comparison, they are doing something they shouldn't be. To help
you develop good habits that follow best practice, from now on, use the strict comparison.
*/

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
// this should log: true
console.log(numberTeachers !== numberStudents);
// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
// this should log: true
console.log(numberStudents >= 20);
// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
// this should log: false
console.log(numberStudents >= 21);
// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
// this should log: true
console.log(numberStudents <= 20);
// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
// this should log: true
console.log(numberStudents <= 21);

//-------------------
// PART 2: Articulating what you are doing
//-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
//YOU DO: Explain.
// Log to the console a true or false claim that 4 is less than 9. In this case it is true
var books = 3;
console.log(4 < books);
// YOU DO: Explain.
// sic. console.logs needs to be changed to console.log, I have done this to help the code run better for my error checking.
// variable books has been set to the value of 3, then the interpreter is asked to log to the console a boolean explaining
// if  the number 4 is less than the value of books, which is 3. This should return false
var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain.
// variables friends and siblings are set to 6 and 2 respectively
// we then ask if the values for friends is larger than the value for siblings, which it is, and would return true
var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: Explain.
// we ask if 9 does not equal 8, which it does not, so we return true

//-------------------
// PART 3: Logical Operators
//-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
console.log(lovesToPlay && lovesTreats);
//true
// Determine if the dog loves to play and loves the dog park
console.log(lovesToPlay && lovesDogPark);
//false
// Determine if the dog loves to play or loves the dog park
console.log(lovesToPlay || lovesDogPark);
//false
// Determine if the dog loves to play and is a puppy
var puppyStatus = age <= 3;
console.log(lovesToPlay && puppyStatus);
// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER:
// true, this is because I setup a separate variable checking if the age of the puppy
// was less than or equal to 3, which is true as age is 1.
// Then the logical operator checked to see if both operands were true, which they were, so it returned true
// Had I not created a separate variable and instead run console.log(lovesToPlay && age);
// it would have returned the value "1", as the logical operator selects the second option if the first option cannot be coerced into false.
//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
// as you would expect?
