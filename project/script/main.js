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

    let lastScrollTop = 0;
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            navbar.classList.add('hidden');
        } else {
            navbar.classList.remove('hidden');
        }

        lastScrollTop = scrollTop;
    });
});