var statusSpan = document.getElementById("status");
var statusToggle = document.getElementById("status-toggle");
var playButton = document.getElementById("play");
var pauseButton = document.getElementById("pause");
var stopButton = document.getElementById("stop");
var minutesDisplay = document.getElementById("minutes");
var secondsDisplay = document.getElementById("seconds");
var workMinutesInput = document.getElementById("work-minutes");
var restMinutesInput = document.getElementById("rest-minutes");

var totalSeconds = 0;
var secondsElapsed = 0;
var interval;





function startTimer() {
  // Write code to start the timer here
  while (minutesDisplay > 0) {
    var minutesCounter = 24;

    var pomodoroMinutes = setInterval(function() {
      if (minutesCounter < 10) {
        minutesCounter = "0" + minutesCounter;
      }
      document.getElementById("minutes").innerHTML = minutesCounter;
      console.log(minutesCounter);
      minutesCounter--
      if (minutesCounter === -1) {
        console.log("We made it!");
        clearInterval(pomodoroMinutes);
      }
    }, 60000);
  }

  var secondsCounter = 59;

    var pomodoroCountDown = setInterval(function(){
      if (secondsCounter < 10) {
        secondsCounter = "0" + secondsCounter;
      }
    document.getElementById("seconds").innerHTML = secondsCounter;
    console.log(secondsCounter);
    secondsCounter--
    if (secondsCounter === -1) {
      console.log("Maybe?");
      clearInterval(pomodoroCountDown);
    }
  }, 1000);

  while (minutesDisplay > 0) {
    for (let i = minutesDisplay; i > 0; i--) {
      
     
    }
  }
}


  
  
        
        
      
    
  



function pauseTimer() {

}

playButton.addEventListener("click", startTimer);

pauseButton.addEventListener("click", pauseTimer);
