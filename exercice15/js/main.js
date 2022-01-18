const magicBtn = document.querySelector(".btn-success");
const text = document.getElementById("text");

magicBtn.addEventListener("click", () => {
    text.classList.add("float-right");
});