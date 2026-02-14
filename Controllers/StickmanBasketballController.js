export const StickmanBasketballController = {
    async Index(page = 1) {
        page = parseInt(page) || 1;

        const response = await fetch("Views/StickmanBasketball/Index.html");
        const html = await response.text();
        document.title = "Stickman Basketball - LJT Mods";
        document.getElementById("app").innerHTML = html;

        const game = "stickman-basketball";
        FetchGamesList(game);
        FetchModPacksList(game);
        FetchIndividualModsList(game);
        FetchModsList(game);

        setTimeout(() => {
            applyPagination(game, page);
        }, 300);
    },

    async Post(id) {
        const response = await fetch("Views/StickmanBasketball/Index.html");
        const html = await response.text();
        document.title = "Stickman Basketball - " + id + " | LJT Mods";
        document.getElementById("app").innerHTML = html;

        const game = "stickman-basketball";
        FetchGamesList(game);
        FetchModPacksList(game);
        FetchIndividualModsList(game);
        FetchModDetails(game, id);
    }
};