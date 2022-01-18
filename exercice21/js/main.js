const magicBtn = document.querySelector(".btn-success");
let square = document.querySelector("#square");

magicBtn.addEventListener("click", () => {
    square.animate([
        // keyframes
        {width: "100px"},
        {width: "500px"}
      ], {
        // timing options
        duration: 1000,
        fill: 'forwards',
    });
});

// square.animate([
//     // keyframes
//     { transform: 'translateX(0px)' },
//     { transform: 'translateX(500px)' }
//   ], {
//     // timing options
//     duration: 1000,
//     iterations: Infinity,
// });