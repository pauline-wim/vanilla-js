const magicBtn = document.querySelector(".btn-success");
let input = document.querySelector("input");

magicBtn.addEventListener("click", () => {
    input.removeAttribute('disabled');
});