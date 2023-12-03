// https://school.programmers.co.kr/learn/courses/30/lessons/131130

function solution(cards) {
  const MaxSize = [-1, -1];

  function circuit(i) {
    if (cards[i] === -1) {
      return 0;
    }

    const nextIdx = cards[i] - 1;
    cards[i] = -1;

    return circuit(nextIdx) + 1;
  }

  for (let i = 0; i < cards.length; i++) {
    if (cards[i] === -1) {
      continue;
    }

    const currentSize = circuit(i);

    if (MaxSize[0] < currentSize) {
      MaxSize[1] = MaxSize[0];
      MaxSize[0] = currentSize;
    } else if (MaxSize[1] < currentSize) {
      MaxSize[1] = currentSize;
    }
  }

  return MaxSize[0] === cards.length ? 0 : MaxSize[0] * MaxSize[1];
}

console.log(solution([8, 6, 3, 7, 2, 5, 1, 4]));
