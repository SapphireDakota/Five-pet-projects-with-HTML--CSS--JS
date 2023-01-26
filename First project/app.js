const slides = [...document.querySelectorAll('.slide')]
slides.forEach(e => e.addEventListener('click', () => {
    slides.forEach(e => e.classList.remove('active'));
    e.classList.add('active');
}))