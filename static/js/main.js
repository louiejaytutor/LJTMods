let isDark = localStorage.getItem('dark_mode') === 'true';

function applyTheme() {
    const theme = document.getElementById('theme');
    const logo = document.getElementById('logo');
    const label = document.getElementById("toggle-label");

    const post = window.location.pathname.includes('/post/') ? '../../' : '';

    if (isDark) {
        theme.href = post +'static/css/dark.css';
        logo.src = post +'static/img/logo-1.png';
        label.textContent = "Dark Mode: On";
    }
    else {
        theme.href = post +'static/css/light.css';
        logo.src = post +'static/img/logo.png';
        label.textContent = "Dark Mode: Off";
    }
}

function setDarkMode() {
    if (isDark) {
        localStorage.setItem('dark_mode', false);
        isDark = false;
        applyTheme(false);
    }
    else {
        localStorage.setItem('dark_mode', true);
        isDark = true;
        applyTheme(true);
    }
}

applyTheme(isDark);

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.onscroll = function() {
    const scrollBtn = document.getElementById("scrollToTopBtn");

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollBtn.classList.add("show");
    }
    else {
        scrollBtn.classList.remove("show");
    }
};