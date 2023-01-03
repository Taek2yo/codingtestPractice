// x 라는 하샤드 수가 자릿수의 합으로 나눴을 때, 나머지가 0이면 된다. -> x % sum === 0

function solution(x){   // x = 18 
    var sum = 0;
    var arr = String(x).split(""); // 자리수나눈다음 각각 더해야하기때문에 문자열로 변경 
                                                    // ex [1,8]
    for(let i=0; i<arr.length; i++){                // 반복문 돌리기
        sum += Number(arr[i])                       // 1+8
    }
    return (x % sum === 0)            
}

console.log(solution(13))