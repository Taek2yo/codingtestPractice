// https://school.programmers.co.kr/learn/courses/30/lessons/181916

function solution(a, b, c, d) {
  const diceCounts = new Map();

  [a, b, c, d].forEach((die) => {
    diceCounts.set(die, (diceCounts.get(die) || 0) + 1);
  });

  const sortedValues = Array.from(diceCounts.values()).sort();
  const sortedKeys = Array.from(diceCounts.keys()).sort(
    (x, y) => diceCounts.get(x) - diceCounts.get(y)
  );

  const valuesStr = sortedValues.toString();

  switch (valuesStr) {
    case "4":
      return 1111 * sortedKeys[0];
    case "1,3":
      const [smaller, larger] = sortedKeys;
      return Math.pow(10 * larger + smaller, 2);
    case "2,2":
      const [first, second] = sortedKeys;
      return (first + second) * Math.abs(first - second);
    case "1,1,2":
      const [min1, min2] = sortedKeys;
      return min1 * min2;
    default:
      return Math.min(...sortedKeys);
  }
}

console.log(solution([4, 1, 4, 4]));

// 알고리즘 공부중 이전에 풀었던 코드가 너무 길고 복잡하여 개선시켜봄
