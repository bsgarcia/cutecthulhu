document.addEventListener('DOMContentLoaded', function () {
    const text = document.querySelector('.text');
    const radius = 150; // Radius of the wheel
    const textContent = text.textContent;
    const numChars = textContent.length;
    const angleStep = 360 / numChars;

    // Create the spinning effect
    function createSpinningText() {
        text.innerHTML = ''; // Clear existing text

        for (let i = 0; i < numChars; i++) {
            const char = document.createElement('span');
            char.textContent = textContent[i];
            char.style.position = 'absolute';
            char.style.transform = `rotate(${i * angleStep}deg) translate(${radius}px) rotate(-${i * angleStep}deg)`;
            text.appendChild(char);
        }
    }

    createSpinningText();
});
