function solution(n) {
  
    let s = n.toString().split("").reverse();
     
    let sum = 0;
    sum = s.reduce((acc,cur) => acc + Number(cur), 0);  // reduce 메서드를 이용해서 배열의 합을 계산한다.
    
    let answer = `"${s.join("+")}=${sum}"`; // join 메서드를 활용하여 배열의 원소를 결합할때 "+" 또한 넣어준다

    return answer;
  }

console.log(solution(718253))


//reduce 메서드 = 누산기가 포함되어 있기 때문에, 배열의 각 요소에 대해 함수를 실행하고 누적된 값을 출력할 때 용이
//기본적인 예제로는, 모든 배열의 합을 구하는경우