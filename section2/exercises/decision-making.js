/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 1;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");
} else if (bearChoice === 2) {
  console.log("You tell the bear the " + bearClothing + " is too small and it starts to cry!");
} else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become it's best friend!");
}

/*
Questions

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.
You have been prompted to pick between doors 1 and 2. this if statement declares that if you pick
door 1, the program will use the value 'hat' for the bear's clothing. if the user picks any
other number, the program will use the string 'scarf' for the bear's clothing.
2. What variable has a new value assigned to it after the first if statement executes?
bearChoice - defined in line 10 originally, bearChoice is set to 1 by default, and would be
redefined by the user's input with the rules specified in lines 27-35
3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
"scarf" - as the else covers all numbers that are not 1.
4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
This is an if statement that takes user's input of choice of options (1,2,3) and outputs a different solution
based on the variable state. if the bearChoice is set to 1, the console returns
"You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!"
if you change bearChoice to 2, it returns "You tell the bear the " + bearClothing + " is too small and it starts to cry!"
if you change bearChoice to 3, it returns "You run as fast as you can into the next room. It's full of snakes!"
and if you change bearChoice to anything that is not 1, 2, or 3, it will return "You stay with the bear and become it's best friend!"

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
"You run as fast as you can into the next room. It's full of snakes!"
6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
"You tell the bear the hat is too small and it starts to cry!"
7. What is your favorite ending?
I prefer the final else statement, staying with the bear and becoming best friends,
as I find it a good reminder to limit users inputs to guide their path better, but this still happens if everything goes wrong

*/
