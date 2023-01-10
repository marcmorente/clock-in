import "./style.css";
import { initTimer, setTimeElements } from "./components/timer.js";
import { localeDateString } from "./utils/date.js";

document.querySelector("#current-date").innerHTML = localeDateString;

let id = null;

const startButton = document.querySelector("#start");
startButton.addEventListener("click", () => {
    id = initTimer();
    startButton.disabled = true;
});

const cancelButton = document.querySelector("#cancel");
cancelButton.addEventListener("click", () => {
    setTimeElements(0, 0, 0);
    startButton.disabled = false;
    id && clearInterval(id);
});
