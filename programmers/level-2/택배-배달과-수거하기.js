// 2023 KAKAO BLIND RECRUITMENT
// https://school.programmers.co.kr/learn/courses/30/lessons/150369

function solution(cap, n, deliveries, pickups) {
  let DArea = 0;
  let PArea = 0;
  let answer = 0;
  for (let i = pickups.length - 1; i >= 0; i--) {
    if (deliveries[i] > DArea) {
      deliveries[i] -= DArea;
      DArea = 0;
    } else {
      DArea -= deliveries[i];
      deliveries[i] = 0;
    }

    if (pickups[i] > PArea) {
      pickups[i] -= PArea;
      PArea = 0;
    } else {
      PArea -= pickups[i];
      pickups[i] = 0;
    }

    const DCount = deliveries[i] % cap ? Math.floor(deliveries[i] / cap) + 1 : deliveries[i] / cap;
    const PCount = pickups[i] % cap ? Math.floor(pickups[i] / cap) + 1 : pickups[i] / cap;

    const times = Math.max(DCount, PCount);
    answer += times * (i + 1) * 2;
    DArea += times * cap - deliveries[i];
    PArea += times * cap - pickups[i];
  }

  return answer;
}

console.log(solution(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0]));
