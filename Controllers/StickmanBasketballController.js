export const StickmanBasketballController = {
    async Index() {
        const response = await fetch("/Views/StickmanBasketball/Index.html");
        const html = await response.text();
        document.title = "Stickman Basketball - LJT Mods";
        document.getElementById("app").innerHTML = html;

        const gameName = "stickman-basketball";
        FetchGamesList();
        FetchModPacksList(gameName);
        FetchIndividualModsList(gameName);
        FetchModsList(gameName);
    },

    async Post(id) {
        const response = await fetch("/Views/StickmanBasketball/Index.html");
        const html = await response.text();
        document.title = "Stickman Basketball - " + id + " | LJT Mods";
        document.getElementById("app").innerHTML = html;

        const gameName = "stickman-basketball";
        FetchGamesList();
        FetchModPacksList(gameName);
        FetchIndividualModsList(gameName);
        FetchModDetails(gameName, id);
    }
};