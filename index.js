let rectGradient = document.querySelector(".rectangle");

rectGradient.addEventListener("mouseover", (e) => {
  console.log(e);
  rectGradient.addEventListener("mousemove", (e) => {
    let rectMovement = e.target.getBoundingClientRect();
    let xPos = e.clientY - rectMovement.left;
    let yPos = e.clientX - rectMovement.top;
    rectGradient.style.setProperty("--x", xPos + "px");
    rectGradient.style.setProperty("--y", yPos + "px");
  });
});

// rectGradient.addEventListener("mousemove", (e) => {
//   let rectMovement = e.target.getBoundingClientRect();
//   console.log(e);
//   let xPos = e.clientY - rectMovement.left;
//   let yPos = e.clientX - rectMovement.top;
//   rectGradient.style.setProperty("--x", xPos + "px");
//   rectGradient.style.setProperty("--y", yPos + "px");
// });
