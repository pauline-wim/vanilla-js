const magicBtn = document.querySelector(".btn-success");
const square = document.getElementById("square");

magicBtn.addEventListener("click", () => {
    square.style.backgroundColor = 'red';
});