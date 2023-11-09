const name = "Aditya";
const repoCount = 50;

console.log(name + repoCount + " value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Shingare');

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('b'));
// console.log(gameName.toLowerCase());
// console.log(gameName.toUpperCase());
// console.log(gameName.replace('n','t'));

// console.log(gameName.substring(-2,3));

// const newString = gameName.slice(-8,3);
// console.log(newString);


// const a = "a";
// const b = "b";
// if (a < b) {
//   // true
//   console.log(`${a} is less than ${b}`);
// } else if (a > b) {
//   console.log(`${a} is greater than ${b}`);
// } else {
//   console.log(`${a} and ${b} are equal.`);
// }

// const v = new String("Aditya");
// const n = new String("ADITYA")


// function areEqualCaseInsensitive(str1, str2) {
//     return str1.toUpperCase() === str2.toUpperCase();
// }

//   console.log(areEqualCaseInsensitive(v, n));
 
//   console.log(gameName.italics());


  // String.prototype.lastIndexOf()
  //  returns the index of the last occurrence of the specified substring.

// const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

// const searchTerm = 'quick';

// console.log(paragraph.lastIndexOf(searchTerm));



// String.prototype.link()
// creates a string that embeds this string in an <a> element (<a href="...">str</a>), to be used as a hypertext link to another URL.

// const  google = "google";

// document.body.innerHTML = google.link("www.google.com")


// String.prototype.localeCompare()
//  returns a number indicating whether this string comes before, or after, or is the same as the given string in sort order.

// const a = "réservé"
// const b = "RESERVE"

// console.log(a.localeCompare(b));



// String.prototype.match()
// The match() method of String values retrieves the result of matching this string against a regular expression.

// const str = "For more information, see Chapter 3.4.5.1";
// const re = /see (chapter \d+(\.\d)*)/i;
// const found = str.match(re);

// console.log(found);


// const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
// const regexp = /[A-C]/gi;
// const matches = str.match(regexp);
// console.log(matches);



// String.prototype.padStart()
// The padStart() method of String values pads this string with another string (multiple times, if needed) 
//until the resulting string reaches the given length. The padding is applied from the start of this string.

// const str = '5'

// console.log(str.padStart(4));


// String.prototype.padEnd()
//The padEnd() method of String values pads this string with a given string (repeated, if needed) so that the resulting
// string reaches a given length. The padding is applied from the end of this string.


// const str = "aditya"
// console.log(str.length);
// console.log(str.padEnd(10,"."));


// String.prototype.repeat()
//  returns a new string which contains the specified number of copies of this string, concatenated together.

// const mood = "Happy! "

// console.log(`I am feeling ${mood.repeat(3)}`);


const stringObj = new String('foo');

console.log(stringObj);
// Expected output: String { "foo" }

console.log(stringObj.toString());
// Expected output: "foo"

