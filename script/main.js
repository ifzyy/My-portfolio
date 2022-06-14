const menuDiv = document.querySelector('.menu-slider');

function collapse() {
  menuDiv.classList.toggle('expand');
}

const hamburgerBtn = document.querySelector('#hamburgerBtn');
const closeBtn = document.querySelector('#closeBtn');

hamburgerBtn.addEventListener('click', collapse);
closeBtn.addEventListener('click', collapse);

const menuItem1 = document.querySelector('#seePortfolio');
menuItem1.addEventListener('click', collapse);

const menuItem2 = document.querySelector('#aboutMe');
menuItem2.addEventListener('click', collapse);

const menuItem3 = document.querySelector('#contactMe');
menuItem3.addEventListener('click', collapse);
