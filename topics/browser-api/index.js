// ---------------------------
// setInterval e clearInterval

let counter = 0;
function intervalCallback() {
  counter++;
  console.log("Quantas vezes o intervalo foi chamado:", counter);
}

let intervalId;

function startInterval() {
  intervalId = setInterval(intervalCallback, 1000);
}

function stopInterval() {
  clearInterval(intervalId);
}

// ---------------------------
// setTimeout

function startTimer() {
  setTimeout(() => window.alert("O tempo terminou"), 1000);
}
