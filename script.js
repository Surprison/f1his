const images = [
    '10s.jpg',
    '60s.jpg',
    '90s.jpg',
    'f1-1970-watk70s.jpg',
    'early-races.avif',
];

let currentImageIndex = 0;

function changeBackground() {
    const homeSection = document.getElementById('home');
    const newImage = document.createElement('div');
    newImage.className = 'background-image';
    newImage.style.backgroundImage = `url(${images[currentImageIndex]})`;

    homeSection.appendChild(newImage);

    setTimeout(() => {
        newImage.classList.add('fade-in');
    }, 50);

    setTimeout(() => {
        const backgroundImages = homeSection.querySelectorAll('.background-image');
        if (backgroundImages.length > 1) {
            homeSection.removeChild(backgroundImages[0]);
        }
    }, 10500);

    currentImageIndex = (currentImageIndex + 1) % images.length;
}

document.addEventListener('DOMContentLoaded', function() {
    changeBackground();
    setInterval(changeBackground, 10000); 
});
