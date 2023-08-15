// https://school.programmers.co.kr/learn/courses/30/lessons/49993

function solution(skill, skill_trees) {
    let answer = 0;
    
    for (let i = 0; i < skill_trees.length; i++) {
        let filteredSkills = '';
        
        for (let j = 0; j < skill_trees[i].length; j++) {
            if (skill.includes(skill_trees[i][j])) {
                filteredSkills += skill_trees[i][j];
            }
        }
        
        if (filteredSkills === skill.slice(0, filteredSkills.length)) {
            answer++;
        }
    }
    
    return answer;
}

console.log(solution("CBD",	["BACDE", "CBADF", "AECB", "BDA"]))