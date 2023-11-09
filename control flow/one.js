// if

const isUserloggedIn = true

if(2 !== "2"){
    console.log("True");
}else {
    console.log("False");
}

const score = 200

if (score > 100){
    let power = "fly"
    console.log(`Power: ${power}`);
}
    // console.log(`${power}`);


const balance = 1000

// if(balance == 500) console.log("test"), console.log("test2");


if(balance < 500){
    console.log("less than 500");
}else if(balance < 750 ){
    console.log("less than 750");
}else {
    console.log("less than 1200");
}


const userLoggedin = true
const debitCard = true
const loggedInfromGoogle = true

if(userLoggedin && debitCard){
    console.log("Allow");
}else if(loggedInfromGoogle || userLoggedin){
    console.log("user logged in");
}