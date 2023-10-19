// https://school.programmers.co.kr/learn/courses/30/lessons/17683

function solution(m, musicinfos) {
    // #을 포함하는 음계를 치환하는 함수
    function replaceSharp(s) {
        s = s.replace(/C#/g, 'c');
        s = s.replace(/D#/g, 'd');
        s = s.replace(/F#/g, 'f');
        s = s.replace(/G#/g, 'g');
        s = s.replace(/A#/g, 'a');
        return s;
    }

    // 재생 시간을 분 단위로 계산하는 함수
    function calculateTime(start, end) {
        const [startHour, startMinute] = start.split(':').map(Number);
        const [endHour, endMinute] = end.split(':').map(Number);
        return (endHour - startHour) * 60 + (endMinute - startMinute);
    }

    // melody를 #을 치환하여 정규화
    m = replaceSharp(m);

    let result = [];
    for (const musicinfo of musicinfos) {
        const [start, end, title, melody] = musicinfo.split(',');
        const playTime = calculateTime(start, end);
        const normalizedMelody = replaceSharp(melody);
        const melodyLength = normalizedMelody.length;

        let fullMelody = '';
        for (let i = 0; i < playTime; i++) {
            fullMelody += normalizedMelody[i % melodyLength];
        }

        if (fullMelody.includes(m)) {
            result.push({ title, playTime });
        }
    }

    if (result.length === 0) {
        return "(None)";
    }

    result.sort((a, b) => {
        if (a.playTime === b.playTime) {
            return musicinfos.indexOf(a) - musicinfos.indexOf(b);
        }
        return b.playTime - a.playTime;
    });

    return result[0].title;
}


console.log(solution("ABCDEFG",["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"]))