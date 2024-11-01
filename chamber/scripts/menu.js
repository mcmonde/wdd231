document.addEventListener('DOMContentLoaded', function () {
    const navMenu = document.getElementById('navMenu');
    const hamburgerMenu = document.getElementById('hamburgerMenu');

    if (hamburgerMenu && navMenu) {
        hamburgerMenu.addEventListener('click', function () {
            navMenu.classList.toggle('active');
        });
    }
});
