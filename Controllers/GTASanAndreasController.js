export const GTASanAndreasController = {
    async Index() {
        const response = await fetch("/Views/GTASanAndreas/Index.html");
        const html = await response.text();
        document.title = "GTA: San Andreas - LJT Mods";
        document.getElementById("app").innerHTML = html;

        const gameName = "gta-san-andreas";
        FetchGamesList();
        FetchModPacksList(gameName);
        FetchIndividualModsList(gameName);
        FetchModsList(gameName);
    },

    async Post(id) {
        const response = await fetch("/Views/GTASanAndreas/Index.html");
        const html = await response.text();
        document.title = "GTA: San Andreas - " + id + " | LJT Mods";
        document.getElementById("app").innerHTML = html;

        const gameName = "gta-san-andreas";
        FetchGamesList();
        FetchModPacksList(gameName);
        FetchIndividualModsList(gameName);
        FetchModDetails(gameName, id);
    }
};