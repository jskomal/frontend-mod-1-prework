/*
In the exercises below, write your own code where indicated
to achieve the desired result.

Two examples are already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line.
*/


//-------------------
// PART 1: Animals: Array Syntax
//-------------------

// EXAMPLE: write code below that will log an array of animals.
// Store the array in a variable.
var animals = ["Zebra", "Giraffe", "Elephant"];
console.log(animals);

// EXAMPLE: Write code below that will log "Zebra" from the animals array
// YOUR CODE HERE
console.log(animals[0]);

// YOU DO: Write code below that will log the number of elements in array of
// animals from above.
console.log(animals.length);

// YOU DO: Write code that will reassign the last item in the animals
// array to "Gorilla"
// animals[2] = 'Gorilla'; this is what I originally put but I see now that I should use pop to assign Elephant to a variable so that I can call it for the later question //
var longTrunk = animals.pop();
animals.push('Gorilla');

// YOU DO: Write code that will add a new animal (type of your choice) to position 3. (Do you mean index position 3 or the 3rd entry? I'm going to assume index position 3 and add a new animal)
animals.push('Lion');

// YOU DO: Write code that will log the String "Elephant" in the animals array
console.log(longTrunk);

//-------------------
// PART 2: Foods: Array Methods
//-------------------

// YOU DO: Declare a variable that will store an an array of at least 4 foods (strings)
var favoriteFoods = ['taco', 'pizza', 'steak', 'burger'];

// YOU DO: Write code below that will log the number of elements in the array of
// foods from above.
console.log(favoriteFoods.length);

// YOU DO: Write code below that uses a method to add "broccoli" to the foods array and
// log the changed array to verify "broccoli" has been added
favoriteFoods.push('broccoli');
console.log(favoriteFoods);

// YOU DO: Write code below that removes the last item of food from the foods array and
// log the changed array to verify that item has been removed
favoriteFoods.pop();
console.log(favoriteFoods);

// YOU DO: Write code to add 3 new foods to the array.
  // There are several ways to do this - choose whichever you'd like!
// Then, log the changed array to verify the new items have been added
favoriteFoods.unshift('hot dog', 'ice cream', 'doughnut');
console.log(favoriteFoods);
// YOU DO: Remove the food that is in index position 0.
favoriteFoods.shift();
console.log(favoriteFoods);
//-------------------
// PART 3: Where are Arrays used?
//-------------------

/*
Sometimes we need to hold on to multiple pieces of data, but have it grouped together in a list.
This is why programming languages have arrays!

One example of a web/mobile application that uses arrays is Instagram. Each user has a set of posts
associated with their account. Each post, is one of potentially many, that are grouped together in a list,
or, array.

The post itself likely has more complex data, but here's one way we can think about it:
*/

var posts = ["image at beach", "holiday party", "adorable puppy", "video of cute baby"];

// YOU DO: Think of a web application you commonly use. Where do you see LISTS utilized, where arrays
// may be storing data? Come up with 3 examples - they could be from different web applications or
// all from the same one.

// 1: Amazon cart - list of the items, prices and more
// 2: Amazon - list of items that match a search term ? (not 100% sure on this one)
// 3: Amazon - list of tax percentages per zip code


//-------------------
// Part 4: Don't let yourself forget everything from Section 2 of Pre-work
//-------------------

/*
YOU DO:
Using the variables defined below, write a program that will tell a user if they
will be able to call an Uber.

The user can call an uber if they have 15% battery remaining, or more. In this case, it doesn't matter
if the user has a charger at all, or what type.
They can call an uber if they have a charger and it is a car charger.

*/
var percentBatteryLeft = 12;
var hasCharger = true;
var chargerType = "car";

// Write your conditional here
// this variable checks that both having the charger is true and that the chargerType is car, and stores the correct boolean in the created variable, which in this case is true.
var hasCarCharger = hasCharger && chargerType === "car";
// create a function to check if you can call the Uber with the specified conditions
function callUberCheck(){
  // I know the instructions said to only check the battery status, but I felt it was good to stretch and take into account all of the factors presented.
  // Add the if statement to coorelate if the battery percentage is 15 or higher, or if they had their car charger on them
  if(percentBatteryLeft>=15 || hasCarCharger){
    // if true, you may call the Uber, log this to the console
  console.log('You can call an Uber!')}
  // if false, you may not call the Uber, log this to the console
  else {
    console.log('You cannot call an Uber!')
  };
};
//calls the function
callUberCheck();
// YOU DO - ANNOTATE: Above each line of your code for this if statement, create a comment.
// That comment should describe, in your own words, and as technically precise as possible,
// what the line of code below, does.

// MAKE 100% SURE that you have RUN the code in node in your command line, to ensure it works
// as you think it does🌟
