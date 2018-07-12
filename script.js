

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

