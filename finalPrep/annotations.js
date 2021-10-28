// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
// declares function buildABear with the parameters name, age, fur, clothes, and specialPower
function buildABear(name, age, fur, clothes, specialPower) {
  //declares varaiable greeting which greets and uses it's own name via interpolation
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  // declares a variable demographics which contains an array
  var demographics = [name, age];
  // declares variable powerSaying which tells about it's specialPower via concatenation
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  // declares variable builtBear which is an object containg key value pairs of various data
  var builtBear = {
    // sets up a dynamic value for demographics, using the var array created earlier
    basicInfo: demographics,
    //sets up a dynamic value for clothes, that is specified in the function's 4th argument
    clothes: clothes,
    // sets up a dynamic value for fur, that is specified in the function's 3rd argument
    exterior: fur,
    //sets a static value for the cost
    cost: 49.99,
    //creates an array with two dynamic variables, and one static phrase
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    //sets a static value for the cuddlyness
    isCuddly: true,
  };
//returns builtBear, the object on starting on line 14
  return builtBear
}
// calls function buildABear with specifed arguments linked to the parameters on line 5, nothing is stored
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
// same but with different answers for the arguments
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
// declare function fizzBuzz with parameters num1, num2, and range
function fizzBuzz(num1, num2, range) {
  // loop this with initialExpression = 0 and adding 1 to the initialExpression each loop as many times as is specified in the range argument
  for (var i = 0; i <= range; i++) {
    // if the remainder of i divided by num1 (the first argument) is 0 AND the remainder of i divided by num2 (the second argument) is 0, print 'fizzbuzz' to the console
    if (i % num1 === 0 && i % num2 === 0) {
      console.log('fizzbuzz');
      // if either of those is false, check if the remainder of i divided by num1 (the first argument) is 0, if so print 'fizz' to the console
    } else if (i % num1 === 0) {
      console.log('fizz');
      // if that too is false, check if the remainder of i divided by num2 (the second argument) is 0, if so print 'buzz' to the console
    } else if (i % num2 === 0) {
      console.log('buzz');
      // if all so far return false, log the current value of i to the console
    } else {
      console.log(i);
    }
  }
}
// correctly runs the function 100 times
fizzBuzz(3, 5, 100);
// does not run because the b in fizzbuzz is not capitalized correctly
fizzbuzz(5, 8, 400);
