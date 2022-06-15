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

const projects = [
  {
    title: 'Multi Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply ummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    mobDescription: 'Lorem Ipsum is simply dummy text of the printing and Ipsum is simply ummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply ummy text of the printing and typesetting industry.',
    image: 'images/Snapshoot-Portfolio.png',
    mobImage: 'images/Snapshoot-mobile.png',
    featureList: ['html', 'bootstrap', 'Ruby'],
    seeLive: 'https://ifzyy.github.io/My-portfolio/',
    seeSource: 'https://github.com/ifzyy/My-portfolio',
  },
];

const popupWindow = document.querySelector('#extended');
function popup() {
  popupWindow.classList.toggle('extended');
  document.querySelector('#mobileh5').innerHTML = projects[0].title;
  document.querySelector('.popup-text').innerHTML = projects[0].mobDescription;
  document.querySelector('#mobimage').src = `${projects[0].mobImage}`;
  document.querySelector('#seeMobLive').href = projects[0].seeLive;
  document.querySelector('#seeMobSource').href = projects[0].seeSource;
}

function closePopUp() {
  popupWindow.classList.remove('extended');
}

const closeButton = document.querySelector('#closeButton');
closeButton.addEventListener('click', closePopUp);

const seeProject = document.querySelector('#seeproject');
seeProject.addEventListener('click', popup);

const projectButton1 = document.querySelector('#seeproject1');
projectButton1.addEventListener('click', popup);

const projectButton2 = document.querySelector('#seeproject2');
projectButton2.addEventListener('click', popup);

const projectButton3 = document.querySelector('#seeproject3');
projectButton3.addEventListener('click', popup);

const projectButton4 = document.querySelector('#seeproject4');
projectButton4.addEventListener('click', popup);

const projectButton5 = document.querySelector('#seeproject5');
projectButton5.addEventListener('click', popup);

const projectButton6 = document.querySelector('#seeproject6');
projectButton6.addEventListener('click', popup);

const popupWindowDesktop = document.querySelector('#popupDesktop');
function popupDesktop() {
  popupWindowDesktop.classList.toggle('expanded');
  document.querySelector('.desktop-h5').innerHTML = projects[0].title;
  document.querySelector('.popup-text-window').innerHTML = projects[0].description;
  document.querySelector('#popupImageDesktop').src = `${projects[0].image}`;
  document.querySelector('#seeLive').href = projects[0].seeLive;
  document.querySelector('#seeSource').href = projects[0].seeSource;
}

function closePopUpDesktop() {
  popupWindowDesktop.classList.remove('expanded');
}

const closeButtonDesktop = document.querySelector('#closepopup');
closeButtonDesktop.addEventListener('click', closePopUpDesktop);

const seeProjectDesktop = document.querySelector('#seeproject');
seeProjectDesktop.addEventListener('click', popupDesktop);

const projectDesktopButton1 = document.querySelector('#seeproject1');
projectDesktopButton1.addEventListener('click', popupDesktop);

const projectDesktopButton2 = document.querySelector('#seeproject2');
projectDesktopButton2.addEventListener('click', popupDesktop);

const projectDesktopButton3 = document.querySelector('#seeproject3');
projectDesktopButton3.addEventListener('click', popupDesktop);

const projectDesktopButton4 = document.querySelector('#seeproject4');
projectDesktopButton4.addEventListener('click', popupDesktop);

const projectDesktopButton5 = document.querySelector('#seeproject5');
projectDesktopButton5.addEventListener('click', popupDesktop);

const projectDesktopButton6 = document.querySelector('#seeproject6');
projectDesktopButton6.addEventListener('click', popupDesktop);