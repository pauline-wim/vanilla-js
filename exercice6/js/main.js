const text = document.getElementById("text");
const textContent = "Konexio!";

text.onmouseover = function() {
    text.innerHTML += textContent;
};
text.onmouseout = function() {
    text.innerHTML = text.innerHTML.replace('Konexio!', '');
};