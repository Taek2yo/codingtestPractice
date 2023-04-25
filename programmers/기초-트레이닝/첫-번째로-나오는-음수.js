// https://school.programmers.co.kr/learn/courses/30/lessons/181896

// for
function solution(num_list) {
  let answer = 0;
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] < 0) {
      answer = i;
      break;
    } else {
      answer = -1;
    }
  }
  return answer;
}


// findIndex
function solution2(num_list){
    return num_list.findIndex(v => v < 0)
}
console.log(solution2([12, 4, 15, 46, 38, -2, 15]));
