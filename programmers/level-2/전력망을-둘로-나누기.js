// https://school.programmers.co.kr/learn/courses/30/lessons/86971

function solution(n, wires) {
  // 그래프 생성
  const graph = {};
  for (const [v1, v2] of wires) {
    if (!graph[v1]) graph[v1] = [];
    if (!graph[v2]) graph[v2] = [];
    graph[v1].push(v2);
    graph[v2].push(v1);
  }

  let answer = Infinity;

  // DFS 함수를 통해 서브트리의 송전탑 개수 계산
  function dfs(node, parent) {
    let count = 1; // 현재 노드를 포함한 송전탑 개수
    for (const neighbor of graph[node]) {
      if (neighbor === parent) continue;
      count += dfs(neighbor, node);
    }
    const remaining = n - count; // 나머지 서브트리 송전탑 개수
    answer = Math.min(answer, Math.abs(count - remaining));
    return count;
  }

  // 임의의 송전탑을 루트로 선택하여 서브트리 송전탑 개수 계산
  dfs(1, -1);

  return answer;
}

console.log(solution(9,[[1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]]))