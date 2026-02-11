let isDark = localStorage.getItem('dark_mode') === 'true';

function applyTheme() {
    const theme = document.getElementById('theme');
    if (isDark) {
        theme.href = 'static/css/dark.css';
        document.getElementById('logo').src = 'static/img/logo-1.png';
        document.getElementById("toggle-label").textContent = "Dark Mode: On";
    }
    else {
        theme.href = 'static/css/light.css';
        document.getElementById('logo').src = 'static/img/logo.png';
        document.getElementById("toggle-label").textContent = "Dark Mode: Off";
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