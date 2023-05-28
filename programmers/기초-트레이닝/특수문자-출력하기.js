// https://school.programmers.co.kr/learn/courses/30/lessons/181948

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('close', function () {
  // 특수문자를 문자열로 출력하는 코드 추가
  console.log(`!@#$%^&*(\\'"<>?:;`);

  process.exit(0);
});