// 한 개 이상의 항의 합으로 이루어진 식을 다항식이라고 합니다. 다항식을 계산할 때는 동류항끼리 계산해 정리합니다.
// 덧셈으로 이루어진 다항식 polynomial이 매개변수로 주어질 때, 동류항끼리 더한 결괏값을 문자열로 return 하도록 solution 함수를 완성해보세요. 같은 식이라면 가장 짧은 수식을 return 합니다.

function solution(polynomial) {
  const polyArr = polynomial.split(" + ");

  let xNum = 0;
  let num = 0;

  polyArr.forEach((item) => {
    if (item.includes("x")) {
      const xArr = item.split("x");

      if (xArr[0] === "") {
        xNum += 1;
      }

      if (xArr[0] !== "") {
        xNum += Number(xArr[0]);
      }
    }

    if (!item.includes("x")) {
      num += Number(item);
    }
  });

  if (xNum !== 0 && num !== 0) {
    return xNum === 1 ? `x + ${num}` : `${xNum}x + ${num}`;
  }

  if (xNum !== 0 && num === 0) {
    return xNum === 1 ? "x" : `${xNum}x`;
  }

  if (xNum === 0 && num !== 0) {
    return `${num}`;
  }

  if (xNum === 0 && num === 0) {
    return "0";
  }
}

// 완료