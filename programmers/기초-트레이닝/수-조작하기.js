// https://school.programmers.co.kr/learn/courses/30/lessons/181926

function solution(n, control) {
  let answer = n;
  for (let i = 0; i < control.length; i++) {
    if (control[i] === "w") {
      answer += 1;
    } else if (control[i] === "s") {
      answer -= 1;
    } else if (control[i] === "d") {
      answer += 10;
    } else if (control[i] === "a") {
      answer -= 10;
    }
  }
  return answer;
}


function solution2(n, control) {
    var answer = n;
    const direction = {
        "w" : 1,
        "s" : -1,
        "d" : 10,
        "a" : -10,
    }

    control.split('').forEach(e => answer += direction[e])
    return answer;
}
console.log(solution2(0,"wsdawsdassw"))
