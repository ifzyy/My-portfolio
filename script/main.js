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
    image: 'images/img-placeholder.png',
    desktopImage: 'images/orange-image.png',
    featureList: ['html', 'bootstrap', 'Ruby'],
    seeLive: 'https://ifzyy.github.io/My-portfolio/',
    seeSource: 'https://github.com/ifzyy/My-portfolio',
  },

];

const projects1 = [
  {
    title: 'Professional Art printing Data',
    desktopTitle: 'Professional Art Printing Data',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply ummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    mobDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard .',
    image: 'images/Mask-Group.png',
    desktopImage: 'images/img-Placeholder-desktop.png',
    featureList: ['html', 'bootstrap', 'Ruby'],
    seeLive: 'https://ifzyy.github.io/My-portfolio/',
    seeSource: 'https://github.com/ifzyy/My-portfolio',
  },
];

const projects2 = [
  {
    title: 'Data DashBoard HealthCare',
    mobTitle: 'Data DashBoard Health Care',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply ummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    mobDescription: 'Lorem Ipsum is simply dummy text of the printing and Ipsum is simply ummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply ummy text of the printing and typesetting industry.',
    image: 'images/Mask-Group.png',
    desktopImage: 'images/img-placeholder2.png',
    featureList: ['html', 'bootstrap', 'Ruby'],
    seeLive: 'https://ifzyy.github.io/My-portfolio/',
    seeSource: 'https://github.com/ifzyy/My-portfolio',
  },
];

