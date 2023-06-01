//Every
//Determine if every number is greater than or equal to 0.
const isBelowThreshold = (currentValue) => currentValue >= 0
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
console.log(nums.every(isBelowThreshold))

//Determine if every word is shorter than 8 characters
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];
const characters = (word) => {
    if (word.length < 8) {
        console.log(true)
    } else {
       console.log(false)
    }
}
let words = panagram.every(characters);

//filter the array for numbers less than 4
function isLessThanFour(x) {
    return x < 4;
}
let four = nums.filter(isLessThanFour) 
console.log(four);

//Filter words that have an even length
const result = (word) => word.length % 2 === 0;
const rule = panagram.filter(result);
console.log(rule); 

//Find the first value divisible by 5
const divisibleByFife = (nums) => nums % 5 === 0;
const five = nums.find(divisibleByFife);
console.log(five);

//Find the first word that is longer than 5 characters -- there is none
const fiveCharacters = panagram.find(word => word.length > 5);
console.log(fiveCharacters);

//Find the index of the first number that is divisible by 3
const divisibleByThree = (nums) => nums % 3 === 0;
const three = nums.findIndex(divisibleByThree);
console.log(three);

//Find the index of the first word that is less than 2 characters long
const lessThanTwo = panagram.findIndex(word => word.length < 2);
console.log(lessThanTwo);


//Log each value of the array multiplied by 3
nums.forEach(nums => {
    const multiByThree = nums * 3;
    console.log(multiByThree)
})

//Log each word with an exclamation point at the end of it.
panagram.forEach(word => {
    const exclamationPoint = word + "!";
    console.log(exclamationPoint);
})

//Make a new array of each number multiplied by 100
const multiByHundred = nums.map(z => z * 100);
console.log(multiByHundred);

//Make a new array of all of the words in all uppercase
const uppercaseWords = panagram.map(word => word.toUpperCase());
console.log(uppercaseWords);

//Find out if some numbers are divisible by 7
const divisibleBySeven = nums.some(num => num % 7 === 0);
console.log(divisibleBySeven);

//Find out if some words have the letter a in them.
const letterA = panagram.some(word => word.includes('a'));
console.log(letterA);

//Add all of the numbers in the array together using the reduce method
const reduceMethod = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(reduceMethod);

//Concatenate all the words using reduce
const ConcatenateWords = panagram.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(ConcatenateWords);
