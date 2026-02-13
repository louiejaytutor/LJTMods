let isDark = localStorage.getItem('dark_mode') === 'true';
let windowIsDark = window.matchMedia('(prefers-color-scheme: dark)');

function ApplyTheme() {
    const theme = document.getElementById('theme');
    const logo = document.getElementById('logo');
    const label = document.getElementById("toggle-label");
    if (isDark) {
        theme.href = 'Public/css/dark.css';
        logo.src = 'Public/img/logo-1.png';
        label.textContent = "Dark Mode: On";
    }
    else {
        theme.href = 'Public/css/light.css';
        logo.src = 'Public/img/logo.png';
        label.textContent = "Dark Mode: Off";
    }
}

ApplyTheme(isDark);

function SetDarkMode() {
    if (isDark) {
        localStorage.setItem('dark_mode', false);
        isDark = false;
        ApplyTheme(false);
    }
    else {
        localStorage.setItem('dark_mode', true);
        isDark = true;
        ApplyTheme(true);
    }
}

windowIsDark.addEventListener('change', (e) => {
    const favicon = document.querySelector('link[rel="icon"]');
    const appleIcon = document.querySelector('link[rel="apple-touch-icon"]');
    if (e.matches) {
        favicon.href = 'Public/img/logo-1.png';
        appleIcon.href = 'Public/img/logo-1.png';
    }
    else {
        favicon.href = 'Public/img/logo.png';
        appleIcon.href = 'Public/img/logo.png';
    }
});

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

function FetchGamesList() {
    fetch("Views/Partials/GamesList.html").then(result => result.text()).then(html => {
        document.getElementById("games-list").innerHTML = html;
    });
}

function FetchModPacksList(gameName) {
    if (gameName === "gta-san-andreas") {
        fetch("Views/GTASanAndreas/Partials/ModPacksList.html").then(result => result.text()).then(html => {
            document.getElementById("mod-packs-list").innerHTML = html;
        });
    }
    else if (gameName === "nba-2k11") {
        fetch("Views/NBA2K11/Partials/ModPacksList.html").then(result => result.text()).then(html => {
            document.getElementById("mod-packs-list").innerHTML = html;
        });
    }
    else if (gameName === "nba-2k14") {
        fetch("Views/NBA2K14/Partials/ModPacksList.html").then(result => result.text()).then(html => {
            document.getElementById("mod-packs-list").innerHTML = html;
        });
    }
    else if (gameName === "stickman-basketball") {
        fetch("Views/StickmanBasketball/Partials/ModPacksList.html").then(result => result.text()).then(html => {
            document.getElementById("mod-packs-list").innerHTML = html;
        });
    }
}

function FetchIndividualModsList(gameName) {
    if (gameName === "gta-san-andreas") {
        fetch("Views/GTASanAndreas/Partials/IndividualModsList.html").then(result => result.text()).then(html => {
            document.getElementById("individual-mods-list").innerHTML = html;
        });
    }
    else if (gameName === "nba-2k11") {
        fetch("Views/NBA2K11/Partials/IndividualModsList.html").then(result => result.text()).then(html => {
            document.getElementById("individual-mods-list").innerHTML = html;
        });
    }
    else if (gameName === "nba-2k14") {
        fetch("Views/NBA2K14/Partials/IndividualModsList.html").then(result => result.text()).then(html => {
            document.getElementById("individual-mods-list").innerHTML = html;
        });
    }
    else if (gameName === "stickman-basketball") {
        fetch("Views/StickmanBasketball/Partials/IndividualModsList.html").then(result => result.text()).then(html => {
            document.getElementById("individual-mods-list").innerHTML = html;
        });
    }
}

function FetchModsList(gameName) {
    if (gameName === "gta-san-andreas") {
        fetch("Views/GTASanAndreas/Partials/ModsList.html").then(result => result.text()).then(html => {
            document.getElementById("mods-list").innerHTML = html;
        });
    }
    else if (gameName === "nba-2k11") {
        fetch("Views/NBA2K11/Partials/ModsList.html").then(result => result.text()).then(html => {
            document.getElementById("mods-list").innerHTML = html;
        });
    }
    else if (gameName === "nba-2k14") {
        fetch("Views/NBA2K14/Partials/ModsList.html").then(result => result.text()).then(html => {
            document.getElementById("mods-list").innerHTML = html;
        });
    }
    else if (gameName === "stickman-basketball") {
        fetch("Views/StickmanBasketball/Partials/ModsList.html").then(result => result.text()).then(html => {
            document.getElementById("mods-list").innerHTML = html;
        });
    }
}

function FetchModDetails(gameName, id) {
    if (gameName === "gta-san-andreas") {
        fetch("Views/GTASanAndreas/Partials/" + id + ".html").then(result => result.text()).then(html => {
            document.getElementById("mods-list").innerHTML = html;
        });
    }
    else if (gameName === "nba-2k11") {
        fetch("Views/NBA2K11/Partials/" + id + ".html").then(result => result.text()).then(html => {
            document.getElementById("mods-list").innerHTML = html;
        });
    }
    else if (gameName === "nba-2k14") {
        fetch("Views/NBA2K14/Partials/" + id + ".html").then(result => result.text()).then(html => {
            document.getElementById("mods-list").innerHTML = html;
        });
    }
    else if (gameName === "stickman-basketball") {
        fetch("Views/StickmanBasketball/Partials/" + id + ".html").then(result => result.text()).then(html => {
            document.getElementById("mods-list").innerHTML = html;
        });
    }
}