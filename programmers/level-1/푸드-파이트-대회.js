// 수웅이가 준비한 음식의 양을 칼로리가 적은 순서대로 나타내는 정수 배열 food가 주어졌을 때, 대회를 위한 음식의 배치를 나타내는 문자열을 return 하는 solution 함수를 완성해주세요.

function solution(food){
    let arr = [];
    for ( let i = 0; i < food.length; i++){
        if(food[i] >= 2){
            const calorie = Math.floor(food[i]/2);
            arr.push(String(i).repeat(calorie));
        }
    }
    const answer = [arr.join(''),0,arr.reverse().join('')];
    return answer.join('');
}



// 다시 깔끔하게 바꿔보기
function solution2(food){
    let res = '';
    for ( let i = 1; i < food.length; i++){
        res += String(i).repeat(Math.floor(food[i]/2));
    }
    return res + '0' + [...res].reverse().join('')
}

console.log(solution2([1,3,4,6]))