// https://school.programmers.co.kr/learn/courses/30/lessons/178871

function solution(players, callings) {
    const obj = {};

    for (let i = 0; i < players.length; i++) {
      obj[players[i]] = i;
    }
  
    callings.forEach((player) => {
  
      const curIdx = obj[player];

      const nextplayer = players[curIdx - 1];
  
      players[curIdx - 1] = player;
      players[curIdx] = nextplayer;
  
      obj[player]--;
      obj[players[curIdx]]++;
    });
  
    return players;
  }

console.log(solution(["mumu", "soe", "poe", "kai", "mine"],["kai", "kai", "mine", "mine"]))