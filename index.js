let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.mobile-nav-link-row');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}