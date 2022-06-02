const d = document;
const toUp = d.querySelector('.toUp');
let valueScroll = null;
d.addEventListener('scroll', () => {
    valueScroll = window.scrollY;
    if (valueScroll > 800) {
        toUp.style.opacity = 1;
        toUp.style.visibility = 'visible';
    } else if (valueScroll <= 800) {
        toUp.style.opacity = 0;
        toUp.style.visibility = 'hidden';
    }
});
toUp.addEventListener('click', () => {
    valueScroll >= 800 ? window.scrollTo(0, 0) : null;
});
