// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 
// 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.
// 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

function solution(s){
    let p = 0;
    let y = 0;
    const str = s.toLowerCase();
    for ( let i = 0; i < str.length; i++){
        if( str[i] === 'p') p++
        else if ( str[i]=== 'y') y++
    }
    return p === y
}

console.log(solution("pPoooyY"))

// split(separator)
function solution2(s){
      return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
  }