// https://school.programmers.co.kr/learn/courses/30/lessons/181885

function solution(todo_list, finished) {
    return todo_list.filter((_, i)=>!finished[i])
}

console.log(
  solution(
    ["problemsolving", "practiceguitar", "swim", "studygraph"],
    [true, false, true, false]
  )
);
