// Frank Diaz, DIG 2930, Professor Kahn Mai

// My code was inspired by: http://codingwithsara.com/stopwatch-with-javascript/
// All credit goes to the person above.

// Create two variables that will display the current satus and default time on the stopwatch.
var timeStatus = 0;
var time = 0;

// Declare a function that will setup the start button.
function startTime() {
    timeStatus = 1;
    document.querySelector(".startButton").disabled = true;
    clockTimer();
}

// Declare a function that will set up the stop button.
function zaWarudo() {
    timeStatus = 0;
    document.querySelector(".startButton").disabled = false;
/* 

        .-------.
      .'         `.
    .'             `.
    |.-. .-. .-. .-.|
    |`-.  |  | | |-'|
    |`-'  '  `-' '  |
    '               '
     `.           .'.''.  .''.
       `._______.'   __   __
           | | .----/  \ /  \---.
           | | |   |    |    |  |____
           | | |   |`--''`--'| /  |  \_
         ,----.|   \  O | O  _ |  |  | \
         | ---'|    '._/ \_.| `|  |  | |
         \.---'|            |  | `- ,| |
          `---'|            | :        |
           | | |            |  '._.--  ;
           | | |    .      .:      `  /
           '-' |     '....'  `.______/
               |                |
               |                |
               `----------------'
                   ||      ||fsr
                   ||      ||
            _.---'' '-, ,-' ''---._
           /      __..' '..__      \
           '---''`           `''---' 
           
                                     */
}

// Declare a function that will set up the reset button.
function biteZaDusto() {
    timeStatus = 0;
    time = 0;
    document.querySelector(".startButton").disabled = false;
    document.querySelector(".default-time").innerHTML = "00:00:00";
// killer queen daisan no bakudan bites za dusto
}

// Declare a function below that will create the timer's calculations.
function clockTimer() {
    if(timeStatus == 1) {
        setTimeout(function() {
            time++;
            var minutes = Math.floor(time/100/60);
            var seconds = Math.floor(time/100);
            var nanoSeconds = time % 100;
            
            if(minutes < 10) {
                minutes = "0" + minutes;
            }
            if (seconds >= 60) {
                seconds = seconds % 60;
            }
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            
            document.querySelector(".default-time").innerHTML = minutes + ":" + seconds + ":" + nanoSeconds;
            clockTimer();
            
        },10);
    }
}

// Create an event listener that will allow the user to utilize the stopwatch with the SPACE bar.
document.onkeydown = function(event) {
    if (event) {
        if (event.keyCode == 32 || event.which == 32) {
            if(timeStatus == 1) {
                zaWarudo();
            } else if (timeStatus == 0) {
                startTime();
            }
        }
    }
};