function solution(weights) {
  let answer = 0;
  let weightCountMap = new Map();

  for (let i = 0; i < weights.length; i++) {
    weightCountMap.set(weights[i], (weightCountMap.get(weights[i]) || 0) + 1);
  }

  // 각각의 몸무게에 대해 시소의 다른 좌석과의 거리 비율
  let seatDistances = [2, 4 / 3, 1.5];

  for (let [key, val] of weightCountMap) {
    answer += (val * (val - 1)) / 2;

    for (let d of seatDistances) {
      if (weightCountMap.has(d * key)) {
        answer += val * weightCountMap.get(d * key);
      }
    }
  }

  return answer;
}

console.log(solution([100, 180, 360, 100, 270]));
