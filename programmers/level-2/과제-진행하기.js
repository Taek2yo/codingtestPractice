// https://school.programmers.co.kr/learn/courses/30/lessons/176962

function solution(plans) {
    const queue = plans.map((plan) => {
      const [name, time, spend] = plan;
      const [hour, minute] = time.split(':');
      const convertedTime = Number(hour) * 60 + Number(minute);
  
      return [name, convertedTime, Number(spend)];
    })
      .sort((a, b) => a[1] - b[1]);
  
    const result = [];
    const first = queue.shift();
    let currentTime = first[1];
  
    const stack = [first];
  
    while (queue.length) {
      const target = queue.shift();
      const [_name, time, _spend] = target;
      let timeDiff = time - currentTime;
      currentTime = time;
  
      while (stack.length && timeDiff > 0) {
        const latestPlan = stack.pop();
        const [latestName, _latestTime, latestSpend] = latestPlan;
  
        if (latestSpend <= timeDiff) {
          result.push(latestName);
          timeDiff -= latestSpend;
        } else {
          latestPlan[2] = latestSpend - timeDiff;
          timeDiff = 0;
          stack.push(latestPlan);
        }
      }
  
      stack.push(target);
    }
  
    while (stack.length) {
      result.push(stack.pop()[0]);
    }
  
    return result;
  }
  

  console.log(solution([["korean", "11:40", "30"], ["english", "12:10", "20"], ["math", "12:30", "40"]]))