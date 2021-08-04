/*========== MENU SHOW AND HIDE ==========*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/*========== MENU SHOW ==========*/
/* valide if constatnt exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })

}

/*========== MENU HIDDEN ==========*/
/* valide if constatnt exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })

}