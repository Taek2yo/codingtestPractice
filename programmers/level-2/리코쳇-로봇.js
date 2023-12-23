//school.programmers.co.kr/learn/courses/30/lessons/169199

https: function solution(board) {
  let answer = 0;
  let xlength = board[0].length;
  let ylength = board.length;

  let startCor;
  board = board.map((v) => v.split(""));
  board.forEach((v, idx) => {
    for (let i = 0; i < v.length; i++) {
      if (v[i] === "R") {
        startCor = [i, idx];
        break;
      }
    }
  });

  let queue = [startCor];
  board[startCor[1]][startCor[0]] = "C";

  let moveX = [1, -1, 0, 0];
  let moveY = [0, 0, 1, -1];

  while (queue.length !== 0) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      let [x, y] = queue.shift();

      for (let i = 0; i < 4; i++) {
        let dx = x + moveX[i];
        let dy = y + moveY[i];
        while (
          dx >= 0 &&
          dy >= 0 &&
          dx < xlength &&
          dy < ylength &&
          board[dy][dx] !== "D"
        ) {
          dx += moveX[i];
          dy += moveY[i];
        }

        dx -= moveX[i];
        dy -= moveY[i];

        if (board[dy][dx] === "G") {
          return answer + 1;
        } else if (board[dy][dx] !== "C") {
          board[dy][dx] = "C";
          queue.push([dx, dy]);
        }
      }
    }
    answer++;
  }
  return -1;
}

console.log(solution(["...D..R", ".D.G...", "....D.D", "D....D.", "..D...."]));
