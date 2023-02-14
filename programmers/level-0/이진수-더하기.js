// 이진수를 의미하는 두 개의 문자열 bin1과 bin2가 매개변수로 주어질 때, 두 이진수의 합을 return하도록 solution 함수를 완성해주세요.

function solution(bin1, bin2){
    let num1 = parseInt(Number(bin1), 2);
    let num2 = parseInt(Number(bin2), 2);
    return (num1 + num2).toString(2);
}


// 다른 사람 풀이 ( 이 문제는 이진수를 구현할 줄 아냐 모르냐의 의도로 출제된 문제 )
function solution2(bin1, bin2) {
    let temp = Number(bin1) + Number(bin2);
    temp = [...temp.toString()].reverse().map((v)=>+v)

    for ( let i = temp.length; i< 11; i++){
        temp.push(0)
    }

    for (let i = 0; i < temp.length; i++) {
        if (temp[i] === 2) {
          temp[i] = 0;
          temp[i + 1]++;
        } else if (temp[i] === 3) {
          temp[i] = 1;
          temp[i + 1]++;
        }
      }
    return Number(temp.reverse().join("")).toString();
}
