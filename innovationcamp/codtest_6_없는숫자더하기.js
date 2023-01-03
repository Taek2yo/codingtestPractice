function solution(nums) {
    var answer = 0;
   for(let i=0; i<=9; i++){                 //i=0부터 시작해서 9까지 하나씩 증가하는 문자열
       if(!nums.includes(i)) answer += i;   //nums에서 i에 없는것을 뽑아내어 answer에 더해라
   } 
   return answer;
}
console.log(solution('1,2,3,5'))

//includes() 함수
//배열이 특정 요소를 포함하고 있는지 판별


//string.includes( searchString, length )
//searchString : 검색할 문자열로 필수 요소, 대소문자를 구분
//length : 검색을 시작할 위치, 선택 요소로 값이 없으면 전체 문자열을 대상