// https://school.programmers.co.kr/learn/courses/30/lessons/142085?language=javascript

// 병사 n , 무적권 k , 라운드별 적의 수 enemy
// 최소힙을 사용한 우선순위 큐
// 각 라운드별 적의 수를 앞에서부터 순회하면서 우선순위 큐에 추가한다.
// 이 때 (k + 1)번째 부터는 우선순위 큐에 추가한 다음 최솟값을 큐에서 빼낸다.
// 큐에서 빼낸 최솟값은 sum에 더하고, 만약 sum이 n보다 크다면 해당 라운드를 진행할 수 없으므로 이전 라운드를 반환한다.
// 만약 for문을 다 돌았다면 모든 라운드를 진행할 수 있는 것

class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    let index = this.heap.length - 1;

    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (this.heap[index] >= this.heap[parent]) {
        break;
      }

      [this.heap[index], this.heap[parent]] = [
        this.heap[parent],
        this.heap[index],
      ];
      index = parent;
    }
  }

  pop() {
    const heap = this.heap;
    if (heap.length <= 1) {
      return heap.pop();
    }

    const output = heap[0];
    heap[0] = heap.pop();
    let index = 0;

    while (index * 2 + 1 < heap.length) {
      const left = index * 2 + 1,
        right = index * 2 + 2;
      let next = index;

      if (heap[next] > heap[left]) {
        next = left;
      }

      if (right < heap.length && heap[next] > heap[right]) {
        next = right;
      }

      if (next === index) {
        break;
      }

      [heap[index], heap[next]] = [heap[next], heap[index]];
      index = next;
    }

    return output;
  }
}

function solution(n, k, enemy) {
  if (enemy.length <= k) {
    return enemy.length;
  }

  let sum = 0;
  const queue = new PriorityQueue();

  for (let i = 0; i < k; i++) {
    queue.push(enemy[i]);
  }

  for (let i = k; i < enemy.length; i++) {
    queue.push(enemy[i]);
    const min = queue.pop();
    if ((sum += min) > n) {
      return i;
    }
  }

  return enemy.length;
}

console.log(solution(7, 3, [4, 2, 4, 5, 3, 3, 1]));
