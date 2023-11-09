const myArr = [0,1,2,3,4]



const arrObj = new Array(1,2,3,4)

// console.log(myArr.length);

const newArr = myArr.join()

// console.log(newArr);

//slice , splice

// console.log("A", myArr);

const mna1 = myArr.slice(1,3)
// console.log(mna1);
// console.log("B", myArr);


const mna2 = myArr.splice(1,3)
// console.log(mna2);
// console.log("C",myArr);


const marvel_Heros = ["Iron man", "Captain America", "Dr Strange", "Thanos", "Thor"]
const dc_Heros = ["superman", "flash", "batman"]

const  allHeros = marvel_Heros.concat(dc_Heros);

console.log(allHeros);


const newHeros = [...marvel_Heros, ...dc_Heros]
console.log(newHeros);