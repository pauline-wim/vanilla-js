const square = document.getElementById("square");

// square.style.backgroundColor = 'red';

square.onmouseover = function() {
  this.style.backgroundColor = 'red';
};
square.onmouseout = function() {
  this.style.backgroundColor = 'green';
};