const text = document.querySelector("#text");

text.style.display = 'block';

text.onmouseover = function() {
    this.style.display = 'none';
    timer();
};

function timer() {
    setTimeout(() => {
        text.style.display = 'block';
    }, 2000);
};