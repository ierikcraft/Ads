document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    document.body.style.setProperty('--mouse-x', `${x}px`);
    document.body.style.setProperty('--mouse-y', `${y}px`);
});
