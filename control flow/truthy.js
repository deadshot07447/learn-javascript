const { on } = require("nodemon");

const usermail = ""

if (usermail) {
    console.log("got the mail");
}else{
    console.log("didnt get the mail");
}

//falsy values 

// false, 0, -0, BigInt 0n, null, undefined, NaN 

// truthy 
// "0", 'false', " ", [], {}, function(){}

if (usermail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}

// console.log(Object.keys(emptyObj).length);

if (Object.keys(emptyObj)== 0) {
    console.log("object is empty");
}


//Nullish coalescing operator (??): null undefined


let val1;
// val1 = 25 ?? 10
// val1 = null ?? null
// val1 = undefined ?? 5

console.log(val1);

let defaultFunction = () =>{
    return null
}

let addNumbers = (num1,num2) =>{
    return num1 + num2
}

let result = addNumbers(2,4)  ?? defaultFunction()

console.log(result);
