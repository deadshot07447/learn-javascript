// for


// for (let i = 1; i <= 10; i++) {
//     const element = i;
//     if(i == 5){
//         console.log(`${element}`);
//     }
// }

for (let i = 25; i <=30 ; i++) {
        console.log(`Outer loop : ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Outer loop : ${i} and Inner loop is ${j}`);
        console.log(i + ' * ' + j + ' = ' + i*j  );
    }
}