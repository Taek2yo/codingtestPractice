// https://school.programmers.co.kr/learn/courses/30/lessons/60058
function isBalanced(str) {
  let count = 0;
  for (let char of str) {
    if (char === "(") {
      count++;
    } else if (char === ")") {
      count--;
    }
    if (count < 0) return false;
  }
  return count === 0;
}

function separateUV(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      count++;
    } else if (str[i] === ")") {
      count--;
    }
    if (count === 0) {
      return [str.slice(0, i + 1), str.slice(i + 1)];
    }
  }
}

function solution(p) {
  if (p === "") {
    return "";
  }

  const [u, v] = separateUV(p);

  if (isBalanced(u)) {
    return u + solution(v);
  } else {
    const newStr = "(" + solution(v) + ")";
    const uWithoutBrackets = u.slice(1, u.length - 1);
    const reversedU = uWithoutBrackets
      .split("")
      .map((char) => (char === "(" ? ")" : "("))
      .join("");
    return newStr + reversedU;
  }
}

console.log(solution("(()())()"));
