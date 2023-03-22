// https://school.programmers.co.kr/learn/courses/30/lessons/133502

function solution(ingredient) {
  const stack = [];
  let count = 0;

  ingredient.forEach((item) => {
    stack.push(item);

    if (stack.length >= 4) {
      const hamburger = stack.slice(-4).join("");

      if (hamburger === "1231") {
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
        count++;
      }
    }
  });

  return count;
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]));
