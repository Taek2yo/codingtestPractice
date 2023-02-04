// 점 네 개의 좌표를 담은 이차원 배열  dots가 다음과 같이 매개변수로 주어집니다.
// * [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]
// 주어진 네 개의 점을 두 개씩 이었을 때, 두 직선이 평행이 되는 경우가 있으면 1을 없으면 0을 return 하도록 solution 함수를 완성해보세요.

function solution(dots) {
    const leanArr = []
    for(let i = 0 ; i < dots.length ; i ++) {
        for(let j = i+1 ; j < dots.length ; j ++) {
            const calLean = (dots[i][1]-dots[j][1]) / (dots[i][0]-dots[j][0])
            if(leanArr.includes(calLean)) return 1
            leanArr.push(calLean)
        }
    }
    return 0
}

console.log(solution([[1, 4], [9, 2], [3, 8], [11, 6]]))

