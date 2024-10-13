const navMenu = document.getElementById('navMenu');
const hamburgerMenu = document.getElementById('hamburgerMenu');

// Toggle mobile menu
hamburgerMenu.addEventListener('click', function () {
    navMenu.classList.toggle('active');
});