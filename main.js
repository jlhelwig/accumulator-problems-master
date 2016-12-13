/*
----------------------------------------
SAMPLE
----------------------------------------

Challenge: Write function named test that returns the string "This Works!".
Solution: This one has already been complete for you.

*/
"use strict"

function test() {
 var string ="This Works!";
 return string;
}



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named sum that will take an array of numbers and return the sum of them

Example: if you pass it [1,2,3] then it should return 6 (which is 1 + 2 + 3)
*/

var array1=[1,2,3];
function sum(test){
  var addedup = 0;
  for (let i = 0; i< test.length; i++){
    addedup = addedup + test[i];
  }
  return addedup;
}
sum(array1);
console.log(sum(array1));

// this looks like it would work but doesn't
// var array1 = [1,2,3];
// var sum = array1.reduce(function(clbk,array1)){
//   return clbk + array1;
// }
//or
// From Galvanize practice IT WORKS!!! but not here :(
// var numbers = [1,2,3];
//
// function Sum(total, numbers) {
//     return total + numbers;
// }
//
// var Sum = (numbers.reduce(Sum));
// from mdn
// var sum = [0, 1, 2, 3].reduce(function(a, b) {
//   return a + b;
// }, 0);
// sum is 6




//----------------------------------------
//CHALLENGE
//
//Write function named doubleNumbers that will take an array of numbers and return an array with those numbers doubled

//Example: if you pass it [1,2,3] then it should return [2,4,6]
//


var array2dbl=[1,2,3];
function doubleNumbers(test1){
  var doubled = [];
  for (let i = 0; i< test1.length; i++){
    done = test1[i] * 2;
    doubled.splice(i,0,done);
  }
  return doubled;
}
doubleNumbers(array2dbl);
console.log(doubleNumbers(array2dbl));

// function mapfunction (number)
// return number *2
// function doubleNumbers (numbers)
// numbers.map(mapfunction)
// Should use map here I am thinking


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named multiplyNumbers that will take an array of numbers and
return an array with those numbers multiplied by another value

Examples:

- if you call multiplyNumbers([1,2,3], 0) you'd get [0,0,0]
- if you call multiplyNumbers([1,2,3], 5) you'd get [5,10,15]
*/
var thearraytouse = [1,2,3];
var themultinum = 5;
function multiplyNumbers (test3,test4){
var newset = [];
  for (let i=0; i<test3.length; i++){
    done1 = test3[i] * test4;
    newset.splice(i,0,done1);
  }
  return newset;
}

multiplyNumbers(thearraytouse,themultinum);

console.log(multiplyNumbers(thearraytouse,themultinum));







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named doubleLetters that will take a string and double every letter in the string

Example: if you pass it "abc" then it should return "aabbcc"
*/

// var itemstodbl = "abc"
// function doubleLetters (string7) {
// var newstring = ""
//   for (let i=0; i< string7.length; i++){
//   newstring += string7.charAt(i) + string7.charAt(i);
//   }
// return newstring;
// }
// doubleLetters (itemstodbl);
// console.log (doubleLetters (itemstodbl));

function doubleLetters (whatevs) {
  let results = "";
  for (let i=0; i<whatevs.length; i++){
    results += whatevs[i];
    results += whatevs[i];
  }
  return results;
}








/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named interleave that will take two arrays and interleaves them

Example: if you pass it ["a", "b", "c"] and ["d", "e", "f"] then it should return ["a", "d", "b", "e", "c", "f"]

// NOTE: you can assume each input will be the same length
*/

var itemsa = ["a","b","c"];
var itemsb = ["x","y","z"];
function interleave (string8,string9) {
var newstring1 = [];
  for (let i=0; i< string8.length; i++){
  newstring1.push(string8[i]);
  newstring1.push(string9[i]);
  }
return newstring1;
}
interleave (itemsa,itemsb);
console.log (interleave (itemsa,itemsb));









/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named createRange that will take a number and a default value and return an array of that many values

Example: if you pass it 4 and "Hello" then it should return ["Hello", "Hello", "Hello", "Hello"]
*/

var runit = 4
var junk = "Hello"
function createRange (digital,verbal){
newoutput1 = []
  for (let i=0; i<digital; i++){
    newoutput1.push(verbal);
  }
  return newoutput1;
}
createRange (runit,junk);
console.log(createRange (runit,junk));



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named flipArray that will take an array and return an object where the keys are the items and the values are the indices

Example:

