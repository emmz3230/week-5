// Create a separate countries.js file and store 
// the countries array in to this file,
// create a separate file web_techs.js
// and store the webTechs array in to this 
// file. Access both file in main.js file
console.log(web_techs);
console.log(country);



// First remove all the punctuations and change the string to array and count
//  the number of words in the array

// let text =
// 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// console.log(words)
// console.log(words.length)
// ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", 
// "React", "Python"]
// 13
var words = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(words.toString())


// In the following shopping cart add, remove, edit items
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added
// add Sugar at the end of you shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
// modify Tea to 'Green Tea'
var shoppingCart =  ['Milk', 'Coffee', 'Tea', 'Honey'];
 shoppingCart[0] = 'Meat';
 shoppingCart[3] = 'Sugar';
 shoppingCart[2] =  'Green Tea'
console.log(shoppingCart)



// In countries array check if 'Ethiopia' exists in the array if it exists
//  print 'ETHIOPIA'. If it does not exist add to the countries list.
console.log(country[4])

// In the webTechs array check if Sass exists in the array and if it exists print
// 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
web_techs.push('Sass');

// Concatenate the following two variables and store it in a fullStack variable.
// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express', 'MongoDB']
// console.log( fullStack)
// ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

var frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
var backEnd = ['Node','Express', 'MongoDB'];
var fullStack = frontEnd + backEnd
console.log(fullStack)


// The following is an array of 10 students ages:
// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
// Find the median age(one middle item or two middle items divided by two)
// Find the average age(all items divided by number of items)
// Find the range of the ages(max minus min)
// Compare the value of (min - average) and (max - average), use abs() method 1\
// .Slice the first ten countries from the countries array

var ages = [19, 19,20, 22, 24, 24,24,24, 25,25, 26,  ];
 var min = Math.min(...ages);
 var max = Math.max(...ages);
 console.log(min);
 console.log(max);

//  i dont know how to find a median i need help

var madian = Math.floor(ages.length / 2);
console.log(madian)

var ave = 19 + 19 + 20 + 22 + 24 + 24 + 24 + 24 + 25 + 25 + 26;
var n = 11
const average = ave/n
console.log(average)

var range = max-min;
console.log(range)

var compare1 =  min-average;
var compare2 = max-average;
var compareEnd = compare1 == compare2;
console.log(compareEnd)

console.log(country.slice(0,country.length-1))



// You may want to look into the Math.max and Math.min functions,
// along with the spread operator to get them to work for arrays.


// Find the middle country(ies) in the countries array
var middle = country[Math.floor((country.length - 1) / 2)];
console.log(middle)

// Divide the countries array into two equal arrays if it is even.
// If countries array is not even , one more country for the first half.

var divide = Math.ceil (country.length/2)
var dividehalf = country.slice(0,divide)
var dividesecond = country.slice(-divide)
console.log(dividehalf)
console.log(dividesecond)


