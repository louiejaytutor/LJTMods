export const HomeController = {
    async Index() {
        const response = await fetch("Views/Home/Index.html");
        const html = await response.text();
        document.title = "LJT Mods - Official Website";
        document.getElementById("app").innerHTML = html;

        FetchGamesList();
    }
};