//1. Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

function reverseString(input) {
  let reversedString = "";
  for (let i = input.length - 1; i >= 0; i--) {
    reversedString += input.charAt(i);
  }
  return reversedString;
}

const inputString = "Hello, World!";
const reversed = reverseString(inputString);
// console.log(reversed);

// 2. Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

function sumPositiveNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

const numbers = [2, -3, 5, -8, 10, 15];
const positiveSum = sumPositiveNumbers(numbers);
//   console.log(positiveSum);



// 3. Write a JavaScript program to find the most frequent element in an array and return it.
function findMostFrequentElement(arr) {
  if (arr.length === 0) {
    return null;
  }

  const elementCount = {};

  arr.forEach((element) => {
    if (elementCount[element]) {
      elementCount[element]++;
    } else {
      elementCount[element] = 1;
    }
  });

  let mostFrequentElement = arr[0];
  let highestCount = 1;

  for (const element in elementCount) {
    if (elementCount[element] > highestCount) {
      mostFrequentElement = element;
      highestCount = elementCount[element];
    }
  }

  return mostFrequentElement;
}

const array = [1, 2, 3, 2, 2, 4, 4, 5, 5, 5, 5];
const mostFrequent = findMostFrequentElement(array);
// console.log(mostFrequent);




// 4. Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

function findTwoNumbersWithSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return null;
}

const sortedArray = [1, 3, 5, 7, 9, 11, 13];
const targetValue = 16;
const result = findTwoNumbersWithSum(sortedArray, targetValue);
// console.log(result);



// 5. Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculator(num1, operator, num2) {
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      throw new Error(
        "Invalid operator. Supported operators are +, -, *, and /"
      );
  }

  return result;
}

// console.log(calculator(5, "+", 3));
// console.log(calculator(10, "-", 4));
// console.log(calculator(6, "*", 9));
// console.log(calculator(20, "/", 5));
// console.log(calculator(10, "%", 3));



// 6. Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function generateRandomPassword(length) {
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialCharacters = "!@#$%^&*()_-+=<>?/{}~";

  const allCharacters =
    uppercaseLetters + lowercaseLetters + numbers + specialCharacters;

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters.charAt(randomIndex);
  }

  return password;
}

const passwordLength = 12;
const randomPassword = generateRandomPassword(passwordLength);
// console.log(randomPassword);



// 7. Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romanToInteger(roman) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < roman.length; i++) {
    const currentSymbolValue = romanNumerals[roman[i]];
    const nextSymbolValue = romanNumerals[roman[i + 1]];

    if (nextSymbolValue > currentSymbolValue) {
      result += nextSymbolValue - currentSymbolValue;
      i++;
    } else {
      result += currentSymbolValue;
    }
  }

  return result;
}

// console.log(romanToInteger("IX"));
// console.log(romanToInteger("XXI"));
// console.log(romanToInteger("IV"));
// console.log(romanToInteger("MCMXCIV"));



// 8. Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

function findSecondSmallest(arr) {
  if (arr.length < 2) {
    throw new Error("Array must contain at least two elements.");
  }

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
      secondSmallest = arr[i];
    }
  }

  if (secondSmallest === Infinity) {
    throw new Error("There is no second smallest element in the array.");
  }

  return secondSmallest;
}

const nums = [5, 8, 2, 10, 3, 6];
// console.log(findSecondSmallest(nums));
