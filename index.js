'use strict';

//#MINIMUM
  //Write a function min that takes two arguments and returns their minimum

function min(value1, value2) {
  if (typeof value1 == 'undefined' || typeof value2 == 'undefined')
    return NaN;
  else if (value1 == null || value2 == null)
    return 0;
  else if (typeof value1 != 'number' || typeof value2 != 'number')
    return NaN;
  else if (value1 <= value2)
    return value1;
  return value2;
}

console.log(min(1,2)); //1
console.log(min(4,4)); //4
console.log(min(null, 9)); //0
console.log(min(-2,12)); //-2
console.log(min(undefined, 8)); //NaN

//#RECURSION
  //A way to determine whether positive whole number is even or odd:
    //Zero is even
    //One is odd
    //For any other number N, its evenness is the same as N-2
  //Task: Define a recursive function isEven corresponding to this description. The function should accept a number parameter and return a boolean


function isEven(number) {
  if (number < 0)
    return 'ask math if negative numbers can be even or odd. idgaf';
  else if (number == 0)
    return true;
  else if (number == 1)
    return false;

  while (number > 1) {
    number = number - 2;
  }
  //have to return this recursive call also. If not, true or false is returned to the isEven call, and just stays there unless isEven is also returned
  return isEven(number);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

//#BEADS??? BEEES??? BEANSSSS

function countChar(string, character) {
  let count = 0;
  for (let i = 0; i < string.length; ++i) {
    if (string[i] == character)
      count++;
  }
  return count;
}


console.log(countChar('BEES', 'B')); //1
console.log(countChar('boots', 'o')); //2
console.log(countChar('BooBy trapz', 'x')); //0
