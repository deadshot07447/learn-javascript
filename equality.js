// == operator

/*
Object: return true only if both operands reference the same object.
String: return true only if both operands have the same characters in the same order.
Number: return true only if both operands have the same value. +0 and -0 are treated as the same value. If either operand is NaN, return false; so, NaN is never equal to NaN.
Boolean: return true only if operands are both true or both false.
BigInt: return true only if both operands have the same value.
Symbol: return true only if both operands reference the same symbol.


*/


// const a = new String("Aditya");

// const b = new String("Aditya")

// const isSame = function(){
//     return b == a
// }

// console.log(isSame());

// const a = "Aditya"
// const b = "Aditya"

// const isSame = function(){
//     return b == a 
// }

// console.log(isSame());


const a =  "1"
const b = 1

const isSame = function(){
    return b == a 
}

// console.log(isSame());

// console.log(null == undefined);


const Object1 = {
    key: "value"
}

const Object2 = {
    key:"value"
}

console.log(Object1 == Object2);