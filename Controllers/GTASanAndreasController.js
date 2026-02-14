export const GTASanAndreasController = {
    async Index(page = 1) {
        page = parseInt(page) || 1;

        const response = await fetch("Views/GTASanAndreas/Index.html");
        const html = await response.text();
        document.title = "GTA: San Andreas - LJT Mods";
        document.getElementById("app").innerHTML = html;

        const game = "gta-san-andreas";
        FetchGamesList(game);
        FetchModPacksList(game);
        FetchIndividualModsList(game);
        FetchModsList(game);

        setTimeout(() => {
            applyPagination(game, page);
        }, 300);
    },

    async Post(id) {
        const response = await fetch("Views/GTASanAndreas/Index.html");
        const html = await response.text();
        document.title = "GTA: San Andreas - " + id + " | LJT Mods";
        document.getElementById("app").innerHTML = html;

        const game = "gta-san-andreas";
        FetchGamesList(game);
        FetchModPacksList(game);
        FetchIndividualModsList(game);
        FetchModDetails(game, id);
    }
};