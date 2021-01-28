function timer(id, startline) {

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            years = Math.floor(-t / (1000 * 60 * 60 * 24 * 30.43556280587276 * 12)),
            months = Math.floor(-t / (1000 * 60 * 60 * 24 * 30.43556280587276) % 12),
            days = Math.floor(-t / (1000 * 60 * 60 * 24) % 30,43556280587276),
            hours = Math.floor(-t / (1000 * 60 * 60) % 24),
            minutes = Math.floor((-t / 1000 / 60) % 60),
            seconds = Math.floor((-t / 1000) % 60);

            return {
                'totalTime': t,
                'yearsNumber': years,
                'monthsNumber': months,
                'daysNumber': days,
                'hoursNumber': hours,
                'minutesNumber': minutes,
                'secondsNumber': seconds
            };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function getNameYears(y) {
        if (y == 1 || y == 21 || y == 31 || y == 41 || y == 51) {
            return `год`;
        } else if (y == 2 || y == 3 || y == 4 || y == 22 || y == 23 || y == 24 || y == 32 || y == 33 ||
            y == 34 || y == 42 || y == 43 || y == 44 || y == 52 || y == 53 || y == 54) {
            return `года`;
        } else {
            return `лет`;
        }
    }

    function getNameMonths(mo) {
        if (mo == 1) {
            return `месяц`;
        } else if (mo == 2 || mo == 3 || mo == 4) {
            return `месяца`;
        } else {
            return `месяцев`;
        }
    }

    function getNameDays(d) {
        if (d == 1 || d == 21) {
            return `день`;
        } else if (d == 2 || d == 3 || d == 4 || d == 22 || d == 23 || d == 24) {
            return `дня`;
        } else {
            return `дней`;
        }
    }

    function getNameHours(h) {
        if (h == 1 || h == 21) {
            return `час`;
        } else if (h == 2 || h == 3 || h == 4 || h == 22 || h == 23 || h == 24) {
            return `часа`;
        } else {
            return `часов`;
        }
    }

    function getNameMinutes(m) {
        if (m == 1 || m == 21 || m == 31 || m == 41 || m == 51) {
            return `минута`;
        } else if (m == 2 || m == 3 || m == 4 || m == 22 || m == 23 || m == 24 || m == 32 || m == 33 ||
            m == 34 || m == 42 || m == 43 || m == 44 || m == 52 || m == 53 || m == 54) {
            return `минуты`;
        } else {
            return `минут`;
        }
    }

    function getNameSeconds(s) {
        if (s == 1 || s == 21 || s == 31 || s == 41 || s == 51) {
            return `секунда`;
        } else if (s == 2 || s == 3 || s == 4 || s == 22 || s == 23 || s == 24 || s == 32 || s == 33 ||
            s == 34 || s == 42 || s == 43 || s == 44 || s == 52 || s == 53 || s == 54) {
            return `секунды`;
        } else {
            return `секунд`;
        }
    }

    function setClockAndDateName(selector, endtime) {
        const timerElement = document.querySelector(selector),

            yearsElement = timerElement.querySelector('#years'),
            monthsElement = timerElement.querySelector('#months'),
            daysElement = timerElement.querySelector('#days'),
            hoursElement = timerElement.querySelector('#hours'),
            minutesElement = timerElement.querySelector('#minutes'),
            secondsElement = timerElement.querySelector('#seconds'),

            yearsNameElement = timerElement.querySelector('#yearsName'),
            monthsNameElement = timerElement.querySelector('#monthsName'),
            daysNameElement = timerElement.querySelector('#daysName'),
            hoursNameElement = timerElement.querySelector('#hoursName'),
            minutesNameElement = timerElement.querySelector('#minutesName'),
            secondsNameElement = timerElement.querySelector('#secondsName'),
            
            timeInterval = setInterval(updateClockAndDateName, 1000);

            updateClockAndDateName();

        function updateClockAndDateName() {
            const t = getTimeRemaining(endtime);

            yearsElement.innerHTML = getZero(t.yearsNumber);
            monthsElement.innerHTML = getZero(t.monthsNumber);
            daysElement.innerHTML = getZero(t.daysNumber);
            hoursElement.innerHTML = getZero(t.hoursNumber);
            minutesElement.innerHTML = getZero(t.minutesNumber);
            secondsElement.innerHTML = getZero(t.secondsNumber);

            yearsNameElement.innerHTML = getNameYears(t.yearsNumber);
            monthsNameElement.innerHTML = getNameMonths(t.monthsNumber);
            daysNameElement.innerHTML = getNameDays(t.daysNumber);
            hoursNameElement.innerHTML = getNameHours(t.hoursNumber);
            minutesNameElement.innerHTML = getNameMinutes(t.minutesNumber);
            secondsNameElement.innerHTML = getNameSeconds(t.secondsNumber);

            if (t.totalTime >=0 ) {
                clearInterval(timeInterval);
            }
        }
    }

    setClockAndDateName(id, startline);


}

export default timer;