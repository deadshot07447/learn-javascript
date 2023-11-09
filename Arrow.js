const user = {
    username: "Aditya",
    price: 999,


    welcomeMessage: function(){
        console.log(`${this.username}, welcome to spotify`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Vadapav"
// user.welcomeMessage()

// console.log();
// console.log(this);

// function chai(){
    // let username = "Aditya"
    // console.log(this.username);
// }

// chai()


// const chai = () =>{
//     let username = "Aditya"
//     console.log(this);
// }


// chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }


const addTwo = (num1, num2) => (num1+num2)


console.log(addTwo(3,4));
