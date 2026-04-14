const SetupSpotlightEffect = (buttonElement) => {
    if (buttonElement._spotlightInit) return;
    buttonElement._spotlightInit = true;

    buttonElement.innerHTML = `<span class="spotlight__wrap">${buttonElement.innerHTML}</span>`;

    setTimeout(() => {
        buttonElement.classList.add('mounted');
    }, 100);

    buttonElement.addEventListener('mousemove', (e) => {
        const rect = buttonElement.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        buttonElement.style.setProperty('--mouse-x', x + 'px');
        buttonElement.style.setProperty('--mouse-y', y + 'px');
    });
};

function InitSpotlights() {
    document.querySelectorAll('.spotlight').forEach(SetupSpotlightEffect);
}

document.addEventListener('DOMContentLoaded', InitSpotlights);
