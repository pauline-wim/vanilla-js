const magicBtn = document.querySelector(".btn-success");
const text = document.querySelector("#text");

function displayText() {
    text.style.display = 'block';
};

magicBtn.addEventListener("click", () => {
	displayText()
});