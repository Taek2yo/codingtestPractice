// 

function solution(maps) {
    const row = maps.length; // 
    const col = maps[0].length; //
    const dx = [-1, 1, 0, 0]; // 상하좌우 방향 이동을 위한 배열
    const dy = [0, 0, -1, 1];
    
    const queue = [[0, 0, 1]]; //  초기 거리 1 ( 시작점 (0,0))
    maps[0][0] = 0; // 출발 지점
    
    while (queue.length > 0) {
        const [x, y, dist] = queue.shift();
        
        if (x === row - 1 && y === col - 1) { // 상대 팀 진영에 도착한 경우
            return dist;
        }
        
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            
            if (nx >= 0 && nx < row && ny >= 0 && ny < col && maps[nx][ny] === 1) {
                queue.push([nx, ny, dist + 1]);
                maps[nx][ny] = 0; // 방문한 지점은 다시 방문 X
            }
        }
    }
    
    return -1; // 상대 팀 진영에 도착할 수 없는 경우
}

console.log(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]))