If you pass it ["quick", "brown", "fox"] then it should return { "quick": 0, "brown": 1, "fox": 2 }
*/

function flipArray(arry){
results = {};
  for(i=0; i<arry.length; i++){
    results [arry[i]]=i;
    // I don't understand this bit, it doesn't seem to put anything in the object
  }
  return results
}
// var typetest = ["a", "b", "c"];
// function flipArray(arr) {
//   var rv = {};
//   for (var i = 0; i < arr.length; ++i){
//     if (arr[i] !== undefined) rv[i] = arr[i];}
//   return rv;
// }
// flipArray (typetest);
// console.log(flipArray (typetest));



// This looked right, but didn't pass the test
// function flipArray (alltogethernow){
//   objectlike = "";
// for (let i=0; i<alltogethernow.length-1; i++){
//     objectlike += '"' + alltogethernow[i] + '"' + " : " + i + ", ";
//     objectlike2 = objectlike + '"' + alltogethernow[alltogethernow.length-1]+ '"' + " : " + (i+1) + " ";
//     objectlike3 = "{ " + objectlike2 + " }";
//   }
//   return objectlike3;
// }
// flipArray (typetest);
// console.log(flipArray (typetest));




// This is the correct output (at least it looks like it) However, I don't believe I a made an object.



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named arraysToObject that will take an array of 2-element arrays, and return an object of key/value pairs

Example:

If you pass it [[2014, "Horse"], [2015, "Sheep"]] then it should return { 2014: "Horse", 2015: "Sheep" }

*/
function arraysToObject (arrays) {
  let result = {}
  for (let i=0; i < arrays.length; i++) {
    result[arrays[i][0]] = arrays[i][1]
  }
  return result
}
// function arraysToObject (arrays) {
//   let result = {}
//   for (let i = 0; i < arrays.length; i++) {
//     result[arrays[i][0]] = arrays[i][1]
//   }
//   return result
// }
// function arraysToObject (arrays) {
// let result = {};
// for (i=0; i<arrays.length; i++){
// result[arrays[i]][0]] = arrays [i][1];
// }return result;
// }



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named reverseString that will reverse a string without calling the built-in .split or .reverse methods

Example:

If you pass it "hello" then it should return "olleh"
*/

var checkit = "checkitout";
function reverseString (backitup) {
  let olleh ="";
  for (let i=0; i < backitup.length ; i++){
olleh = backitup[i] + olleh;
}
return olleh
}
  console.log (reverseString(checkit))








/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named repeats that returns true if the first half of the string equals the last half, and false if not

Example:

If you pass it "haha" then it should return true because "ha" (the first half) equals "ha" (the second half)
If you pass it "yay" then it should return false because it's odd
If you pass it "heehaw" then it should return false because "hee" doesn't equal "haw"
*/

