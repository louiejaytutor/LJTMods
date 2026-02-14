export const NBA2k14Controller = {
    async Index(page = 1) {
        page = parseInt(page) || 1;

        const response = await fetch("Views/NBA2K14/Index.html");
        const html = await response.text();
        document.title = "NBA 2K14 - LJT Mods";
        document.getElementById("app").innerHTML = html;

        const game = "nba-2k14";
        FetchGamesList(game);
        FetchModPacksList(game);
        FetchIndividualModsList(game);
        FetchModsList(game);

        setTimeout(() => {
            applyPagination(game, page);
        }, 300);
    },

    async Post(id) {
        const response = await fetch("Views/NBA2K14/Index.html");
        const html = await response.text();
        document.title = "NBA 2K14 - " + id + " | LJT Mods";
        document.getElementById("app").innerHTML = html;

        const game = "nba-2k14";
        FetchGamesList(game);
        FetchModPacksList(game);
        FetchIndividualModsList(game);
        FetchModDetails(game, id);
    }
};