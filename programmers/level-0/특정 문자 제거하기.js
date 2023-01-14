// 문자열 my_string과 문자 letter이 매개변수로 주어집니다. my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

function solution (my_string, letter) {
    let answer = [...my_string]
    for ( let i = 0; i < answer.length; i++ ){
        if ( answer[i] === letter) {
            answer.splice(i, 1);
            i--;
        }
    }
    return answer.join("");
}

console.log(solution("BCBdbe","B"))

// 다른 사람 풀이
function othersolution ( my_string, letter) {
    const answer = my_string.split(letter).join('')
    return answer;
}

console.log(othersolution("abcdef","f"))

// 해석. split() 메서드. 인자기준으로 분리해서 새로운 배열 반환 후 join('') 문자로 반환.

// 나의 생각
// split() 메서드로 배열로 바꾸는 거 까진 생각했지만, split() 인자에 대해 공부가 부족하여 더 나아가지 못했음.
