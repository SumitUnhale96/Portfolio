document.addEventListener('DOMContentLoaded', (event) => {
    const textArray = [
        "A Frontend Developer",
        "Computer Science Student"
    ];
    let currentIndex = 0;
    const textElement = document.getElementById('changingText');

    setInterval(() => {
        textElement.classList.add('hide');
        
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % textArray.length;
            textElement.textContent = textArray[currentIndex];
            textElement.classList.remove('hide');
        }, 1000);
    }, 3000);
});