// https://school.programmers.co.kr/learn/courses/30/lessons/181949

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let answer = "";

rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  str = input[0];
  [...str].forEach((c) => {
    if (c == c.toUpperCase()) {
      answer += c.toLowerCase();
    } else if (c == c.toLowerCase()) {
      answer += c.toUpperCase();
    }
  });
  console.log(answer);
});
