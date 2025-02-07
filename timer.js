const countdownElement = document.getElementById('countdown');
const countdownWrapper = document.getElementById('countdown-wrapper');
const mainContent = document.getElementById('main-content');

// Variable de control para desarrollo
const skipCountdownForDevelopment = true;

function updateCountdown() {
    const targetDate = new Date('2025-02-07T11:00:00');
    const currentDate = new Date();

    if (skipCountdownForDevelopment) {
        countdownWrapper.style.display = 'none';
        mainContent.style.display = 'block';
        return;
    }

    if (currentDate >= targetDate) {
        countdownWrapper.style.display = 'none';
        mainContent.style.display = 'block';
        return;
    }

    const totalSeconds = Math.floor((targetDate - currentDate) / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s restantes.`;
}

setInterval(updateCountdown, 1000);
updateCountdown();