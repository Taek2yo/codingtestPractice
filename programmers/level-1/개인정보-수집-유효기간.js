// https://school.programmers.co.kr/learn/courses/30/lessons/150370

function solution(today, terms, privacies) {
    let answer = [];
    let [year, month, date] = today.split(".").map(Number);
    let todates = year * 12 * 28 + month * 28 + date;
    const obj = {};
    terms.forEach((e) => {
      let [a, b] = e.split(" ");
      obj[a] = Number(b);
    });

    privacies.forEach((e, i) => {
      let [day, term] = e.split(" ");
      day = day.split(".").map(Number);
      let dates = day[0] * 12 * 28 + day[1] * 28 + day[2] + obj[term] * 28;
      if (dates <= todates) answer.push(i + 1);
    });

    return answer;
  }

  console.log(solution("2022.05.19",["A 6", "B 12", "C 3"],["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]))  