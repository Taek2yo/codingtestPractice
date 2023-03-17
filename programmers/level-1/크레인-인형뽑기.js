// https://school.programmers.co.kr/learn/courses/30/lessons/64061

function solution(board, moves) {
  let answer = 0;
  let basket = [];

  moves.forEach((e) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][e - 1] !== 0) {
        let data = basket.pop();
        if (data !== board[i][e - 1]) {
          if (data) {
            basket.push(data);
          }
          basket.push(board[i][e - 1]);
          console.log("basket is " + basket)
        } else {
          answer++;
        }
        board[i][e - 1] = 0;
        return;
      }
    }
  });
  return answer * 2;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
