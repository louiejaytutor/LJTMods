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

function applyPagination(game, page) {
    const items = document.querySelectorAll(".col-1-section");
    const itemsPerPage = 10;
    const totalItems = items.length;
    const pages = Math.ceil(totalItems / itemsPerPage);

    if (page < 1 || page > pages) {
        document.getElementById("app").innerHTML = "<h1>404 - Page Not Found</h1>";
        return;
    }

    items.forEach(item => item.style.display = "none");

    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    for (let i = start; i < end && i < totalItems; i++) {
        items[i].style.display = "block";
    }

    renderPaginationControls(game, page, pages);
}

function renderPaginationControls(game, currentPage, pages) {
    const col1 = document.querySelector(".col-1");
    if (!col1) return;

    const oldPagination = document.querySelector(".pagination");
    if (oldPagination) oldPagination.remove();

    let html = `<div class="pagination">`;
    for (let i = 1; i <= pages; i++) {
        html += `<a href="#/${game}/page/${i}" class="${i === currentPage ? 'active' : ''}">${i}</a>`;
    }
    html += `</div>`;

    col1.insertAdjacentHTML("beforeend", html);
}

function FetchGamesList(game) {
    fetch("Views/Partials/GamesList.html").then(result => result.text()).then(html => {
        document.getElementById("games-list").innerHTML = html;

        const items = document.querySelectorAll("#games-list .item");
        if (game === "gta-san-andreas") {
            items[0].classList.add("active");
        }
        else if (game === "nba-2k11") {
            items[1].classList.add("active");
        }
        else if (game === "nba-2k14") {
            items[2].classList.add("active");
        }
        else if (game === "stickman-basketball") {
            items[3].classList.add("active");
        }
    });
}

function FetchModPacksList(game) {
    let path = "";
    if (game === "gta-san-andreas") {
        path = "Views/GTASanAndreas/Partials/ModPacksList.html";
    }
    else if (game === "nba-2k11") {
        path = "Views/NBA2K11/Partials/ModPacksList.html";
    }
    else if (game === "nba-2k14") {
        path = "Views/NBA2K14/Partials/ModPacksList.html";
    }
    else if (game === "stickman-basketball") {
        path = "Views/StickmanBasketball/Partials/ModPacksList.html";
    }

    fetch(path).then(result => result.text()).then(html => {
        document.getElementById("mod-packs-list").innerHTML = html;

        const hash = window.location.hash;
        const items = document.querySelectorAll("#mod-packs-list .item");
        items.forEach(item => {
            item.getAttribute("href") === hash ? item.classList.add("active") : item.classList.remove("active");
        });
    });
}

function FetchIndividualModsList(game) {
    let path = "";
    if (game === "gta-san-andreas") {
        path = "Views/GTASanAndreas/Partials/IndividualModsList.html";
    }
    else if (game === "nba-2k11") {
        path = "Views/NBA2K11/Partials/IndividualModsList.html";
    }
    else if (game === "nba-2k14") {
        path = "Views/NBA2K14/Partials/IndividualModsList.html";
    }
    else if (game === "stickman-basketball") {
        path = "Views/StickmanBasketball/Partials/IndividualModsList.html";
    }

    fetch(path).then(result => result.text()).then(html => {
        document.getElementById("individual-mods-list").innerHTML = html;

        const hash = window.location.hash;
        const items = document.querySelectorAll("#individual-mods-list .item");
        items.forEach(item => {
            item.getAttribute("href") === hash ? item.classList.add("active") : item.classList.remove("active");
        });
    });
}

function FetchModsList(game) {
    let path = "";
    if (game === "gta-san-andreas") {
        path = "Views/GTASanAndreas/Partials/ModsList.html";
    }
    else if (game === "nba-2k11") {
        path = "Views/NBA2K11/Partials/ModsList.html";
    }
    else if (game === "nba-2k14") {
        path = "Views/NBA2K14/Partials/ModsList.html";
    }
    else if (game === "stickman-basketball") {
        path = "Views/StickmanBasketball/Partials/ModsList.html";
    }

    fetch(path).then(result => result.text()).then(html => {
        document.getElementById("mods-list").innerHTML = html;
    });
}

function FetchModDetails(game, id) {
    if (game === "gta-san-andreas") {
        fetch("Views/GTASanAndreas/Partials/" + id + ".html").then(result => result.text()).then(html => {
            document.getElementById("mods-list").innerHTML = html;
        });
    }
    else if (game === "nba-2k11") {
        fetch("Views/NBA2K11/Partials/" + id + ".html").then(result => result.text()).then(html => {
            document.getElementById("mods-list").innerHTML = html;
        });
    }
    else if (game === "nba-2k14") {
        fetch("Views/NBA2K14/Partials/" + id + ".html").then(result => result.text()).then(html => {
            document.getElementById("mods-list").innerHTML = html;
        });
    }
    else if (game === "stickman-basketball") {
        fetch("Views/StickmanBasketball/Partials/" + id + ".html").then(result => result.text()).then(html => {
            document.getElementById("mods-list").innerHTML = html;
        });
    }
}