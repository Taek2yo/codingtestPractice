// https://school.programmers.co.kr/learn/courses/30/lessons/181943

function solution(my_string, overwrite_string, s) {
  let str = my_string.substring(s);
  return (
    my_string.slice(0, s) +
    overwrite_string +
    str.slice(overwrite_string.length)
  );
}


