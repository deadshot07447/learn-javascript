
const myObject = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby'
}


for (const key in myObject) {
    console.log(`${key} : ${myObject[key]}`);
    
}

const programming = ["java", "cpp", "python"]

for (const key in programming) {
    console.log(key);
}

for (const iterator of programming) {
    console.log(iterator);
}