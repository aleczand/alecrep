document.addEventListener('DOMContentLoaded', function() {
    const photos = document.querySelectorAll('.photo');
    let currentBackground = 'images/background.jpg';
    
    photos.forEach(photo => {
        const randomDelay = Math.random();
        photo.style.setProperty('--random', randomDelay);

        photo.addEventListener('mouseover', function() {
            const newBackground = `images/${photo.getAttribute('data-background')}`;
            if (currentBackground !== newBackground) {
                const slide = document.createElement('div');
                slide.classList.add('slide-background');
                slide.style.backgroundImage = `url('${newBackground}')`;
                document.body.appendChild(slide);

                slide.addEventListener('animationend', function() {
                    document.body.style.backgroundImage = `url('${newBackground}')`;
                    document.body.removeChild(slide);
                     currentBackground = newBackground;
                });
            }
        });

        photo.addEventListener('mouseout', function() {
            // Optional: reset background on mouse out
        });
    });
});
