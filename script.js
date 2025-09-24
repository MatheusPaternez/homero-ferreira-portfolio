document.addEventListener('DOMContentLoaded', () => {
    // Select buttons
    const playButtons = document.querySelectorAll('.play-button');

    // Interaction after click
    playButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Find the audio element very next to the button
            const audio = button.parentElement.querySelector('audio');

            // Add 'controls'
            audio.setAttribute('controls', 'controls');

            // Start music
            audio.play();

            // Remove the button after you click
            button.style.display = 'none';
        });
    });
});