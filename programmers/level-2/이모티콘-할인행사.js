// 2023 KAKAO BLIND RECRUITMENT
// https://school.programmers.co.kr/learn/courses/30/lessons/150368?language=javascript

// DFS 이용 할인율 조합 => 완전탐색 , 최댓값 구하기

function solution(users, emoticons) {
  const answer = [0, 0];
  
  const discount = [10, 20, 30, 40];

  const arr = [];

  function DFS(emoticons, result) {
    if (emoticons.length < 1) {
      arr.push(result);
      return;
    }

    for (let i = 0; i < discount.length; i++) {
      DFS(emoticons.slice(1), [...result, [discount[i], emoticons[0]]]);
    }
  }

  DFS(emoticons, []);

  const calcDiscount = (dc, price) => ((100 - dc) / 100) * price;

  arr.forEach((dcArr) => {
    const outcome = [0, 0];

    users.forEach(([per, price]) => {
      let sum = 0;

      dcArr.forEach(([dc, cost]) => {
        if (dc >= per) {
          sum += calcDiscount(dc, cost);
        }
      });

      if (sum >= price) {
        outcome[0] += 1;
      } else {
        outcome[1] += sum;
      }
    });

    if (answer[0] < outcome[0]) {
      answer[0] = outcome[0];
      answer[1] = outcome[1];
    } else if (answer[0] === outcome[0]) {
      if (answer[1] < outcome[1]) {
        answer[1] = outcome[1];
      }
    }
  });

  return answer;
}

console.log(
  solution(
    [
      [40, 10000],
      [25, 10000],
    ],
    [7000, 9000],
    [1, 5400]
  )
);
