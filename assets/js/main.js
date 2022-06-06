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

let form = d.querySelector('#contact');
const send = async () => {
    const email = d.querySelector('#email');
    const subject = d.querySelector('#subject');
    const message = d.querySelector('#message');
    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email.value,
            subject: subject.value,
            message: message.value,
        }),
    };
    data = await fetch(
        'https://mail-sender-serv.herokuapp.com/mailing',
        config
    );
    console.log(await data.json());
    email.value = '';
    subject.value = '';
    message.value = '';
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    send();
});
