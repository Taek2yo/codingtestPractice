// 문자열 my_string이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
  let answer = [];
  let arr = [...my_string];
  for ( let i = 0; i < arr.length; i++){
    if ( arr[i] === arr[i].toUpperCase()){
        answer.push(arr[i].toLowerCase());
    } else {
        answer.push(arr[i].toUpperCase());
    }
  }
  return answer.join('');
}

console.log(solution("cccCCC"));


// 다른 풀이
function solution2(my_string) {
    return my_string.split('').map(n => n === n.toUpperCase() ? n.toLowerCase() : n.toUpperCase()).join('')
}