const projects3 = [
  {
    title: 'Website Portfolio',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply ummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    mobDescription: 'Lorem Ipsum is simply dummy text of the printing and Ipsum is simply ummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply ummy text of the printing and typesetting industry.',
    image: 'images/img-placeholder.png',
    desktopImage: 'images/img-placeholder3.png',
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
  document.querySelector('#mobimage').src = `${projects[0].image}`;
  document.querySelector('#seeMobLive').href = projects[0].seeLive;
  document.querySelector('#seeMobSource').href = projects[0].seeSource;
}

function dynamicModal() {
  popupWindow.classList.toggle('extended');
  document.querySelector('#mobileh5').innerHTML = projects1[0].title;
  document.querySelector('.popup-text').innerHTML = projects1[0].mobDescription;
  document.querySelector('#mobimage').src = `${projects1[0].image}`;
  document.querySelector('#seeMobLive').href = projects1[0].seeLive;
  document.querySelector('#seeMobSource').href = projects1[0].seeSource;
}

function dynamicModal2() {
  popupWindow.classList.toggle('extended');
  document.querySelector('#mobileh5').innerHTML = projects2[0].mobTitle;
  document.querySelector('.popup-text').innerHTML = projects1[0].mobDescription;
  document.querySelector('#mobimage').src = `${projects2[0].desktopImage}`;
  document.querySelector('#seeMobLive').href = projects2[0].seeLive;
  document.querySelector('#seeMobSource').href = projects2[0].seeSource;
}

function dynamicModal3() {
  popupWindow.classList.toggle('extended');
  document.querySelector('#mobileh5').innerHTML = projects3[0].title;
  document.querySelector('.popup-text').innerHTML = projects1[0].mobDescription;
  document.querySelector('#mobimage').src = `${projects3[0].desktopImage}`;
  document.querySelector('#seeMobLive').href = projects3[0].seeLive;
  document.querySelector('#seeMobSource').href = projects3[0].seeSource;
}

function closePopUp() {
  popupWindow.classList.remove('extended');
}

const closeButton = document.querySelector('#closeButton');
closeButton.addEventListener('click', closePopUp);

const seeProject = document.querySelector('#seeproject');
seeProject.addEventListener('click', popup);

const projectButton1 = document.querySelector('#seeproject1');
projectButton1.addEventListener('click', dynamicModal);

const projectButton2 = document.querySelector('#seeproject2');
projectButton2.addEventListener('click', dynamicModal2);

const projectButton3 = document.querySelector('#seeproject3');
projectButton3.addEventListener('click', dynamicModal3);

const projectButton4 = document.querySelector('#seeproject4');
projectButton4.addEventListener('click', dynamicModal);

const projectButton5 = document.querySelector('#seeproject5');
projectButton5.addEventListener('click', dynamicModal2);

const projectButton6 = document.querySelector('#seeproject6');
projectButton6.addEventListener('click', dynamicModal3);

const popupWindowDesktop = document.querySelector('#popupDesktop');
function popupDesktop() {
  popupWindowDesktop.classList.toggle('expanded');
  document.querySelector('.desktop-h5').innerHTML = projects[0].title;
  document.querySelector('.popup-text-window').innerHTML = projects[0].description;
  document.querySelector('#popupImageDesktop').src = `${projects[0].desktopImage}`;
  document.querySelector('#seeLive').href = projects[0].seeLive;
  document.querySelector('#seeSource').href = projects[0].seeSource;
}

function dynamicModalDesktop() {
  popupWindowDesktop.classList.toggle('expanded');
  document.querySelector('.desktop-h5').innerHTML = projects1[0].desktopTitle;
  document.querySelector('.popup-text-window').innerHTML = projects1[0].description;
  document.querySelector('#popupImageDesktop').src = `${projects1[0].desktopImage}`;
  document.querySelector('#seeLive').href = projects1[0].seeLive;
  document.querySelector('#seeSource').href = projects1[0].seeSource;
}

function dynamicModalDesktop2() {
  popupWindowDesktop.classList.toggle('expanded');
  document.querySelector('.desktop-h5').innerHTML = projects2[0].title;
  document.querySelector('.popup-text-window').innerHTML = projects2[0].description;
  document.querySelector('#popupImageDesktop').src = `${projects2[0].desktopImage}`;
  document.querySelector('#seeLive').href = projects2[0].seeLive;
  document.querySelector('#seeSource').href = projects2[0].seeSource;
}

function dynamicModalDesktop3() {
  popupWindowDesktop.classList.toggle('expanded');
  document.querySelector('.desktop-h5').innerHTML = projects3[0].title;
  document.querySelector('.popup-text-window').innerHTML = projects3[0].description;
  document.querySelector('#popupImageDesktop').src = `${projects3[0].desktopImage}`;
  document.querySelector('#seeLive').href = projects3[0].seeLive;
  document.querySelector('#seeSource').href = projects3[0].seeSource;
}

function closePopUpDesktop() {
  popupWindowDesktop.classList.remove('expanded');
}

const closeButtonDesktop = document.querySelector('#closepopup');
closeButtonDesktop.addEventListener('click', closePopUpDesktop);

const seeProjectDesktop = document.querySelector('#seeproject');
seeProjectDesktop.addEventListener('click', popupDesktop);

const projectDesktopButton1 = document.querySelector('#seeproject1');
projectDesktopButton1.addEventListener('click', dynamicModalDesktop);

const projectDesktopButton2 = document.querySelector('#seeproject2');
projectDesktopButton2.addEventListener('click', dynamicModalDesktop2);

const projectDesktopButton3 = document.querySelector('#seeproject3');
projectDesktopButton3.addEventListener('click', dynamicModalDesktop3);

const projectDesktopButton4 = document.querySelector('#seeproject4');
projectDesktopButton4.addEventListener('click', dynamicModalDesktop);

const projectDesktopButton5 = document.querySelector('#seeproject5');
projectDesktopButton5.addEventListener('click', dynamicModalDesktop2);

const projectDesktopButton6 = document.querySelector('#seeproject6');
projectDesktopButton6.addEventListener('click', dynamicModalDesktop3);

const emailElement = document.querySelector('#email');
const emailValid = function checkEmail(email) {
  const regexp = /^[a-z]+(([a-z]+\.?([0-9]+)?\.?))+([a-z0-9])@([a-z]+\.?)+[a-z]{2,}$/;
  return regexp.test(email);
};
const isEmailValid = function validateEmail() {
  let valid = false;
  const email = emailElement.value.trim();
  if (!emailValid(email)) {
    document.querySelector('#error').innerHTML = '* Please enter a valid email.';
  } else {
    document.querySelector('#error').innerHTML = '';
    valid = true;
  }
  return valid;
};
const form = document.querySelector('#form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  let finalcheck = isEmailValid();
  if (finalcheck) {
    form.submit();
  }
});
