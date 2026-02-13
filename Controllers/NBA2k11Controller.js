export const NBA2k11Controller = {
    async Index() {
        const response = await fetch("/Views/NBA2K11/Index.html");
        const html = await response.text();
        document.title = "NBA 2K11 - LJT Mods";
        document.getElementById("app").innerHTML = html;

        const gameName = "nba-2k11";
        FetchGamesList();
        FetchModPacksList(gameName);
        FetchIndividualModsList(gameName);
        FetchModsList(gameName);
    },

    async Post(id) {
        const response = await fetch("/Views/NBA2K11/Index.html");
        const html = await response.text();
        document.title = "NBA 2K11 - " + id + " | LJT Mods";
        document.getElementById("app").innerHTML = html;

        const gameName = "nba-2k11";
        FetchGamesList();
        FetchModPacksList(gameName);
        FetchIndividualModsList(gameName);
        FetchModDetails(gameName, id);
    }
};