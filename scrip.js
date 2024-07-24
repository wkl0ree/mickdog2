const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slide = document.querySelector('.carousel-slide');

let counter = 0;

nextBtn.addEventListener('click', () => {
    if (counter >= 2) return;
    counter++;
    slide.style.transform = `translateX(${-counter * 100}%)`;
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    counter--;
    slide.style.transform = `translateX(${-counter * 100}%)`;
});