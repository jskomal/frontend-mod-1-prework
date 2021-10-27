/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog
class Dog {
}
var labrador = new Dog();
var goldenDoodle = new Dog();
console.log(labrador, goldenDoodle);
// Prompt 2: Snack
class Snack {
}
var cheeto = new Snack();
var gardhetto = new Snack();
console.log(cheeto, gardhetto);
// Prompt 3: Shirt
class Shirt {
}
var tshirt = new Shirt();
var polo = new Shirt();
console.log(tshirt, polo);
//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog
class Pup {
  constructor() {
    this.size = 'large';
    this.birthday = "07/11/15"
    this.breed = "Labrador Retriver"
  }
}
var labrador = new Pup();
console.log(labrador);
// Prompt 2: Snack
class SaltySnack {
  constructor() {
    this.isGlutenFree = false;
    this.caloriesPerServing = 150;
    this.containsPretzels = false;
  }
};
var wheatThins = new SaltySnack();
console.log(wheatThins);
// Prompt 3: Shirt
class ButtonDown {
  constructor() {
    this.size = 'XL';
    this.color = 'navy';
    this.fit = 'slim';
  }
};
var oxfordShirt = new ButtonDown();
console.log(oxfordShirt);
//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog
class Puppy {
  constructor(size, birthday, breed) {
    this.size = size;
    this.birthday = birthday;
    this.breed = breed;
  }
}
var pomeranian = new Puppy('small', '1/1/2020', 'Pomeranian');
console.log(pomeranian);
// Prompt 2: Snack
class SweetSnack {
  constructor(sugarAmt, isSour, avgCost) {
  this.sugarContentInGrams = sugarAmt;
  this.isSour = isSour;
  this.averageCost = avgCost;
  }
};
var spree = new SweetSnack(12, true, 0.99);
console.log(spree);
// Prompt 3: Shirt
class TShirt {
  constructor(size, isBigAndTall, primaryFabric) {
    this.size = size;
    this.isBigAndTall = isBigAndTall;
    this.primaryFabric = primaryFabric;
  }
};
var greyTee = new TShirt('2XLT', true, 'cotton');
console.log(greyTee);
