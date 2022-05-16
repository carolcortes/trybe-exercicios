const header = document.querySelector('#header-container');
header.style.backgroundColor = 'green';

const important = document.querySelector('.emergency-tasks');
important.style.backgroundColor = 'pink';

const titleImportant = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < titleImportant.length; index += 1) {
    titleImportant[index].style.backgroundColor = 'purple';
}

const noEmergency = document.getElementsByClassName('no-emergency-tasks')[0];
noEmergency.style.backgroundColor = 'yellow';

const noEmergencyTitle = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < noEmergencyTitle.length; index += 1) {
    noEmergencyTitle[index].style.backgroundColor = 'black';
}

const rodape = document.getElementById('footer-container');
rodape.style.backgroundColor = 'olive';
