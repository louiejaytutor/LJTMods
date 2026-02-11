let isDark = localStorage.getItem('dark_mode') === 'true';
const path = window.location.pathname.includes('/post/') ? '../../' : '';

fetch(path + "games-list.html")
    .then(res => res.text())
    .then(html => {
    const gamesList = document.getElementById("games-list");
    gamesList.innerHTML = html;
    
    const items = gamesList.querySelectorAll(".post-item");
    items.forEach(item => {
        const originalHref = item.getAttribute("href");
        item.setAttribute("href", path + originalHref);
    });
});

function applyTheme() {
    const theme = document.getElementById('theme');
    const logo = document.getElementById('logo');
    const label = document.getElementById("toggle-label");
    if (isDark) {
        theme.href = path +'static/css/dark.css';
        logo.src = path +'static/img/logo-1.png';
        label.textContent = "Dark Mode: On";
    }
    else {
        theme.href = path +'static/css/light.css';
        logo.src = path +'static/img/logo.png';
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