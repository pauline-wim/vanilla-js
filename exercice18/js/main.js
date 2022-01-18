const magicBtn = document.querySelector(".btn-success");
let text = document.querySelector("#text");

magicBtn.addEventListener("click", () => {
    if (text.style.display === 'block') {
        text.style.display = 'none';
		return;
	} else {
        text.style.display = 'block';
    };
});