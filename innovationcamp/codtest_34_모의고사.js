// 어차피 다 찍는데, 가장 많이 맞힌 사람이 누구인지 알면된다.
function solution(answers) {
    var answer = [];                                        
    const man1 = [1, 2, 3, 4, 5];               
    const man2 = [2, 1, 2, 3, 2, 4, 2, 5];      // 수포자들의 정답은 패턴이있음  = 길이가 정해져있다  
    const man3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let count = [0, 0, 0];                      // 수포자 1,2,3의 정답 개수를 카운트 할 count 변수르 배열로 만듦

    for(let i = 0; i < answers.length; i++) {       
        if(answers[i] == man1[i % man1.length]) count[0]++;
        if(answers[i] == man2[i % man2.length]) count[1]++;     // 수포자의 답안 인덱스와 answers의 정답 인덱스가 같다면
        if(answers[i] == man3[i % man3.length]) count[2]++;     // 수포자의 카운트를 count[n]에 올려준다. (n=0,1,2)  
    }

    const max = Math.max(count[0], count[1], count[2]);         // count배열을 최댓값 메서드를 이용해 max 변수에 넣어준다.
    for(let i = 0; i < count.length; i++) {
        if(max == count[i]) answer.push(i + 1);          // count[i]가 max의 값과 같을때, count[i]는 0부터 시작하기때문에 i+0 해서 
                                                        // answer에 .push() 메서드를 사용해 수를 넣어준다.
    }

    return answer;
}

// 다른 사람들 풀이를 보고 여러가지로 비교해서 이게 제일 나아보임.
// 다른 풀이에 filter 메서드를 사용해서 푼 풀이도 있었지만, filter라는 메서드는 결국 배열연산을 두번하기에 보기엔 좋을 수 있으나 성능면에선 떨어짐/
//  