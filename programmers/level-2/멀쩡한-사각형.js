function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function solution(w, h) {
  const total = w * h;
  const cutSquares = w + h - gcd(w, h);
  const usable = total - cutSquares;
  return usable;
}

console.log(solution(8,12))
