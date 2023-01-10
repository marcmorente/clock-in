export const setTimeElements = (hours, minutes, seconds) => {
    document.querySelector("#hours").innerHTML =
        hours > 9 ? hours : `0${hours}`;
    document.querySelector("#minutes").innerHTML =
        minutes > 9 ? minutes : `0${minutes}`;
    document.querySelector("#seconds").innerHTML =
        seconds > 9 ? seconds : `0${seconds}`;
};

export const initTimer = () => {
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    return setInterval(() => {
        seconds++;

        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }

        if (minutes === 60) {
            hours++;
            minutes = 0;
        }

        setTimeElements(hours, minutes, seconds);
    }, 1000);
};
