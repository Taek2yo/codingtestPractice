// https://school.programmers.co.kr/learn/courses/30/lessons/12978

function solution(N, road, K) {
  const distances = new Array(N + 1).fill(Infinity);
  distances[1] = 0; // 거리 0 초기화 1번마을에서 시작하므로
  const roads = Array.from({ length: N + 1 }, () => []);

  road.forEach(([a, b, c]) => {
    roads[a].push({ to: b, cost: c });
    roads[b].push({ to: a, cost: c });
  });

  const queue = [];
  queue.push({ to: 1, cost: 0 });

  while (queue.length) {
    let { to } = queue.shift();

    roads[to].forEach((next) => {
      if (distances[next.to] > distances[to] + next.cost) {
        distances[next.to] = distances[to] + next.cost;
        queue.push(next);
      }
    });
  }

  return distances.filter((x) => x <= K).length;
}


console.log(
  solution(
    5,
    [
      [1, 2, 1],
      [2, 3, 3],
      [5, 2, 2],
      [1, 4, 2],
      [5, 3, 1],
      [5, 4, 2],
    ],
    3
  )
);

// 다익스트라 알고리즘 구현