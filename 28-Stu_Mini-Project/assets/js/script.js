var timerElement = document.querySelector('#countdown');

function countdown() {
    var timeLeft = 60;

    var timeInterval = setInterval(function() {

        if (timeLeft >= .1) {
            timerElement.textContent = "Time Remaining: \n" + timeLeft + "s";
            timeLeft = (timeLeft - 0.1).toFixed(1);
        } else {
            timerElement.textContent = "Times Up!";
            clearInterval(timeInterval);
        }
    }, 100);
};

countdown();