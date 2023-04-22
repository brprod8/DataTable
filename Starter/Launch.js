let timer;
let startTime;
let elapsedTime = 0;
let isRunning = false;

// Function to display current time
function displayCurrentTime() {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  const timeElement = document.createElement('p');
  timeElement.textContent = `The time is: ${currentTime}`;
  document.body.appendChild(timeElement);
}

// Function to start the timer
function startTimer() {
  isRunning = true;
  startTime = Date.now() - elapsedTime;
  timer = setInterval(function() {
    const elapsedMilliseconds = Date.now() - startTime;
    elapsedTime = elapsedMilliseconds;
    const seconds = Math.floor(elapsedMilliseconds / 1000) % 60;
    const minutes = Math.floor(elapsedMilliseconds / 1000 / 60) % 60;
    const hours = Math.floor(elapsedMilliseconds / 1000 / 60 / 60);
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    const elapsedTimeCell = document.getElementById('elapsed-time');
    elapsedTimeCell.textContent = formattedTime;
    elapsedTimeCell.classList.add('highlight');
  }, 10);
}

// Function to stop the timer
function stopTimer() {
  isRunning = false;
  clearInterval(timer);
  document.getElementById('elapsed-time').classList.remove('highlight');
}

// Call the displayCurrentTime function
displayCurrentTime();

// Add a button to start the timer
const startButton = document.createElement('button');
startButton.textContent = 'Start Timer';
startButton.addEventListener('click', startTimer);
document.body.appendChild(startButton);

// Add a button to stop the timer
const stopButton = document.createElement('button');
stopButton.textContent = 'Stop Timer';
stopButton.addEventListener('click', stopTimer);
document.body.appendChild(stopButton);

// Add a div to display the timer
const timerDiv = document.createElement('div');
timerDiv.setAttribute('id', 'timer');
document.body.appendChild(timerDiv);
