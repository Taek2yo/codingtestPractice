// https://school.programmers.co.kr/learn/courses/30/lessons/181944


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    const result = Number(line) % 2 ? 'odd' : 'even'
    console.log(line, 'is', result)
});

