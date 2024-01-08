// https://school.programmers.co.kr/learn/courses/30/lessons/134239

function solution(k, ranges) {
  const nums = [k];
  while (k > 1) {
    k = k % 2 ? k * 3 + 1 : k / 2;
    nums.push(k);
  }

  const area = [0];
  for (let i = 1; i < nums.length; i++) {
    let temp =
      Math.abs(nums[i - 1] - nums[i]) / 2 + Math.min(nums[i - 1], nums[i]);
    area.push(area[area.length - 1] + temp);
  }

  return ranges.map(([r1, r2]) => {
    const num = area[area.length + r2 - 1] - area[r1];
    return num >= 0 ? num : -1;
  });
}

console.log(
  solution(5, [
    [0, 0],
    [0, -1],
    [2, -3],
    [3, -3],
  ])
);
