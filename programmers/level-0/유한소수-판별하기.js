// 최대공약수
const getGCD = (num1, num2) => (num2 > 0 ? getGCD(num2, num1 % num2) : num1);

function solution(a,b) {
    let GCD = getGCD(a,b);
    b = b / GCD;
    while ( b % 2 === 0) b = b/2;
    while ( b % 5 === 0) b = b/5;

    return b === 1 ? 1: 2;
}

// 다른 사람 풀이
function solution2(a, b) {
    // a를 b로 나눈 수를 소수점 아래 10의 자리만큼 표기한 후 Number 타입으로 변환한다.
    // 이때 변환한 값과 a를 b로 나눈 수가 같다면 유한소수이므로 1,
    // 아니라면 무한소수이므로 2를 리턴한다.
  return Number((a/b).toFixed(10)) == a/b ? 1 : 2
}

// 입력값에 극단적인 유한소수가 없다면 괜찮은 듯.