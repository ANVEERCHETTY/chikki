document.addEventListener('mousemove', function(e) {
    document.body.style.transform = `translate(${e.clientX / 50}px, ${e.clientY / 50}px)`;
});

function selectImage(index) {
    const images = document.querySelectorAll('.slider-image');
    images.forEach((img, i) => {
        img.style.opacity = i === index ? '11' : '0.5';
    });
}

window.onload = function() {
    const backgroundMusic = document.getElementById('background-music');
    backgroundMusic.play();
};

