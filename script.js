// JavaScript for interactivity (e.g., smooth scrolling)
// You can add more functionality as needed
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);

        if (target) {
            window.scrollTo({
                top: target.offsetTop - 50, // Adjust as needed
                behavior: 'smooth',
            });
        }
    });
});
