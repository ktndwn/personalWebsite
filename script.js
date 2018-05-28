
/*
var distance = 50;
var speed = 25;
var scrollPosition = 0;

function autoScrollTo(link) {
  var currentPosition = window.pageYOffset;
  var targetPosition = document.getElementById(link).offsetTop;
}


function autoScrollTo(link) {
  link.scrollIntoView({block: "start", behavior: "smooth"});
}
*/

document.getElementById('fxreellink').addEventListener('click', scrollToReel);
document.getElementById('weblink').addEventListener('click', scrollToWeb);
document.getElementById('worklink').addEventListener('click', scrollToHistory);
document.getElementById('contactlink').addEventListener('click', scrollToContact);

``
function scrollToReel() {
  document.getElementById('fxreel').scrollIntoView({block: 'start', behavior: 'smooth'})
}

function scrollToWeb() {
  document.getElementById('web').scrollIntoView({block: 'start', behavior: 'smooth'})
}

function scrollToHistory() {
  document.getElementById('history').scrollIntoView({block: 'start', behavior: 'smooth'})
}

function scrollToContact() {
  document.getElementById('contact').scrollIntoView({block: 'start', behavior: 'smooth'})
}

