const icon = document.getElementsByClassName('spannyboy');
icon.addEventListener('mouseenter', () => {
    icon.style.cursor = 'pointer';
    icon.style.backgroundColor = 'gray';
    icon.style.opacity = '0.5';
})