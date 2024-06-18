let currentIndex = 0;
let currentRotation = 0;

function showSlide(index) {
    const slides = document.querySelector('.carousel-container');
    const totalSlides = slides.children[0].children.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const slideWidth = slides.clientWidth;
    slides.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

document.getElementById('rotateBtn').addEventListener('click', ()=>{
    const slides = document.querySelector('.carousel-slide');
            const img = slides.children[currentIndex];
            currentRotation = (currentRotation + 90) % 360;
            img.style.transform = `rotate(${currentRotation}deg)`;
})

window.onload = () => {
    showSlide(currentIndex);
};