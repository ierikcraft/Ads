document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    document.body.style.setProperty('--mouse-x', `${x}px`);
    document.body.style.setProperty('--mouse-y', `${y}px`);
});

const showUnavailableOverlay = () => {
    const userId = localStorage.getItem('user_id');
    const path = window.location.pathname;
    const isDashboardPage = path.includes('/home/') || path.includes('/iframe/index.html') || path.endsWith('/home/') || path.endsWith('/home/index.html');
    
    if (userId && isDashboardPage) {
        // Create overlay container
        const overlay = document.createElement('div');
        overlay.id = 'unavailable-overlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(10, 10, 10, 0.96);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            z-index: 9999999;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding: 2rem;
            text-align: center;
            box-sizing: border-box;
            color: #ffffff;
            font-family: 'Inter', system-ui, -apple-system, sans-serif;
        `;

        // Create inner card
        const card = document.createElement('div');
        card.style.cssText = `
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 0, 85, 0.25);
            box-shadow: 0 0 50px rgba(255, 0, 85, 0.15);
            padding: 3.5rem 2.5rem;
            border-radius: 24px;
            max-width: 550px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            animation: unavailableScaleUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            box-sizing: border-box;
        `;

        // Create icon/illustration
        const icon = document.createElement('div');
        icon.textContent = '🚫';
        icon.style.cssText = `
            font-size: 4.5rem;
            margin-bottom: 1.5rem;
            line-height: 1;
            filter: drop-shadow(0 0 15px rgba(255, 0, 85, 0.4));
        `;

        // Create Title
        const title = document.createElement('h2');
        title.innerHTML = 'AdGestor';
        title.style.cssText = `
            font-size: 2.5rem;
            font-weight: 900;
            margin: 0 0 0.5rem 0;
            background: linear-gradient(135deg, #00ff88, #00ccff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            letter-spacing: -0.03em;
        `;

        // Create message
        const message = document.createElement('p');
        message.textContent = 'Lo siento, AdGestor ya no está disponible.';
        message.style.cssText = `
            font-size: 1.3rem;
            color: #ffffff;
            margin: 0.5rem 0 1.5rem 0;
            line-height: 1.5;
            font-weight: 700;
        `;

        // Create details text
        const details = document.createElement('p');
        details.textContent = 'El servicio ha sido descontinuado permanentemente. Agradecemos su preferencia y lamentamos los inconvenientes causados.';
        details.style.cssText = `
            font-size: 0.95rem;
            color: #aaa;
            margin: 0;
            line-height: 1.6;
        `;

        // Inject keyframes to document head for scale-up animation if they don't exist
        if (!document.getElementById('unavailable-keyframes')) {
            const style = document.createElement('style');
            style.id = 'unavailable-keyframes';
            style.textContent = `
                @keyframes unavailableScaleUp {
                    from { opacity: 0; transform: scale(0.92); }
                    to { opacity: 1; transform: scale(1); }
                }
                body {
                    overflow: hidden !important; /* Disable scroll on background */
                }
            `;
            document.head.appendChild(style);
        }

        // Assemble overlay
        card.appendChild(icon);
        card.appendChild(title);
        card.appendChild(message);
        card.appendChild(details);
        overlay.appendChild(card);

        // Prevent keyboard events inside the overlay
        overlay.addEventListener('keydown', (e) => e.preventDefault());
        
        // Append overlay to body
        document.body.appendChild(overlay);

        // Trap focus and prevent tab navigation outside the modal
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                e.preventDefault();
            }
        }, { capture: true });
        
        // Disable scroll and touch move on body
        document.body.style.overflow = 'hidden';
        document.body.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });
    }
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', showUnavailableOverlay);
} else {
    showUnavailableOverlay();
}

