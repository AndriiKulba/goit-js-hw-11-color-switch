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
btnStartRef.addEventListener("click", handleStart);
btnStopRef.addEventListener("click", handleStop);
console.dir(btnStartRef);
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function handleStart() {
  const intervalId = setInterval(() => {
    let randomNum = randomIntegerFromInterval(0, colors.length);
    bodyRef.style.background = colors[randomNum];
    btnStartRef.disabled = true;
    console.dir(btnStartRef);
  }, 1000);
}
function handleStop() {
  setInterval(() => {
    let randomNum = randomIntegerFromInterval(0, colors.length);
    bodyRef.style.background = colors[randomNum];
    btnStartRef.disabled = true;
    console.dir(btnStartRef);
  }, 1000);
}
