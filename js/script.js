document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', revealContent);
});

function revealContent() {
    var section = document.getElementById('about');
    var position = section.getBoundingClientRect().top;

    if (position < window.innerHeight / 1.5) {
        section.style.opacity = 1;
        section.style.transform = 'translateX(0)';
    }
}



