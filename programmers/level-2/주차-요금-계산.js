function solution(fees, records) {
    const getTimeByMinute = time => {
        if (!time) return 0;
        const [hour, minute] = time.split(':');
        return (hour * 60) + parseInt(minute);
    };
    
    const carParkingTime = new Map();
    for (const record of records) {
        const [recordTime, carNumber, status] = record.split(" ");
        const minutes = getTimeByMinute(recordTime);
        const totalTime = carParkingTime.get(carNumber) || 0;
        const time = status === 'IN' ? 1439 - minutes : minutes - 1439;
        carParkingTime.set(carNumber, totalTime + time);
    }

    const getTotalFee = (time, fees) => {
        const [basicTime, basicFee, additionalTime, additionalFee] = fees;
        return time <= basicTime ? basicFee : basicFee + Math.ceil((time - basicTime) / additionalTime) * additionalFee;
    };

    return Array.from(carParkingTime.keys())
        .sort()
        .map(carNumber => getTotalFee(carParkingTime.get(carNumber), fees));
}




console.log(solution([180, 5000, 10, 600],	["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"]))