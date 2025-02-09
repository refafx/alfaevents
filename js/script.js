// Toggle Class Active
const navbarNav = document.querySelector('.navbar-nav')
// menu di klik = nav muncul
document.querySelector('#menu').onclick = () => {
navbarNav.classList.toggle('active');
};

// klik diluar sidebar = nav menghilang
const menu = document.querySelector('#menu');

document.addEventListener('click', function(e) {
if(!menu.contains(e.target) && !navbarNav.contains(e.target))
    navbarNav.classList.remove("active")
})