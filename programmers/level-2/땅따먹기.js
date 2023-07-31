// https://school.programmers.co.kr/learn/courses/30/lessons/12913

function solution(land) {
    for (let i = 1; i < land.length; i++) {
        for (let j = 0; j < 4; j++) {
            land[i][j] += Math.max(...land[i - 1].filter((_, idx) => j !== idx));
        }
    }
    return Math.max(...land.pop());
}

console.log(solution([[1,2,3,5],[5,6,7,8],[4,3,2,1]]))