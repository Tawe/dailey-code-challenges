function daysUntilWeekend(dateString) {
    let c = "days"
    const d = new Date(dateString + "T00:00:00Z");
    let day = d.getUTCDay();

    if(day == 6 || day === 0){
        return "It's the weekend!"
    }

    if(6-day === 1){
        c = 'day'
    }

    return `${6-day} ${c} until the weekend.`;
}

const x = daysUntilWeekend("2025-12-06")
x;