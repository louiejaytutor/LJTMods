let isDark = localStorage.getItem('dark_mode') === 'true';

const path = window.location.pathname.includes('/post/') ? '../../' : '';

const gtasanandreas_path = window.location.pathname.includes('/gta-san-andreas');
const nba2k11_path = window.location.pathname.includes('/nba-2k11');
const nba2k14_path = window.location.pathname.includes('/nba-2k14');

fetch(path + "games-list.html")
    .then(res => res.text())
    .then(html => {
    const gamesList = document.getElementById("games-list");
    gamesList.innerHTML = html;

    const items = gamesList.querySelectorAll(".post-item");
    items.forEach((item, i) => {
        const originalHref = item.getAttribute("href");
        item.setAttribute("href", path + originalHref);
        if (i === 0 && gtasanandreas_path) item.classList.add("active");
        if (i === 1 && nba2k11_path) item.classList.add("active");
        if (i === 2 && nba2k14_path) item.classList.add("active");
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