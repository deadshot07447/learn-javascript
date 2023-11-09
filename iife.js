

//named iife

(function chai(){
    console.log("Hello");
})();

( (name) => {
    console.log(`${name}, welcome`);
})("Vadpav")