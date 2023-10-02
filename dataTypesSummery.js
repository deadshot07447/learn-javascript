//primitive and non primitive

/*
primitive datatypes

1. String
2. Number
3. Boolean
4. null
5. undefined
6. Symbol
7. BigInt


*/

const score = 100;
const runRate = 7.6;

const isPlaying = true;
const wickets = null;

const winner = undefined;

const  id = Symbol('123')
const anotherId =Symbol('123')

console.log(id === anotherId);
const bigInt = 343322n;


/*

Reference Type (Non Primitives)
1. Array
2. Object
3. Functions
*/

const heros = ["Shaktiman","Aditya","Iron Man"];

let myObj = {
    name:"Aditya",
    age: 24
}

const myFunction = function(){
    console.log(2+2);
}


console.log(typeof id);