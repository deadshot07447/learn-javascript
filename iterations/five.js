const coding = ["js","ruby","python","cpp"]

// coding.forEach((item) => {
//     console.log(item);
// })


// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)


// coding.forEach( (item, index, arr) => {
//     console.log(index, item, arr);
// })

const myCoding = [
    {
        langName : "javascript",
        extension : "js"
    },
    {
        langName : "python",
        extension : "py"
    },
    {
        langName : "java",
        extension : "java"
    }
]


myCoding.forEach( (item, index, arr) => {
    console.log(item.langName);
})