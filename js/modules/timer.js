function timer(id, deadline) {

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



/*     function timeName() {
        const n = getTimeRemaining();

        secondsNameElement.innerHTML = timeName(n.secondsName);
    } */

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function getNameSeconds(name) {
        if (name == 1 || name == 21 || name == 31 || name == 41 || name == 51) {
            return `секунда`;
        } else if (name == 2 || name == 3 || name == 4 || name == 22 || name == 23 || name == 24 || 
            name == 32 || name == 33 || name == 34 || name == 42 || name == 43 || name == 44 ||
            name == 52 || name == 53 || name == 54) {
            return `секунды`;
        } else {
            return `секунд`;
        }
    }

    function setClock(selector, endtime) {
        const timerElement = document.querySelector(selector),
            yearsElement = timerElement.querySelector('#years'),
            monthsElement = timerElement.querySelector('#months'),
            daysElement = timerElement.querySelector('#days'),
            hoursElement = timerElement.querySelector('#hours'),
            minutesElement = timerElement.querySelector('#minutes'),
            secondsElement = timerElement.querySelector('#seconds'),
            secondsNameElement = timerElement.querySelector('#secondsName'),
            timeInterval = setInterval(updateClock, 1000);

            updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            yearsElement.innerHTML = getZero(t.yearsNumber);
            monthsElement.innerHTML = getZero(t.monthsNumber);
            daysElement.innerHTML = getZero(t.daysNumber);
            hoursElement.innerHTML = getZero(t.hoursNumber);
            minutesElement.innerHTML = getZero(t.minutesNumber);
            secondsElement.innerHTML = getZero(t.secondsNumber);
            secondsNameElement.innerHTML = getNameSeconds(t.secondsNumber);


            if (t.totalTime >=0 ) {
                clearInterval(timeInterval);
            }
        }
    }

    function getName(string) {

    }

    setClock(id, deadline);


}

export default timer;