function repeats (teststring) {
  let result = true
  for (let i = 0; i < teststring.length / 2; i++) {
    result = result && (teststring[i] === teststring[i + teststring.length/2])
  }
  return result
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named everyOther that returns every other character in the string

Example:

If you pass it "abcdef" then it should return "ace" because those represent every other letter
*/
let madeupstring = "abcdefghijklmn"
function everyOther (madeupstring) {
skipper = ""
  for (let i= 0; i<madeupstring.length; i=i+2) {
    skipper += madeupstring[i];

  }
  return skipper
}
console.log(everyOther(madeupstring))





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named allEqual that returns true if every character in the string is the same

Example:

If you pass "aaa" it should return true
If you pass "aba" it should return false
*/

function allEqual (test5) {
  let alleq = true
  for (let i=0; i<test5.length - 1; i++) {
    alleq = alleq && (test5[i] === test5[i+1])
  }
  return alleq
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named sumLetters that returns the sum of every character in the string

Example:

If you pass "45" it should return 9
If you pass "246" it should return 10
*/

function sumLetters (string10) {
  let x = 0
  for (let i=0; i<string10.length; i++){
    x=x + string10[i]
  }
  return x
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named countVowels that returns the number of vowels in a string, excluding "y"

Example:

If you pass "you" it should return 2
*/

function countVowels (vowelcheck) {
let y=0
  for (let i=0; i<vowelcheck.length; i++){
    if (["a", "e" ,"i", "o", "u"].includes(vowelcheck[i])){
      y++
    }
  }
  return y
}









/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named split that takes a string and returns an array of the letters

Example:

If you pass "you" it should return ["y", "o", "u"]

NOTE: do not use the builtin `split` method
*/

function split(newarray2){
  let splitarray = []
  for (let i=0; i<newarray2.length; i++){
    splitarray.push(newarray2[i])
  }
  return splitarray
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named getCodePoints that takes a string and returns an array of the codePoints of the letters

See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt

Example:

If you pass "Hello" it should return [ 72, 101, 108, 108, 111 ]
*/
var codedstring = "strings"
function getCodePoints (codedstring){
  let coded = []
  for (let i=0; i< codedstring.length; i++){
    coded.push(codedstring.codePointAt(i))
  }
  return coded
}
console.log(getCodePoints(codedstring))





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named letterMap that takes a string and returns an object of the letters and their positions in the string

Example:

If you pass "Yo" it should return {Y: 0, o: 1}
If you pass "Hello" it should return {H: 0, e: 1, l: 3, o: 4}
*/

function letterMap(stringobj) {
  let objx ={}
  for (let i=0; i<stringobj.length; i++){
    objx [stringobj[i]] = i
  }
  return objx
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named letterCount that takes a string and returns an object with the letters and the number of their occurrences

Example:

If you pass "Yo" it should return {Y: 1, o: 1}
If you pass "Hello" it should return {"H": 1, "e": 1, "l": 2, "o": 1}
*/






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named threeOdds that takes 2 numbers and returns true if there are 3 odd numbers _between_ those two numbers

Example:

If you pass 0,2 it should return false because the only number between 0 and 2 is 1
If you pass 0,6 it should return true because between 0 and six (the numbers 1,2,3,4,5) there are three odds - 1, 3 and 5
*/

// function letterCount (somethingx)
// let result = {}
// for (let i=0; i<somethingx.length; i++){
//
// }

// MIND BLOWN!!!
function threeOdds (min, max) {
  let odds = []
  for (let i = min + 1; i < max; i++) {
    if (i % 2 === 1) {
      odds.push(i)
    }
  }
  return odds.length >= 3
}









/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function called leftPad that takes a string, a length and a fill character and returns a string padded to length with the fill character

Example:

If you pass "a", 3, "*" it should return "**a" - that is, a string of length 3, padded on the left by the "*" character
*/


function leftPad (string,length,fillchar){
  let result = ""
  for (let i=0; i<length-string.length; i++){
    result +=  fillchar
  }
  result = result + string
  return result
}





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named createString that takes a number and a letter and creates a string of that many letters

Example:

If you pass "a", 3 it should return "aaa"
If you pass "b", 3 it should return "bbb"
*/

function createString(number,letter){
  let result = ""
  for (let i=0; i<number; i++){
    result +=letter
  }
  return result
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named factorial that takes a number and returns its factorial

Factorial of 4 means 4 * 3 * 2 * 1

Example:

If you pass 4 it should return 24 since that's 4 * 3 * 2 * 1
If you pass 5 it should return 120 since that's 5 * 4 * 3 * 2 * 1
*/


function factorial (numtofactor){
    let x = 1;
    for (let i=1; i <= numtofactor; i++){
      x *= i;

    }
    return x
}



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named arrayOfNumbers that takes a number and returns an array of all the numbers between 1 and that number, inclusive

Example:

If you pass 1 it should return [1]
If you pass 3 it should return [1,2,3]
*/

function arrayOfNumbers(justdigits){
  let y = [];
  for (let i=1; i<= justdigits; i++){
    y.push(i)
  }
  return y
}





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named evenOdd that takes a number and returns an object with the numbers and whether they are even or odd

Example:

If you pass 1,4 it should return {"1": "odd", "2": "even", "3": "odd", "4": "even"}
*/

function evenOdd (start, stop) {
  let result = {}
  if (stop - start === 0) { return result }
  for (let i = start; i <= stop; i++) {
    result[i] = (i % 2 === 0) ? "even" : "odd"
  }
  return result
}

// this is just weird.... what is ? : ... is it an if then? Why doesn't if else not work with this???




/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named growingKeys that takes a number and a string and returns an object where the keys are that string, repeated one more each time

Example:

If you pass 2,"d" it should return {"d": true, "dd": true}
*/


// what is the 'true' portion of this function???







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named every that takes an array and a value and returns true if every element of the array equals the value

Example:

If you pass [1,1], 1 it should return true
If you pass [1,2], 1 it should return false
*/

//
// function every (whatevs2){
//   for (let i=0; i< whatevs.length; i++){
//     result = true
//   }
// }


// function every (test5) {
//   let alleq = true
//   for (let i=0; i<test5.length - 1; i++) {
//     alleq = alleq && (test5[i] === test5[i+1])
//     if alleq
//   }
//   return alleq
// }



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named some that takes an array and a value and returns true if at least one element of the array equals the value

Example:

If you pass [1,2], 1 it should return true
If you pass [3,2], 1 it should return false
*/


function some (arrayz,constz) {
  let resultz = false
  for (let i=0; i<arrayz.length; i++){
    if (arrayz[i] === constz) return true
  }
  return resultz
}

// function some (array, value) {
//   let result = false
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === value) return true
//   }
//   return result
// }


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named some that takes an array and returns a string with the elements joined by commas, with a trailing 'and'

Example:

If you pass ["Sue", "Will"] it should return "Sue and Will"
If you pass ["Sue", "Will", "Rachel"] it should return "Sue, Will and Rachel"
*/

function toSentence (arrayq){
  let output = ""
  for (let i=0; i<arrayq.length; i++){
    output += arrayq[i]
    if (i === arrayq.length-2) {output += " and "}
    else if (i < arrayq.length -2){output += ", "}
  }
  return output
}











/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named acronym that takes an array and returns a string that is an acronym of the items in the array

Example:

If you pass ["Sue", "Will"] it should return "SW"
If you pass ["Java", Script", "Object", "Notation"] it should return "JSON"
*/

function acronym (strigedarray){
let outputq = ""
for (let i=0; i<strigedarray.length; i++){
  outputq += strigedarray [i][0]
}
return outputq
}





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named min that takes an array and returns minimum value of the array

Example:

If you pass [0,-3,2,5] it should return -3
*/

function min(arraywmin){
  let q = arraywmin[0]
  for (let i=0; i<arraywmin.length; i++){
      if (arraywmin[i]<q){
        q = arraywmin[i]
      }
  }
  return q
  }










/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named index that takes an array of objects, and a property name, and returns an object where the keys are the specified property

Example:

If you pass [{id: 1, name: "Joe"}, {id: 2, name: "Sue"}] it should return {1: {id: 1, name: "Joe"}, 2: {id: 2, name: "Sue"}}

*/
function index (array, property) {
  let result = {}
  for (let i = 0; i < array.length; i++) {
    result[array[i][property]] = array[i]
  }
  return result
}


// function index (tested) {
// let objectnamedx = {};
// for (let i=1; i<tested.length; i++){
//   objectnamedx tested [i] [0] = tested [i] ;
// }
//   return objectnamedx;
// }





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named invert that takes an object and returns an object where the keys and values have been inverted

Example:

If you pass {id: 1, name: "Joe"} it should return {1: "id", Joe: "name"}
*/

// function invert (array2rev){
// let xyz = {};
// for (let i=0; i<array2rev.length; i++){
//   xyz array2rev[i][1]=array2rev [i][0];
// }
// return xyz
// }


//wow I suck at this one...



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named addSignature that takes an object and a name, and returns an object where

- the keys are suffixed with "-signed"
- the values are suffixed with " - <name>"

Example:

If you pass {"contract": "foo"}, "Fred" it should return {"contract-signed": "foo - Fred"}
*/

// function addSignature (contract,fname1){
// let signedc = {};
// // for (let i=0; i<contract.length; i++){
//   signedc contract [0] + "-signed" = contract [1] + "-" +fname1;
// }
// return signedc

function addSignature (name, documents) {
  let result = {}
  for (let key in documents) {
    result[`${key}-signed`] = `${documents[key]} - ${name}`
  }
  return result
}



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named pairs that takes an object and returns an array of strings of key/value pairs

Example:

If you pass {name: "Will", age: 24} it should return ["name - will", "age - 24"]
*/








/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named sumValues that takes an object and returns the sum of the values

Example:

If you pass {a: 1, b: 2} it should return 3
*/








/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named biggestProperty that takes an object and returns the name of the property with the highest value

Example:

If you pass {1999: 4036, 2000: 7654} it should return '2000'
*/














/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named keyForValue that takes an object and a value and returns the name of the property that matches that value

Example:

If you pass {1999: 4036, 2000: 7654} and 4036, it should return '1999'
*/










/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named containsValue that takes an object and a value and returns true if the object contains the value

Example:

If you pass {1999: 4036, 2000: 7654} and 4036, it should return true
*/









//
