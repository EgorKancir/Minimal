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

// #Observer

const decorIamge = document.querySelectorAll('.observer-image');

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src;
            observer.unobserve(entry.target)
        }
    });
}, {
    rootMargin: '5px'
});

decorIamge.forEach(element => {
    imageObserver.observe(element);
});

const allMainSection = document.querySelector('.main-observer');
const allMainSectionArr = [...allMainSection.children];

allMainSectionArr.forEach(element => {
    element.classList.add('section-off');
});

const startSectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('section-off');
            entry.target.classList.add('section-on');
            observer.unobserve(entry.target)
        }
    });
}, {
    threshold: 0.4
});
allMainSectionArr.forEach(element => {
    startSectionObserver.observe(element);
});
