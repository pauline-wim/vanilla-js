const text = document.querySelector("#text");

// text.style.fontSize = '50px';

text.onmouseover = function() {
  this.style.fontSize = '50px';
};
text.onmouseout = function() {
    this.style.fontSize = '1rem';
  };