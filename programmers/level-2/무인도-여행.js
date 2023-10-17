// https://school.programmers.co.kr/learn/courses/30/lessons/154540

function solution(maps) {
    const rows = maps.length;
    const cols = maps[0].length;

    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    function isValid(x, y) {
        return x >= 0 && x < rows && y >= 0 && y < cols;
    }

    function dfs(x, y) {
        if (!isValid(x, y) || maps[x][y] === 'X') {
            return 0;
        }

        let maxDays = parseInt(maps[x][y]);
        maps[x] = maps[x].substring(0, y) + 'X' + maps[x].substring(y + 1);

        for (let i = 0; i < 4; i++) {
            const newX = x + dx[i];
            const newY = y + dy[i];
            maxDays += dfs(newX, newY);
        }

        return maxDays;
    }

    const results = [];

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (maps[i][j] !== 'X') {
                results.push(dfs(i, j));
            }
        }
    }

    return results.length === 0 ? [-1] : results.sort((a, b) => a - b);
}

console.log(solution(["X591X","X1X5X","X231X", "1XXX1"]))


// 처음에 BFS로 풀었다가, DFS를 사용해 깊이 우선으로 탐색하여 큐를 사용하지 않는걸로 개선