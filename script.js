document.addEventListener("DOMContentLoaded", function() {
    const countdownElement = document.getElementById("countdown");
    const mainContent = document.getElementById("main-content");
    const releaseDate = new Date("2024-07-01T12:00:00").getTime();

    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = releaseDate - now;

        if (distance < 0) {
            countdownElement.style.display = "none";
            mainContent.style.display = "block";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
    };

    updateCountdown();
    setInterval(updateCountdown, 1000);
});
