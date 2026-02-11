fetch(path + "nba-2k11/post/mods-list.html").then(res => res.text()).then(html => {
    document.getElementById("mods-list").innerHTML = html;
    if (window.location.hash) {
        const targetId = window.location.hash.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            setTimeout(() => {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }
});

fetch(path + "nba-2k11/post/individual-mods-list.html").then(res => res.text()).then(html => {
    const modsList = document.getElementById("individual-mods-list");
    modsList.innerHTML = html;

    const mods = modsList.querySelectorAll(".post-item");
    mods.forEach(mod => {
        const originalHref = mod.getAttribute("href");
        mod.setAttribute("href", path + originalHref);
    });
});