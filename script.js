/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    //     reset: true
});

sr.reveal('.home__data, .about__subtitle, .skills__subtitle, .skills__names, .projects__title, .education__content, .achievements__list, .certifications__list', {});
sr.reveal('.home__img, .about__text, .skills__list, .projects__data', {
    delay: 400
});
sr.reveal('.home__social-icon', {
    interval: 200
});
sr.reveal('.contact__input', {
    interval: 200
});


/*==================== EMAIL JS CONTACT FORM ====================*/
function sendEmail() {
    Email.send({
        // Note: This is a public token. For it to work, you must authorize your domain on smtpjs.com
        SecureToken: "e68f66ee-3203-442e-a0eb-16b08f85550e",
        To: 'meghrajbhosale28@gmail.com',
        From: "adityagurav54@gmail.com",
        Subject: "Hey Meghraj, New Contact Form Enquiry from Portfolio",
        Body: "<b>Name:</b> " + document.getElementById("name").value +
            "<br><b>Email:</b> " + document.getElementById("maill").value +
            "<br><b>Message:</b><br>" + document.getElementById("message").value,
    })
    .then(function (message) {
        if (message === 'OK') {
            alert("Your message has been sent successfully!");
            document.querySelector('.contact__form').reset(); // Reset form after sending
        } else {
            alert("Failed to send message. Please try again later.");
        }
    });
}
