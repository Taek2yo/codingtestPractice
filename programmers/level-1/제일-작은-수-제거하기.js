// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 
// 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

// test case 1번 시간 오래걸림
function solution(arr) {
    let answer = arr.filter(v=> v != Math.min(...arr))
    return answer.length > 0 ? answer : [-1]
}

// 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다. 제한 조건 확인 후 다시 푼 두번째 방법
function solution2(arr){
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    return arr.length < 1 ? [-1] : arr;
}

console.log(solution2([4,3,2,1]))