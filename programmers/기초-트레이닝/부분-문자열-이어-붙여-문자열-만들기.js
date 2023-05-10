// https://school.programmers.co.kr/learn/courses/30/lessons/181911

function solution(my_strings, parts) {
    return parts.map(([s, e], i) => {
        return my_strings[i].slice(s, e + 1)
    }).join('')
}

console.log(
  solution(
    ["progressive", "hamburger", "hammer", "ahocorasick"],
    [
      [0, 4],
      [1, 2],
      [3, 5],
      [7, 7],
    ]
  )
);
