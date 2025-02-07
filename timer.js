const countdownElement = document.getElementById('countdown');
const countdownWrapper = document.getElementById('countdown-wrapper');
const mainContent = document.getElementById('main-content');
const cardContainer = document.getElementById('card-container');
const card = document.getElementById('card');

// Variable de control para desarrollo
const skipCountdownForDevelopment = false;


// Detectar cuando el usuario ve el main-content
function observeMainContentVisibility() {
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
        openEnvelopeAnimation();
        observer.unobserve(entry.target); // Detener observación después de activar la animación
    }
});
}, { threshold: 0.5 });

observer.observe(mainContent);
}

function updateCountdown() {
const targetDate = new Date('2025-02-07T17:05:00');
const currentDate = new Date();

if (skipCountdownForDevelopment) {
countdownWrapper.style.display = 'none';
mainContent.style.display = 'block';
observeMainContentVisibility(); // Comenzar a observar cuando se muestre mainContent
return;
}

if (currentDate >= targetDate) {
countdownWrapper.style.display = 'none';
mainContent.style.display = 'block';
observeMainContentVisibility();
return;
}

const totalSeconds = Math.floor((targetDate - currentDate) / 1000);
const days = Math.floor(totalSeconds / 86400);
const hours = Math.floor((totalSeconds % 86400) / 3600);
const minutes = Math.floor((totalSeconds % 3600) / 60);
const seconds = totalSeconds % 60;

countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s restantes.`;
}

function openEnvelopeAnimation() {
cardContainer.classList.add('envelope-open');
}

setInterval(updateCountdown, 1000);
updateCountdown();

window.showPopup = function(message, type = 'info', duration = 0) {
    const popup = document.createElement('div');
    popup.textContent = message;
    popup.classList.add('popup-message');
    popup.style.backgroundColor = type === 'success' ? '#27ae60' : '#c0392b';

    document.body.appendChild(popup);

    if (duration > 0) {
        setTimeout(() => {
            popup.remove();
        }, duration);
    }
};
