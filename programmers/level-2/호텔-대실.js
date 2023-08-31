// https://school.programmers.co.kr/learn/courses/30/lessons/155651/solution_groups?language=javascript

function solution(book_time) {

    function toHourToMinutes(time) {
        const [hours, minutes] = time.split(":").map(Number);
        return hours * 60 + minutes;
    }
    const sortedBookings = book_time
        .map(booking => [toHourToMinutes(booking[0]), toHourToMinutes(booking[1])])
        .sort((a, b) => a[0] - b[0]);

    const roomStatus = [];
    let roomCount = 0;

    for (const booking of sortedBookings) {
        const [start, end] = booking;
        let assigned = false;

        for (let i = 0; i < roomStatus.length; i++) {
            if (roomStatus[i] <= start) {
                roomStatus[i] = end + 10; 
                assigned = true;
                break;
            }
        }

        if (!assigned) {
            roomStatus.push(end + 10);
            roomCount++;
        }

    }
    return roomCount;
}

console.log(solution([["09:10", "10:10"], ["10:20", "12:20"]]))

// 다른분의 코드를 참고하여 가독성을 개선한 코드.
// 주어진 예약 시간을 분 단위로 변환. 
// 예약된 객실 사용 기간을 1분 단위로 체크하는 배열을 생성하고, 예약된 객실 사용 기간 동안 해당 배열의 값을 증가
function otherSolution(book_time) {
    function toHourToMinutes(time) {
        const [hours, minutes] = time.split(":").map(Number);
        return hours * 60 + minutes;
    }

    const timeArr = Array.from({ length: toHourToMinutes('23:59') + 10 }, () => 0);

    book_time.forEach((time) => {
        const [start, end] = time;
        let startTime = toHourToMinutes(start);
        const endTime = toHourToMinutes(end) + 9;

        for (startTime; startTime <= endTime; startTime++) {
            timeArr[startTime]++;
        }
    });

    return Math.max(...timeArr);
}
console.log(otherSolution([["09:10", "10:10"], ["10:20", "12:20"]]))