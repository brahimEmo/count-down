
var countdownElement = document.getElementById('countdown');
countdownElement.style.display = 'none';

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('startButton').addEventListener('click', startCountdown);
});

function startCountdown() {
  const hourInput = document.getElementById('hour');
  const minuteInput = document.getElementById('minute');
  const secondInput = document.getElementById('second');

  let hour = parseInt(hourInput.value);
  let minute = parseInt(minuteInput.value);
  let second = parseInt(secondInput.value);

  if (isNaN(hour)) {
    hour = 0;
  }
  if (isNaN(minute)) {
    minute = 0;
  }
  if (isNaN(second)) {
    second = 0;
  }

  let totalSeconds = hour * 3600 + minute * 60 + second;

  const countdownInterval = setInterval(() => {
    if (totalSeconds <= 0) {
      clearInterval(countdownInterval);
      countdownElement.textContent = '!انتهى العد التنازلي';

      countdownElement.style.display = 'none';
    } else {
      const hoursRemaining = Math.floor(totalSeconds / 3600);
      const minutesRemaining = Math.floor((totalSeconds % 3600) / 60);
      const secondsRemaining = totalSeconds % 60;

      countdownElement.textContent = `${hoursRemaining.toString().padStart(2, '0')} : ${minutesRemaining.toString().padStart(2, '0')} : ${secondsRemaining.toString().padStart(2, '0')}`;

      totalSeconds--;

      countdownElement.style.display = 'block';
    }
  }, 1000);
}