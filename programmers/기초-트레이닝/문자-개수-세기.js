// https://school.programmers.co.kr/learn/courses/30/lessons/181902

function solution(my_string) {
  const counts = Array(52).fill(0); 

  for (let i = 0; i < my_string.length; i++) {
    const charCode = my_string.charCodeAt(i); 

    if (charCode >= 65 && charCode <= 90) {
      counts[charCode - 65]++; 
    } else if (charCode >= 97 && charCode <= 122) {

      counts[charCode - 71]++; 
    }
  }

  return counts;
}

console.log(solution("Programmers"));
