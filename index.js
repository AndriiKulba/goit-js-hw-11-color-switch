const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const bodyRef = document.querySelector("body");
const btnStartRef = document.querySelector('button[data-action ="start"]');

const btnStopRef = document.querySelector('button[data-action ="stop"]');

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const handleBtn = {
  intervalId: null,
  Start() {
    this.intervalId = setInterval(() => {
      let randomNum = randomIntegerFromInterval(0, colors.length);
      bodyRef.style.background = colors[randomNum];
      btnStartRef.disabled = true;
    }, 1000);
  },
  Stop() {
    clearInterval(this.intervalId);
    btnStartRef.disabled = false;
  },
};

btnStartRef.addEventListener("click", handleBtn.Start.bind(handleBtn));
btnStopRef.addEventListener("click", handleBtn.Stop.bind(handleBtn));
