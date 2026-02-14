import { HomeController } from "./Controllers/HomeController.js";
import { GTASanAndreasController } from "./Controllers/GTASanAndreasController.js";
import { NBA2k11Controller } from "./Controllers/NBA2k11Controller.js";
import { NBA2k14Controller } from "./Controllers/NBA2k14Controller.js";
import { StickmanBasketballController } from "./Controllers/StickmanBasketballController.js";

const routes = [
    { path: "^#/$", controller: HomeController.Index },

    { path: "^#/gta-san-andreas$", controller: GTASanAndreasController.Index },
    { path: "^#/gta-san-andreas/page/([0-9]+)$", controller: GTASanAndreasController.Index },
    { path: "^#/gta-san-andreas/post/([0-9]+)$", controller: GTASanAndreasController.Post },
    
    { path: "^#/nba-2k11$", controller: NBA2k11Controller.Index },
    { path: "^#/nba-2k11/page/([0-9]+)$", controller: NBA2k11Controller.Index },
    { path: "^#/nba-2k11/post/([0-9]+)$", controller: NBA2k11Controller.Post },

    { path: "^#/nba-2k14$", controller: NBA2k14Controller.Index },
    { path: "^#/nba-2k14/page/([0-9]+)$", controller: NBA2k14Controller.Index },
    { path: "^#/nba-2k14/post/([0-9]+)$", controller: NBA2k14Controller.Post },

    { path: "^#/stickman-basketball$", controller: StickmanBasketballController.Index },
    { path: "^#/stickman-basketball/page/([0-9]+)$", controller: StickmanBasketballController.Index },
    { path: "^#/stickman-basketball/post/([0-9]+)$", controller: StickmanBasketballController.Post }
];

async function Router() {
    const hash = location.hash || "#/";

    for (let route of routes) {
        const match = hash.match(route.path);

        if (match) {
            await route.controller(match[1]);
            return;
        }
    }

    document.getElementById("app").innerHTML = "<h1>404 Not Found</h1>";
}

function navigateTo(url) {
    history.pushState(null, null, url);
    Router();
}

document.addEventListener("click", e => {
    if (e.target.matches("[data-link]")) {
        e.preventDefault();
        navigateTo(e.target.href);
    }
});

window.addEventListener("popstate", Router);
window.addEventListener("DOMContentLoaded", Router);