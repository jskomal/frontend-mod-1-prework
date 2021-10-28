// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings
var heroName =  'BetterGuy';
var specialAbility = 'add egg wash on your baked goods for better browning';
// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility
var greeting = 'Ho there! I am ' + heroName +'!';
var catchphrase = `Are you mad? Putting those in the oven like that? Stop right now so I can ${specialAbility}!`;
// Declare two variables - power AND energy - set to integers
var power = 9000;
var energy = 100;
// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy
var fullPower = power * 500;
var fullEnergy = energy + 150;
// Declare two variables - isHuman and identityConcealed - assigned to booleans
var isHuman = true;
var identityConcealed = true;

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings
var archEnemies = ['Limp Toast man', 'Eggs are Evil Boy', 'Soggy Biscuit Samuel']
var sidekicks = ['Butterman', 'The Whipped Cream Witch', 'Gelato Gal']
// Print the first sidekick to your console
console.log(sidekicks[0]);
// Print the last archEnemy to the console
console.log(archEnemies[2]);
// Write some code to add a new archEnemy to the archEnemies array
archEnemies.push('The Wicked Waffle');
// Print the archEnemies array to console to ensure you added a new archEnemy
console.log(archEnemies)
// Remove the first sidekick from the sidekicks array
sidekicks.shift();
// Print the sidekicks array to console to ensure you added a new sidekick
console.log(sidekicks);
// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel
var dangerLevel
var saveTheDay = 'Maillard smiles upon us today!'
var badExcuse = 'YOUR DOUGH IS TOO WET, FOOL! This will never work!'

// there is no need for the two other arguments, but it could be written as:
// function assessSituation(dangerLevel, saveTheDay, badExcuse){
function assessSituation(dangerLevel){
  if (dangerLevel > 50) {
    console.log(badExcuse)
  }
  else if (dangerLevel >=10) {
    console.log(saveTheDay)
  }
  else if (dangerLevel < 10) {
    console.log('Meh. Hard pass.')
  }
}
assessSituation(99);
assessSituation(21);
assessSituation(3);
// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.

//Test Cases
var announcement = 'Never fear, the Courageous Curly Bracket is here!';
var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.';
// assessSituation(99, announcement, excuse) > Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
//assessSituation(21, announcement, excuse) > should print - 'Never fear, the Courageous Curly Bracket is here!'
//assessSituation(3, announcement, excuse) > should print - "Meh. Hard pass."

// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)

var scaryMonster = {
  name: 'Beth',
  smell: 'sickly sweet',
  weight: 3002,
  citiesDestroyed: ['Montpillier, VT', 'Rifle, CO', 'Limon, CO'],
  luckyNumbers: [1,4,95],
  address: {
    number: 626,
    street: 'Monster way',
    state: 'CO',
    zip: 80111
  }
};
console.log(scaryMonster);
// Create a new class called SuperHero
// - Your class should have the following DYNAMIC values
//   - name
//   - superpower
//   - age
// - Your class should have the following STATIC values
//   - archNemesis, assigned to "The Syntax Error"
//   - powerLevel = 100
//   - energyLevel = 50
class Superhero {
  constructor(name, superpower, age, archNemesis, powerLevel, energyLevel) {
  this.name = name;
  this.superpower = superpower;
  this.age = age;
  this.archNemesis = 'The Syntax Error';
  this.powerLevel = 100;
  this.energyLevel = 50;
  }

sayName() {
  console.log(this.name)
}
maximizeEnergy() {
  this.energyLevel = 1000
  }
gainPower(addPowerNum) {
  this.powerLevel = this.powerLevel + addPowerNum
  }
};

// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

// - Create 2 instances of your SuperHero class
var ferretGirl = new Superhero('Ferret Girl', 'is a ferret at all times', 35);
console.log(ferretGirl);
var geriatricGamer = new Superhero('The Geriatric Gamer', 'is still competitive at video games', 97);
console.log(geriatricGamer);
ferretGirl.gainPower(1000);
console.log(ferretGirl);
// Reflection
// What parts were most difficult about this exerise? Remembering the specific syntax for each different facet, Objects vs functions vs classes, I had to look a couple of minor details up, which slowed me down.

// What parts felt most comfortable to you? I feel very comfortable with the fundamentals, but putting them into practice means taking more time to engrain these into my brain

// What skills do you need to continue to practice before starting Mod 1? All of them! the more comfortable I am with all of them, the more quickly I can implement these into real world scenarios!
