/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */
var correctColor = '';
var countCorrects = 0;
var countIncorrects = 0;

reanudeClock();
resetGame();

document.querySelectorAll('.square').forEach(item => {
  item.addEventListener('click', event => {
    var color = item.style.backgroundColor;
    var exampleDivColor = document.getElementById('example-div').style.backgroundColor;
    if (color == exampleDivColor) {
      countCorrects++;
      var span = document.getElementById('correctas');
      span.innerText = countCorrects;
    } else {
      countIncorrects++;
      var span = document.getElementById('incorrectas');
      span.innerText = countIncorrects;
    }
    resetGame();
  })
})

function stopClock() {
  console.log("Stop Clock");
  clearInterval(intervalId);
}

function reanudeClock() {
  console.log("Reanude Clock");
  intervalId = window.setInterval(function () {
    // call your function here
    const span = document.getElementById('text');
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = time;
    span.innerText = dateTime;
  }, 1000);
}

function resetGame() {
  var squares = document.getElementsByClassName('square');
  var colors = [];
  for (let i = 0; i < squares.length; i++) {
    colors[i] = random_rgba();
    squares[i].style.backgroundColor = colors[i];
  }

  var example = document.getElementById('example-text');
  i = Math.round(Math.random() * 5);
  var text = colors[i];
  example.innerText = text;

  var exampleDiv = document.getElementById('example-div');
  exampleDiv.style.backgroundColor = colors[i];
  correctColor = colors[i];
}

function random_rgba() {
  var o = Math.round, r = Math.random, s = 255;
  return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',1)';
}