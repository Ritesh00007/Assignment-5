document.addEventListener('DOMContentLoaded', function() {
    const circle = document.querySelector('circle');
    circle.style.animationPlayState = 'running'; // Use 'paused' to pause the animation

    // Example to toggle animation on click
    circle.addEventListener('click', function() {
        if (circle.style.animationPlayState === 'paused') {
            circle.style.animationPlayState = 'running';
        } else {
            circle.style.animationPlayState = 'paused';
        }
    });
});
