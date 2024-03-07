const iconMenu = document.querySelector('.menu-icon');
if (iconMenu) {
    const headerMenu = document.querySelector('.header');
    const menuBody = document.querySelector('.menu-body');
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        headerMenu.classList.toggle('_active');
    });
}