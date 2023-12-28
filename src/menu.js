const button = document.getElementById('main-menu');
button.addEventListener('click', () => {
    console.log('clickd menu');
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
})