// https://school.programmers.co.kr/learn/courses/30/lessons/49994

function solution(dirs) {
    const visited = new Set(); // Set을 사용하여 방문한 위치를 저장
    let x = 0, y = 0; // 캐릭터의 현재 위치

    // 주어진 명령어를 순회하며 움직임 처리
    for (const move of dirs) {
        let nx = x, ny = y; // 다음 위치를 일단 현재 위치로 설정

        // 명령어에 따라 다음 위치 계산
        if (move === 'U') ny++;
        else if (move === 'D') ny--;
        else if (move === 'R') nx++;
        else if (move === 'L') nx--;

        // 다음 위치가 좌표평면의 경계를 넘어가면 무시
        if (nx < -5 || nx > 5 || ny < -5 || ny > 5) continue;

        // 현재 위치에서 다음 위치로 가는 길과 반대 방향의 길을 모두 Set에 추가
        visited.add(`${x}${y}${nx}${ny}`);
        visited.add(`${nx}${ny}${x}${y}`);

        // 다음 위치로 이동
        x = nx;
        y = ny;
    }

    // 처음 걸어본 길의 길이 반환
    return visited.size / 2; // 반대 방향의 길까지 저장했으므로 2로 나누어서 반환
}

console.log(solution("ULURRDLLU"))