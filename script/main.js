let menuDiv = document.querySelector(".menu-slider");

function collapse() {
  menuDiv.classList.toggle("expand");
}

let hamburgerBtn = document.querySelector("#hamburgerBtn");
let closeBtn = document.querySelector("#closeBtn");

hamburgerBtn.addEventListener("click", collapse);
closeBtn.addEventListener("click", collapse);

let menuItem1 = document.querySelector("#seePortfolio");
menuItem1.addEventListener("click", collapse);

let menuItem2 = document.querySelector("#aboutMe");
menuItem2.addEventListener("click", collapse);

let menuItem3 = document.querySelector("#contactMe");
menuItem3.addEventListener("click", collapse);
