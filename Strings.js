const name  = "Mayuri"
const tensionCount = 200

console.log(name + " " + tensionCount + " tensionCount") ;

//String interpolation

console.log(`My name is ${name} and my tensionCount is ${tensionCount}`);

const gameName = new String('Creed');


console.log(gameName[0]);

console.log(gameName.charAt(1));
console.log(gameName.length);
console.log(gameName.toUpperCase());    
console.log(gameName.indexOf('y'));

console.log(gameName.substring(-2,3));

const  newStringOne = "  Aditya   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://1337x.unblockit.foo/torrent/4684925/Udemy-The-Complete-PL-SQL-Bootcamp-Beginner-to-Advanced-PL-SQL/"

console.log(url.replace('/','%20'));


console.log(url.split("/", ));