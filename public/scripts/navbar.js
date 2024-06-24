document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu-button');
    const navLinks = document.getElementById('nav-links');
    const menuIconOpen = menuButton.querySelector('.menu-icon-open');
    const menuIconClose = menuButton.querySelector('.menu-icon-close');

    menuButton.addEventListener('click', function () {
        navLinks.classList.toggle('open');
        menuIconOpen.classList.toggle('hidden');
        menuIconClose.classList.toggle('hidden');
    });
});
