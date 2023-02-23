// https://school.programmers.co.kr/learn/courses/30/lessons/86491

function solution(sizes) {
  var answer = 0;
  let W = 0;
  let H = 0;

  for (let size of sizes) {
    const A = size[0] < size[1] ? size[1] : size[0];
    const B = size[0] < size[1] ? size[0] : size[1];
    W = W < A ? A : W;
    H = H < B ? B : H;
  }
  answer = W * H;
  return answer;
}


console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]))