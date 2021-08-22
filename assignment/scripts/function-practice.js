console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello(){
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name){
  return `Hello, ` + name + `!`;
}
console.log(`helloName:`, helloName(`Pete`));
// Remember to call the function to test


// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber){
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}
console.log(`addNumbers - 9+8 = 17:`, addNumbers(9, 8))

// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber){
  return firstNumber * secondNumber * thirdNumber;
}
console.log(`multiplyThree - 7*2*5 = 70:`, multiplyThree(7, 2, 5));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number){
  if (number > 0){
    return true;
  }
  else{
    return false;
  }
}
console.log(`isPositive - 8 = true:`, isPositive(8));
console.log(`isPositive - -9 = false:`, isPositive(-9));

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive(3) - should say true', isPositive(3) );
console.log( 'isPositive(0) - should say false', isPositive(0) );
console.log( 'isPositive(-3) - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let cardSuits = [`Spades`, `Diamonds`, `Hearts`, `Clubs`];
function getLast(array){
  return array[array.length-1];
}
console.log(`getLast(cardSuits) - Clubs:`, getLast(cardSuits)); 

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
let isNumberThere = [6, 7, 2, 1, 9, 4, 5];
function find(value, array){
  for (i = 0; i < array.length; i++){
    if (value === array[i]){
      return true;
      }
    }
  return false;
}
console.log(`find(2, isNumberThere) - true:`, find(2, isNumberThere));
console.log(`find(8, isNumberThere) - false:`, find(8, isNumberThere));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  let splitString = string.split("");
  firstLetter = splitString.shift();
  if (letter === firstLetter){
    return true;
  }
  else{
    return false;
  }
}
console.log( 'isFirstLetter(`a`, `apple`) - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter(`z`, `apple`) - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
let numbersToSum = [2, 9, -1, 4, 33];
function sumAll(array){
  let sum = 0;
  // TODO: loop to add items
  for (i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum;
}
console.log(`sumAll(numbersToSum) - 2+9+-1+4+33 = 47:`, sumAll(numbersToSum));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
let posOrNegNumbers = [5, -33, 18, 90, -77, 19];
let negNumbers = [-11, -14, -99, -6];
let posNumbers = [];
let shouldStayEmpty = [];
function returnPositive(array, finalArray){
  for (i = 0; i < array.length; i++){
    if (array[i] > 0){
      finalArray.push(array[i])
    }
    if (array[i] < 0){
    }
  }  
}
returnPositive(posOrNegNumbers, posNumbers);
console.log(`posNumbers - [5, 18, 90, 19]:`, posNumbers);
returnPositive(negNumbers, shouldStayEmpty);
console.log(`negNumbers - []:`, shouldStayEmpty)
console.log(`posOrNegNumbers - [5, -33, 18, 90, -77, 19]:`, posOrNegNumbers);

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// in edabit I chose a challenge to create a function that calculates 
// how much of the world's landmass a country takes up using the arguments
// of the name and area of the country(in km^2) to create the string `(name) is 
// (percentage)% of the total world's landmass`.

function areaOfCountry(name, area){
	let totalWorldArea = 148940000;
	let percentage = (area/totalWorldArea*100).toFixed(2);
  return name + ` is ` + percentage + `% of the total world's landmass`
}
console.log(areaOfCountry(`Russia`, 17098242));
console.log(areaOfCountry(`USA`, 9372610));
console.log(areaOfCountry(`Iran`, 1648195));
console.log(areaOfCountry(`Thailand`, 513120));