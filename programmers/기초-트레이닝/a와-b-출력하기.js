// https://school.programmers.co.kr/learn/courses/30/lessons/181951

const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}).on('line', function (line) {
    const [a, b] = line.split(' ')
    console.log('a =', a)
    console.log('b =', b)
})