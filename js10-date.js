function getDayName(dateString) {
    let dayName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var days = new Date(dateString);
    days = dayName[days.getUTCDay()];

    return days;
}
console.log(getDayName('10-11-2009'));