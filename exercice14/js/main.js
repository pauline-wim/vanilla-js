const magicBtn = document.querySelector(".btn-success");
const text = document.getElementById("text");
const float = document.querySelector(".float-right");

magicBtn.addEventListener("click", () => {
    text.setAttribute("class", "float-right");
});

// function floatingText() {
//     if (float) {
//         console.log("left");
//         text.removeAttribute("class", "float-right");
//     } else {
//         console.log("right");
//         text.setAttribute("class", "float-right");

//     };
// }

// magicBtn.onclick = function() {
//     floatingText()
// };