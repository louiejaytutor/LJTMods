export const NBA2k14Controller = {
    async Index() {
        const response = await fetch("/Views/NBA2K14/Index.html");
        const html = await response.text();
        document.title = "NBA 2K14 - LJT Mods";
        document.getElementById("app").innerHTML = html;

        const gameName = "nba-2k14";
        FetchGamesList();
        FetchModPacksList(gameName);
        FetchIndividualModsList(gameName);
        FetchModsList(gameName);
    },

    async Post(id) {
        const response = await fetch("/Views/NBA2K14/Index.html");
        const html = await response.text();
        document.title = "NBA 2K14 - " + id + " | LJT Mods";
        document.getElementById("app").innerHTML = html;

        const gameName = "nba-2k14";
        FetchGamesList();
        FetchModPacksList(gameName);
        FetchIndividualModsList(gameName);
        FetchModDetails(gameName, id);
    }
};