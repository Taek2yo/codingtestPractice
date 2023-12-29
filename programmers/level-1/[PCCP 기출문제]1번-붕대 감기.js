// https://school.programmers.co.kr/learn/courses/30/lessons/250137

function solution(bandage, health, attacks) {
  let maxhealth = health;
  let maxtime = attacks[attacks.length - 1][0];
  let attack_dict = {};

  for (let i = 0; i < attacks.length; i++) {
    attack_dict[attacks[i][0]] = attacks[i][1];
  }

  let time = 0;
  let sec = 0;

  while (time <= maxtime) {
    if (time in attack_dict) {
      health -= attack_dict[time];
      sec = 0;

      if (health <= 0) {
        return -1;
      }
    } else {
      sec += 1;
      if (sec < bandage[0]) {
        health += bandage[1];
        if (health > maxhealth) {
          health = maxhealth;
        }
      } else {
        health = health + bandage[1] + bandage[2];
        if (health > maxhealth) {
          health = maxhealth;
        }
        sec = 0;
      }
    }

    time += 1;
  }

  return health;
}

console.log(
  solution([5, 1, 5], 30, [
    [2, 10],
    [9, 15],
    [10, 5],
    [11, 5],
  ])
);
