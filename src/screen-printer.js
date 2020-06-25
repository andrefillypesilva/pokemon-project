export class ScreenPrinter {
    createEnvironment() {
        let app = document.getElementById("app");
        let container = document.createElement("div");
        let row = document.createElement("row");

        app.appendChild(container);
        container.appendChild(row);

        container.setAttribute("class", "container");
        row.setAttribute("class", "row");

        for (let i = 0; i < 16; i++) {
            let pokehomeDiv = document.createElement("div");
            pokehomeDiv.setAttribute("id", `pokehome${i+1}`);

            pokehomeDiv.classList = "col-md-3 pokehome";

            row.appendChild(pokehomeDiv);

            let img = document.createElement("img");
            img.setAttribute("src", `./images/${this.randomImage()}`);
            pokehomeDiv.appendChild(img);
        }
    }

    randomImage() {
        return `${Math.ceil(Math.random() * 10)}.png`;
    }
}