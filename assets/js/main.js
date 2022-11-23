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
    const notification = d.querySelector('.notification');
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
        'https://mailer-4bbi.onrender.com',
        config
    );
    res = await data.json();
    if (data.status !== 200) {
        notification.style.visibility = 'visible';
        notification.style.opacity = 1;
        notification.style.transition = '0.5s ease';
        notification.className += ' error';
        notification.innerHTML = `
            <p class="textNotification">Hubo un error al enviar el mensaje</p>
        `;
    } else {
        notification.style.visibility = 'visible';
        notification.style.opacity = 1;
        notification.style.transition = '0.5s ease';
        notification.className += ' success';
        notification.innerHTML = `
            <p class="textNotification">${res.msg}</p>
        `;
    }
    email.value = '';
    subject.value = '';
    message.value = '';

    setTimeout(() => {
        notification.className = 'notification';
        notification.style.opacity = 0;
        notification.style.transition = '0.5s ease';
        notification.style.visibility = 'hidden';
    }, 10000);
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    send();
});
