const noButton = document.getElementById('noButton');

function moveButton() {
    noButton.style.position = 'fixed';
    const padding = 50;
    const maxX = window.innerWidth - noButton.offsetWidth - padding;
    const maxY = window.innerHeight - noButton.offsetHeight - padding;

    const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

noButton.addEventListener('mouseover', moveButton);
noButton.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveButton();
});

function celebrate() {
    // Hide buttons and change text
    document.querySelector('.buttons').style.display = 'none';
    document.querySelector('h1').innerHTML = "YAY! <br> I knew you'd say yes my love💖(i love you btw)";
    
    // Start the rain
    setInterval(createFallingHeart, 150);
}

function createFallingHeart() {
    const heart = document.createElement('div');
    heart.classList.add('pixel-heart');
    
    // Random position across the top
    heart.style.left = Math.random() * 100 + "vw";
    
    // Randomize speed
    const duration = Math.random() * 3 + 2;
    heart.style.animationDuration = duration + "s";
    
    // Randomize size (pixelated hearts look better when larger)
    const size = Math.random() * 20 + 20; 
    heart.style.width = size + "px";
    heart.style.height = size + "px";
    
    document.body.appendChild(heart);
    
    // Clean up
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}