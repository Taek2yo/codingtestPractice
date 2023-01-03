function solution(n) {
  
    let s = n.toString().split("").reverse();
      return s.map((n) => parseInt(n));
  }

console.log(solution(1234))