// https://school.programmers.co.kr/learn/courses/30/lessons/172927

function solution(picks, minerals) {
  let answer = Infinity;
  let total = 0;
  const visited = new Array(picks.length).fill(0);

  for (const pick of picks) {
    total += pick;
  }

  function dfs(count, startMineralsIdx, pickIdx, sum) {
    if (answer <= sum || startMineralsIdx >= minerals.length) {
      return;
    }

    let add = 0;

    for (let i = startMineralsIdx; i < startMineralsIdx + 5; i++) {
      if (i >= minerals.length) {
        break;
      }

      const mineral = minerals[i];

      if (pickIdx === 0) {
        add += 1;
      } else if (pickIdx === 1) {
        add += mineral === "diamond" ? 5 : 1;
      } else if (mineral === "diamond") {
        add += 25;
      } else {
        add += mineral === "iron" ? 5 : 1;
      }
    }

    if (count >= total || startMineralsIdx + 5 >= minerals.length) {
      answer = Math.min(answer, sum + add);
      return;
    }

    for (let i = 0; i < picks.length; i++) {
      if (picks[i] === 0 || picks[i] === visited[i]) {
        continue;
      }

      visited[i]++;
      dfs(count + 1, startMineralsIdx + 5, i, sum + add);
      visited[i]--;
    }
  }

  for (let i = 0; i < picks.length; i++) {
    if (picks[i] === visited[i]) {
      continue;
    }
    visited[i]++;
    dfs(1, 0, i, 0);
    visited[i]--;
  }

  return answer;
}

console.log(
  solution(
    [1, 3, 2],
    [
      "diamond",
      "diamond",
      "diamond",
      "iron",
      "iron",
      "diamond",
      "iron",
      "stone",
    ]
  )
);
