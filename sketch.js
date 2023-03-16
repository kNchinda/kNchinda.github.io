// this is for your game/web toy

/* make a maze game */
var maze = document.createElement('div');
maze.style.width = '500px';
maze.style.height = '500px';
maze.style.border = '1px solid black';
maze.style.position = 'relative';
document.body.appendChild(maze);
/* Make the maze in the center */
maze.style.margin = '0 auto';
/* add a timer for one minute that works */
var timer = document.createElement('div');
timer.innerHTML = 'Time Left: 60';
timer.style.fontSize = '30px';
timer.style.color = 'darkgreen';
document.body.appendChild(timer);
/* put the timer on the top right */
timer.style.position = 'absolute';
timer.style.top = '0px';
timer.style.right = '0px';
/* put a start button so then the player can press it to star the game */
var start = document.createElement('button');
start.innerHTML = 'Start';
start.style.fontSize = '30px';
start.style.color = 'darkgreen';
document.body.appendChild(start);
/* when the start button is pressed, start the timer */
start.addEventListener('click', function() {
  var timeLeft = 60;
  var timerId = setInterval(function() {
    timeLeft--;
    timer.innerHTML = 'Time Left: ' + timeLeft;
    if (timeLeft === 0) {
      clearInterval(timerId);
    }
  }, 1000);
});
/* make the policeman sprite move with the keys that goes left right and up and down */
var policeman = document.createElement('div');
policeman.style.width = '50px';
policeman.style.height = '50px';
policeman.style.backgroundImage = 'url("policeman.png")';
policeman.style.position = 'absolute';
policeman.style.left = '0px';
policeman.style.top = '0px';
maze.appendChild(policeman);