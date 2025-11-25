const sculptureList = require('./data.js'); // import data.js

const element = sculptureList[0] // <---- comment out this line in your solution!
const sculptureListLengths = [];

for (const sculpture of sculptureList) {
    const length = {};

    for (const key in sculpture){
        length[key] = sculpture[key].length;
    }
    sculptureListLengths.push(length);
}

console.log(sculptureListLengths);