let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};



window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

const dropdown = document.querySelector('.dropdown');
const dropdownMenu = dropdown.querySelector('.dropdown-menu');

dropdown.addEventListener('mouseover', 
    () => {
        dropdownMenu.computedStyleMap.display = 'block';
    });

dropdown.addEventListener('mouseout', () => {
    dropdownMenu.computedStyleMap.display = 'none';
});